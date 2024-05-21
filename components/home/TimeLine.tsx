import { TimelineData } from '@/app/types/Timeline.type';
import { TimelineItem } from './TimelineItem';
import { getAchievement } from '@/lib/connect/achievement';

export const Timeline = async () => {
  const timelineData: TimelineData[] = await getAchievement();
  return (
    timelineData.length > 0 && (
      <div className="timeline-container">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    )
  );
};
