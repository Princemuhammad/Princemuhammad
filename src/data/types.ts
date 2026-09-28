export interface Dua {
  label?: string;
  transliteration: string;
  translation: string;
  source?: string;
}

export interface MenuItem {
  title: string;
  subtitle?: string;
  route: string;
}
