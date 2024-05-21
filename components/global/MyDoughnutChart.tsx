'use client';
import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  rate: number;
  className?: string;
}

export const ChartCircle = ({ rate, className }: Props) => {
  let data = [
    {
      label: 'Label 1',
      value: rate,
      color: '#006C84',
    },
    {
      label: 'Label 2',
      value: 100 - rate,
      color: '#B5CDD3',
    },
  ];

  const options: ChartOptions<'doughnut'> = {
    cutout: '75%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const finalData: ChartData<'doughnut'> = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 0.5,
      },
    ],
  };

  return (
    <div
      style={{
        width: '80px',
        height: '80px',
      }}
    >
      <Doughnut data={finalData} options={options} className={className} />
    </div>
  );
};
