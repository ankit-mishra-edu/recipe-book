import { Component, OnInit } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  isRoutingDelayed: boolean = false;
  routerEvents$ = this._router.events;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.routerEvents$.subscribe((routerEvent: Event) =>
      this.checkRouterEvent(routerEvent)
    );
  }

  checkRouterEvent(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      this.isRoutingDelayed = true;
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.isRoutingDelayed = false;
    }
  }
}
