export type Skill = {
  name: string;
  icon: string;
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
