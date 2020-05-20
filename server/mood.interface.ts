export interface Mood {
  id: number;
  mood: number;
  feeling: Feeling;
  comment: string;
  createdAt: string;
}

export interface Moods {
  [key: number]: Mood;
}

enum Feeling {
  Depressed = "depressed",
  Optimistic = "optimistic",
  Bored = "bored",
  Happy = "happy",
}
