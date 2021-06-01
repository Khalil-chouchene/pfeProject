import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres-list',
  templateUrl: './offres-list.component.html',
  styleUrls: ['./offres-list.component.scss'],
})
export class OffresListComponent implements OnInit {
  organizations = [
    { id: 1, name: 'ali', description: ' monsef ' },
    { id: 2, name: 'ali', description: ' monsef ' },
    { id: 3, name: 'ali', description: ' monsef ' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
