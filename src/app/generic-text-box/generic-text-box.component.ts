import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'generic-text-box',
  templateUrl: './generic-text-box.component.html',
  styleUrls: ['./generic-text-box.component.css']
})

export class GenericTextBoxComponent implements OnInit {
  @Input() textBoxDetail: any;

  constructor() { 
  }

  ngOnInit() {
  }

}
