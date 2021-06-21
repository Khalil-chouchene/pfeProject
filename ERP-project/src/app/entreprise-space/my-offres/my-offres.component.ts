import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-offres',
  templateUrl: './my-offres.component.html',
  styleUrls: ['./my-offres.component.scss'],
})
export class MyOffresComponent implements OnInit {
  offresTab = [
    {
      id: 1,
      name: 'Concepteur UML',
      description: ' une expérience de 2 années ',
    },
    {
      id: 2,
      name: 'Software engineer',
      description: ' UI/UX ',
    },
    {
      id: 3,
      name: ' marketing',
      description: ' 2 years of exprinece ',
    },
    {
      id: 4,
      name: ' Développeur mobile',
      description: ' Android ',
    },
    {
      id: 5,
      name: 'Comptabilité',
      description: '   ',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
