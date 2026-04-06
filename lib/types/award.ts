export interface Award {
  id: string;
  name: string;
  event: string;
  date: string;
  rank: 'Gold' | 'Silver' | 'Bronze' | 'Special' | string;
  prize: string;
  url: string | null;
}
