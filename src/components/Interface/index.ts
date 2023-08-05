export interface IProjectOptionsProps {
  setCurrentOption: (option: string) => void;
  currentOption: string;
}
export type Project = {
  name: string;
  img: string;
  liveLink: string;
  description: string;
  type: String;
};
