import {Injectable} from '@angular/core';
import { Skill } from '../model/skill';
import { Stat } from '../model/stat';

@Injectable({
  providedIn: 'root' // Just do @Injectable() if you're not on Angular v6+
})

export class UtilsService {

    sumNumbers(a: number, b: number) {
        return + a + + b;
    }

    updateStatModProficiencyBonus(statList: Stat[], proficiencyBonus: number) {
        statList.forEach(element => {
          //if(this.proficiencyBonus.bonus>0 || this.proficiencyBonus.bonus<0)
          if(!!element.checked) {
            element.modProficiencyBonus = 0;
            element.modProficiencyBonus = this.sumNumbers(element.mod, proficiencyBonus);
          }
        });
        return statList;
    }

    updateSkillModProficiencyBonus(skillList: Skill[], proficiencyBonus: number, mod?: number) {
      skillList.forEach(element => {
        //if(this.proficiencyBonus.bonus>0 || this.proficiencyBonus.bonus<0)
        if(!!element.stat.checked) {
          element.stat.modProficiencyBonus = 0;
          console.log('PRIMA sett, pass mod ', mod, 'mod corrente: ', element.stat.mod)
          if(!!mod) {//stat-detail
            element.stat.modProficiencyBonus = this.sumNumbers(mod, proficiencyBonus);
          }
          else {//homepage
            element.stat.modProficiencyBonus = this.sumNumbers(element.stat.mod, proficiencyBonus);
          }
          console.log("stat-detail skillElements: ", "  ", element.stat);
        }
      });
      return skillList;
  }
    
}