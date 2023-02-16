import { Component, Input, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { ProficiencyBonus } from '../model/proficiencyBonus';
import { Skill } from '../model/skill';
import { Stat } from '../model/stat';
import { UtilsService } from '../services/utils-service';

@Component({
  selector: 'stat-detail',
  templateUrl: './stat-detail.component.html',
  styleUrls: ['./stat-detail.component.css']
})

export class StatDetailComponent implements OnInit {
  @Input() statElements: Stat[];
  @Input() skillElements: Skill[];
  @Input() proficiencyBonusUp: ProficiencyBonus;
  
  mod: number;

  constructor(private utils: UtilsService) {

  }

  ngOnInit() {
    //this.setUppercaseStat();
  }

  checkInputText(eventInputText: any, statEl: Stat) {
    var counterStat = 0;
    if (!eventInputText) {
      counterStat = 0;
    }
    else if(eventInputText % 2 == 0) {//pari
      if(eventInputText == 10) {
        counterStat = 0;
      }
      else {
        counterStat = (eventInputText - 10) / 2;
      }
    }
    else {//dispari
      counterStat = (eventInputText - 11) / 2;
    }
    this.mod = counterStat;
    //setto il modificatore esatto dell'array statElements
    statEl.mod = this.mod;
    //statEl.modProficiencyBonus = this.mod;

    this.statElements = this.utils.updateStatModProficiencyBonus(this.statElements, this.proficiencyBonusUp.bonus);
    this.skillElements = this.utils.updateSkillModProficiencyBonus(this.skillElements, this.proficiencyBonusUp.bonus, statEl.mod);
    this.updateSingleSkillModStat(statEl);
    
    //console.log("stat-detail statElements: ", this.statElements);
  }

  setUppercaseStat() {
    this.statElements.forEach(element => {
      element.nameStat = element.nameStat.toUpperCase() ;
    });
  }

  updateSingleSkillModStat(statEl: Stat){
    if(!!this.skillElements) {
      this.skillElements.forEach(skillElement => {
        if(!!statEl.mod && skillElement.statType == statEl.nameStat.substring(0,3)) {
          skillElement.stat.mod = statEl.mod;
        }
        else if(!statEl.mod) {
          skillElement.stat.mod = 0;
        }
      });
    }
  }

}