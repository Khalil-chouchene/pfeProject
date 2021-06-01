import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ERP-project4';
  loadedFeature = 'offre';

  // tslint:disable-next-line:typedef
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
