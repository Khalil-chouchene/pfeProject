import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-offres',
  templateUrl: './my-offres.component.html',
  styleUrls: ['./my-offres.component.scss']
})
export class MyOffresComponent implements OnInit {
  offresTab = [
    { id: 1, name: 'software engineer', description: ' front-end developer ' },
    { id: 2, name: 'software engineer', description: ' UI/UX ' },
    { id: 3, name: 'marketing', description: ' 2 years of exprinece ' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
