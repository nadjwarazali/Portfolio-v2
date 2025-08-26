interface Folder {
  id: string;
  label: string;
  titlePosition: number;
  subtitle?: string;
}

interface Project {
  id: string;
  title: string;
  categories: string[];
  stack?: string[];
  description?: string;
  image?: string;
}
