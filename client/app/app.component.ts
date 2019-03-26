import { Component, HostBinding, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router, private breakpointObserver: BreakpointObserver) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }
  @HostBinding('class.loaded')
  get valid() {
    return this.isLoaded === true;
  }
  public isLoaded: Boolean = false;

  public isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));
  public isTablet: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet).pipe(map(result => result.matches));

  public ngOnInit(): void {
    this.isLoaded = true;
  }
}
