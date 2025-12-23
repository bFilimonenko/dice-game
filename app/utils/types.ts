export type HistoryItem = {
  time: string;
  guess: string;
  result: number;
  win: boolean;
};

export type Choice = 'over' | 'under';
