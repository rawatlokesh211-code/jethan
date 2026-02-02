
export interface CharacterCard {
  id: string;
  name: string;
  role: string;
  image: string;
  powerLevel: number;
}

export enum GenerationType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE'
}

export interface ShowcaseItem {
  id: string;
  original: string;
  generated: string;
  prompt: string;
}
