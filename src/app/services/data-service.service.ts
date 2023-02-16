import { Injectable } from '@angular/core';
import { Skill } from '../model/skill';
import { Stat } from '../model/stat';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  getStat() {
    let statList: Stat[] = [
      {nameStat: 'Strength', mod: 0},
      {nameStat:'Dexterity', mod: 0},
      {nameStat:'Constitution', mod: 0},
      {nameStat:'Intelligence', mod: 0},
      {nameStat:'Wisdom', mod: 0},
      {nameStat:'Charisma', mod: 0}
    ];

    return statList;
  }

  getSkill() {
    let skillList: Skill[] = [
      {nameSkill: 'Acrobatics', statType: 'Dex'},
      {nameSkill: 'Animal Handling', statType: 'Wis'},
      {nameSkill: 'Arcana', statType: 'Int'},
      {nameSkill: 'Athletics', statType: 'Str'},
      {nameSkill: 'Deception', statType: 'Cha'},
      {nameSkill: 'History', statType: 'Int'},
      {nameSkill: 'Insight', statType: 'Wis'},
      {nameSkill: 'Intimidation', statType: 'Cha'},
      {nameSkill: 'Investigation', statType: 'Int'},
      {nameSkill: 'Medicine', statType: 'Wis'},
      {nameSkill: 'Nature', statType: 'Int'},
      {nameSkill: 'Perception', statType: 'Wis'},
      {nameSkill: 'Performance', statType: 'Cha'},
      {nameSkill: 'Persuasion', statType: 'Cha'},
      {nameSkill: 'Religion', statType: 'Int'},
      {nameSkill: 'Sleight of Hand', statType: 'Dex'},
      {nameSkill: 'Stealth', statType: 'Dex'},
      {nameSkill: 'Survival', statType: 'Wis'},
    ];

    return skillList;
  }
}
