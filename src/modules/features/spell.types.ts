export interface ISpell {
  index: string;
  name: string;
  url: string;
}

export interface ISpellsResponse {
  count: number;
  results: ISpell[];
}

export interface DamageType {
  index: string;
  name: string;
  url: string;
}

export interface DamageAtSlotLevel {
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
}

export interface Damage {
  damage_type: DamageType;
  damage_at_slot_level: DamageAtSlotLevel;
}

export interface School {
  index: string;
  name: string;
  url: string;
}

export interface Class {
  index: string;
  name: string;
  url: string;
}

export interface Subclass {
  index: string;
  name: string;
  url: string;
}

export interface ISpellResponse {
  index: string;
  name: string;
  desc: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type: string;
  damage: Damage;
  school: School;
  classes: Class[];
  subclasses: Subclass[];
  url: string;
}

export interface ISpellInfoBlock {
  title: string;
  text: string[] | string;
}

export interface ISpellBtn {
  text: string;
  route: string;
  data: ISpell;
}
