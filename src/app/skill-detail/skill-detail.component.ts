import { Component, Input, OnInit } from '@angular/core';
import { ProficiencyBonus } from '../model/proficiencyBonus';
import { Skill } from '../model/skill';
import { Stat } from '../model/stat';

@Component({
  selector: 'skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.css']
})
export class SkillDetailComponent implements OnInit {
  @Input() skillElements: Skill[];
  @Input() proficiencyBonusUp: ProficiencyBonus;

  constructor() { }

  ngOnInit() {
  }

  isChecked(eventCheck, skill: Skill) {
    skill.stat.checked = eventCheck.target.checked;
    this.updateModProficiencyBonus(skill);
    console.log("skillBonus ", skill.stat);
  }

  updateModProficiencyBonus(skill) {
    if(skill){
      skill.stat.modProficiencyBonus = 0
      var mod: number = skill.stat.mod;
      skill.stat.modProficiencyBonus = + mod + + this.proficiencyBonusUp.bonus;
    }
  }

}
