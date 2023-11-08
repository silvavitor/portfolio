export type ProjectDataDescription = {
  pt: string,
  en: string
};

export type ProjectData = {
  id: string,
  title: string,
  description: ProjectDataDescription,
  images: string[],
  techs: Array<string>,
  repo: string,
  live: string,
};