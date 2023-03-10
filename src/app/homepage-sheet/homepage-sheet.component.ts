import { getUrlScheme } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { ProficiencyBonus } from '../model/proficiencyBonus';
import { Skill } from '../model/skill';
import { Stat } from '../model/stat';
import { DataServiceProva } from '../services/data-service-prova';
import { DataServiceService } from '../services/data-service.service';
import { UtilsService } from '../services/utils-service';

@Component({
  selector: 'homepage-sheet',
  templateUrl: './homepage-sheet.component.html',
  styleUrls: ['./homepage-sheet.component.css']
})

export class HomepageSheetComponent implements OnInit {

  statList: Stat[] = [];
  skillList: Skill[] = [];

  proficiencyBonus: ProficiencyBonus = {bonus: 0, update: false, changed: false};
  textBoxDetail: any[] = [
    {subTitle: "OTHER PROFICIENCY & LANGUAGES", rows: "4"},
    {subTitle: "PERSONALITY TRAITS", rows: "4"},
    {subTitle: "IDEALS", rows: "3"},
    {subTitle: "BONDS", rows: "3"},
    {subTitle: "FLAWS", rows: "3"},
    {subTitle: "FEATURES & TRAITS", rows: "20"}
  ];

  constructor(private utils: UtilsService, private dataServices: DataServiceService) {
  
  }

  ngOnInit() {
    this.statList = this.dataServices.getStat();
    this.skillList = this.dataServices.getSkill();

    this.addStatOnSkill();
  }

  addStatOnSkill() {
    var tempStat = JSON.parse(JSON.stringify(this.statList));
    if(this.statList) {
      this.skillList.forEach(skillElement => {
        tempStat.forEach(statElement => {
          if(skillElement.statType == statElement.nameStat.substring(0,3)) {
            skillElement.stat = statElement;
          }
        });
      });
    }
    //console.log("addStatOnSkill ", this.skillList);
  }

  inputProficiencyBonus(eventInputText: any) {
    if(!!eventInputText.target.value) {
      (eventInputText.target.value > 0 || eventInputText.target.value < 0) ? 
        this.proficiencyBonus.changed = true : this.proficiencyBonus.changed = false;
      this.proficiencyBonus.update = true;
      this.proficiencyBonus.bonus = eventInputText.target.value;
    }
    else {
      this.proficiencyBonus.update = false;
      this.proficiencyBonus.changed = false;
      this.proficiencyBonus.bonus = 0;
    }
    
    //this.updateModProficiencyBonus();

    this.statList = this.utils.updateStatModProficiencyBonus(this.statList, this.proficiencyBonus.bonus);
    this.skillList = this.utils.updateSkillModProficiencyBonus(this.skillList, this.proficiencyBonus.bonus);
    this.utils.updateProficiencyBonus(this.proficiencyBonus.bonus);
  }


}
