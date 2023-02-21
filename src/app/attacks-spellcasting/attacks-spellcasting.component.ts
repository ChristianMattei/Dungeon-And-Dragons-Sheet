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

  weaponList: any[] = [
    {row: 0, atkBonus:"", damageType:"", bonusStat:"", hideRow: false},
    {row: 1, atkBonus:"", damageType:"", bonusStat:"", hideRow: false},
    {row: 2, atkBonus:"", damageType:"", bonusStat:"", hideRow: false}
  ];

  armorList: any[] = [
    {row: 0, classArmor:"", description:"", statModifier: "", classArmorWithBonusDex:"", hideRow: false},
    {row: 1, classArmor:"", description:"", statModifier: "", classArmorWithBonusDex:"", hideRow: false}
  ]

  equipmentList: Equipment[] = [];
  weaponsFiltered: Equipment[] = [];
  armorsFiltered: Equipment[] = [];
  
  constructor(private utils: UtilsService, private dataServices: DataServiceService) { }

  ngOnInit() {
    this.equipmentList = this.dataServices.getEquipment();
    this.filterEquipmentByType()
  }

  ngDoCheck() {
    this.updateFilteredEquipmentList();
  }

  onSelect(event, row) {
    let itemSelected = event.target.value;

    //console.log("event itemSelected", itemSelected)
    this.equipmentList.forEach(equipment => {
      if(equipment.name === itemSelected) {
        if(equipment.type === 'Weapon') {
          this.weaponList[row].hideRow = false;
          this.weaponList[row].bonusStat = equipment.bonusStat;
          this.weaponList[row].damageType = equipment.attackDice;
          this.weaponList[row].atkBonus = this.utils.sumNumbers(this.getStatMod(equipment.bonusStat), this.utils.getProficiencyBonus());
        }
        else {
          this.armorList[row].hideRow = false;
          this.armorList[row].description = equipment.description;
          this.armorList[row].statModifier = equipment.statModifier;
          this.armorList[row].classArmor = equipment.classArmor;
          this.armorList[row].classArmorWithBonusDex = this.classArmorCalculator(equipment);
        }
      }
      else if(itemSelected === "No weapon") {
        this.weaponList[row].hideRow = true;
      }
      else if(itemSelected === "No armor") {
        this.armorList[row].hideRow = true;
      }

    });
  }

  filterEquipmentByType() {
    this.equipmentList.forEach(equipment => {
      if(equipment.type === 'Weapon'){
        this.weaponsFiltered.push(equipment);
      }
      else if(equipment.type === 'Armor'){
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

    if(!!equipment.statModifier && modDex >2) { //max bonus = 2
      ca = this.utils.sumNumbers(equipment.classArmor, 2);
    }
    else if(!!equipment.statModifier && modDex <= 2 && modDex >= 1) {
      ca = this.utils.sumNumbers(equipment.classArmor, modDex);
    }
    else {
      ca = equipment.classArmor;
    }

    return ca;
  }

  updateFilteredEquipmentList() {
    this.weaponList.forEach(weapon => {
      if(!!weapon.bonusStat && !!weapon.atkBonus && !!this.proficiencyBonusUp.changed) {
        weapon.atkBonus = this.utils.sumNumbers(this.getStatMod(weapon.bonusStat), this.utils.getProficiencyBonus());
      }
    });

    this.armorList.forEach(armor => {
      armor.classArmorWithBonusDex = this.classArmorCalculator(armor);
    });
  }

}
