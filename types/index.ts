export type Skill = {
  name: string;
  icon: string;
  darkIcon?: string;
};

export type SkillCategory = {
  languages?: Skill[];
  frameworks?: Skill[];
  databases?: Skill[];
  librariesAndTools?: Skill[];
  runtimeEnvironments?: Skill[];
  softwares?: Skill[];
  devops?: Skill[];
  testing?: Skill[];
};
