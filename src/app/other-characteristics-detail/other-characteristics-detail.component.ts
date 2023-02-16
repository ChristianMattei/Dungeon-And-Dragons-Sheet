import { Component, Input, OnInit } from '@angular/core';
import { Stat } from '../model/stat';

@Component({
  selector: 'other-characteristics-detail',
  templateUrl: './other-characteristics-detail.component.html',
  styleUrls: ['./other-characteristics-detail.component.css']
})
export class OtherCharacteristicsDetailComponent implements OnInit {
  @Input() statElements: Stat[];
  
  dexBonus: number = 0;

  constructor() { }

  ngOnInit() {

  }

  getDexBonus() {
    this.statElements.forEach(element => {
      if(element.nameStat === "Dexterity" && !!element.mod) {
        this.dexBonus = element.mod;
      }
    });
    console.log("dexb:", this.dexBonus)
  }

}
