import { Component } from '@angular/core';
import {
  GuardsCheckEnd,
  GuardsCheckStart,
  NavigationEnd,
  NavigationStart,
  Router,
  RoutesRecognized,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ERP-project4';
  loadedFeature = 'offre';
  loginSpace: boolean;
  constructor(private route: Router) {}

  ngOnInit() {
    this.route.events.subscribe(
      (
        val:
          | NavigationEnd
          | GuardsCheckStart
          | NavigationStart
          | RoutesRecognized
          | GuardsCheckEnd
      ) => {
        if (val && val.url) {
          this.loginSpace =
            val.url.includes('login') || val.url.includes('register');
        }
      }
    );
  }
}
