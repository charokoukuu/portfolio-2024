import { ISOStringToLocaleString } from '@/lib/utils/util';

interface TimelineItemProps {
  data: {
    category: {
      tag: string;
      color: string;
    };
    date: string;
    text: string;
    link?: {
      url: string;
      text: string;
    };
  };
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{ISOStringToLocaleString(data.date)}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
);
