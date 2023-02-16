import { Component, Input, OnInit } from '@angular/core';
import { ProficiencyBonus } from '../model/proficiencyBonus';
import { Stat } from '../model/stat';

@Component({
  selector: 'saving-throws',
  templateUrl: './saving-throws.component.html',
  styleUrls: ['./saving-throws.component.css']
})
export class SavingThrowsComponent implements OnInit {
  @Input() statElements: Stat[];
  @Input() proficiencyBonusUp: ProficiencyBonus;
  
  statWithBonus: Stat[];
  HomepageSheetComponent: any;


  constructor() { }

  ngOnInit() {

  }
  
  isChecked(eventCheck, stat) {
    stat.checked = eventCheck.target.checked;
    this.updateModProficiencyBonus(stat);
    console.log("statBonus ", stat);
  }

  updateModProficiencyBonus(stat) {
    if(stat){
      stat.modProficiencyBonus = 0
      var mod: number = stat.mod;
      stat.modProficiencyBonus = + mod + + this.proficiencyBonusUp.bonus;
    }
  }
}
