export interface Hero {
  id: number;
  name: string;
  description?: string;
  like: number;
}

export const defaultHero: Hero = {
  id: 0,
  name: '',
  like: 0
};
