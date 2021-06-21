import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  constructor() {}
  pdfSrc1 = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  emailFormControl = new FormControl('', [Validators.email]);

  ngOnInit(): void {}
}
