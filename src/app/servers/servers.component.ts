import { Component } from '@angular/core';

@Component({
  // 3 ways to for selectors to be written
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  template: `<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {}
