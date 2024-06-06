import { TimelineData } from '@/app/types/Timeline.type';

export const getAchievement = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_ACHIEVEMENT_ENDPOINT ?? '',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: TimelineData[] = await response.json();
  return data;
};
