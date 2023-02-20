import { NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Equipment } from '../model/equipment';
import { ProficiencyBonus } from '../model/proficiencyBonus';
import { Stat } from '../model/stat';
import { DataServiceService } from '../services/data-service.service';
import { UtilsService } from '../services/utils-service';

@Component({
  selector: 'attacks-spellcasting',
  templateUrl: './attacks-spellcasting.component.html',
  styleUrls: ['./attacks-spellcasting.component.css']
})
export class AttacksSpellcastingComponent implements OnInit {
  @Input() statElements: Stat[];
  @Input() proficiencyBonusUp: ProficiencyBonus;

  weaponList: any[] = [{row: 0, atkBonus:"", damageType:""},{row: 1, atkBonus:"", damageType:""},{row: 2, atkBonus:"", damageType:""}];
  armorList: any[] = [{row: 0, classArmor:"", description:""},{row: 1, classArmor:"", description:""}]
  equipmentList: Equipment[] = [];

  weaponsFiltered: Equipment[] = [];
  armorsFiltered: Equipment[] = [];

  atkBonusItemSelected: any;
  dmgTypeItemSelected: any;

  
  constructor(private utils: UtilsService, private dataServices: DataServiceService) { }

  ngOnInit() {
    this.equipmentList = this.dataServices.getEquipment();
    this.filterEquipmentByType()
  }

  onSelect(event, row) {
    let itemSelected = event.target.value;
    let indexSelected = event.target["selectedIndex"];

    console.log("event itemSelected", itemSelected)
    this.equipmentList.forEach(equipment => {
      if(equipment.name === itemSelected) {
        if(equipment.type === 'Weapon') {
          this.weaponList[row].damageType = equipment.attackDice;
          this.weaponList[row].atkBonus = this.utils.sumNumbers(this.getStatMod(equipment.bonusStat), this.utils.getProficiencyBonus());
        }
        else {
          this.armorList[row].description = equipment.description;
          this.armorList[row].classArmor = this.classArmorCalculator(equipment);
        }
      }
    });
  }

  filterEquipmentByType() {
    this.equipmentList.forEach(equipment => {
      if(equipment.type === 'Weapon'){
        this.weaponsFiltered.push(equipment);
      }
      else {
        this.armorsFiltered.push(equipment);
      }
    });
  }

  getStatMod(stat: string) {
    let mod = 0;
    this.statElements.forEach(element => {
      if(element.nameStat === stat && !!element.mod) {
        mod = element.mod;
      }
    });

    return mod;
  }

  classArmorCalculator(equipment: Equipment) {
    let ca: number = 0;
    let modDex: number = 0;
    
    this.statElements.forEach(element => {
      if(!!element.mod && element.nameStat === "Dexterity") {
        modDex = element.mod;
      }
    });

    if(!!equipment.statModifier && modDex>2) { //max bonus = 2
      ca = this.utils.sumNumbers(equipment.classArmor, 2);
    }
    else if(!!equipment.statModifier && modDex<=2) {
      ca = this.utils.sumNumbers(equipment.classArmor, modDex);
    }
    else {
      ca = equipment.classArmor;
    }

    return ca;
  }


}
