interface Folder {
  id: string;
  label: string;
  titlePositionDesktop: number;
  titlePositionMobile: number;
  subtitle?: string;
}

interface Project {
  id: string;
  title: string;
  categories: string[];
  stack?: string[];
  description?: string;
  imgSrc?: string;
  link?: string;
}
