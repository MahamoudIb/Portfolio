export type Experience = {
  id: string;
  name: string;
};

export type Student = {
  profileImg: string,
  name: string,
  birthDate: Date,
  degree: string,
  points: number,
  email: string
  experiences: Experience[]
};

export type Project = {
  id: string,
  title: string,
  description: string,
  git_Link: string,
  contributors: string[],
  languages: string[]
}
