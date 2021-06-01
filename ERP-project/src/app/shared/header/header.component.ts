import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // @Output() featureSelected = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature) ;
  // }
}
