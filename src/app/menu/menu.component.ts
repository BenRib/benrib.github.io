import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  supportedLanguages: string[] = ['EN', 'FR'];
  currentLanguage: string;

  constructor(public authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    let segments = this.getUrlSegments();
    this.currentLanguage = this.supportedLanguages.find(l => segments.includes(l.toLowerCase()));
  }

  changeLanguage(language: string): void {
    if (language === this.currentLanguage) {
      return;
    }

    let segments = this.getUrlSegments();
    let languageIndex = segments.findIndex(s => s === this.currentLanguage.toLowerCase());
    segments[languageIndex] = language.toLowerCase();
    let url = segments.join('/');
    window.location.href = url;
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }

  private getUrlSegments(): string[] {
    return window.location.pathname ? window.location.pathname.split('/') : [];
  }
}
