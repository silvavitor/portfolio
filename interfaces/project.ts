export interface ProjectData {
  id: string,
  title: string,
  description: {
    pt: string,
    en: string
  },
  image: string,
  techs: Array<string>,
  repo: string,
  live: string,
}