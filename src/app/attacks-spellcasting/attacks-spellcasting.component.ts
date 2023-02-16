import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'attacks-spellcasting',
  templateUrl: './attacks-spellcasting.component.html',
  styleUrls: ['./attacks-spellcasting.component.css']
})
export class AttacksSpellcastingComponent implements OnInit {

  equipments: any[] = [{name:"1"},{name:"2"},{name:"3"}];
  constructor() { }

  ngOnInit() {
  }

}
