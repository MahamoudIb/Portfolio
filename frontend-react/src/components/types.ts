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
