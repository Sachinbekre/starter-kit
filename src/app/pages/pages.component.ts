import { Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  constructor( 
    private iconLibraries: NbIconLibraries
    ){
      this.iconLibraries.registerFontPack('font-awesome', { packClass: 'fa' });
  }

  menu = MENU_ITEMS;
}
