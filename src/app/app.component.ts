import {Component, OnInit} from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'pt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pt';
  theme = 'pt-theme';

  constructor( private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  onThemeChange() {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }
}
