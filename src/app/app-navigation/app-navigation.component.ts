import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {

  links: { path: string, text: string }[] = [
    { path: '/', text: 'Dashboard' },
    { path: '/datatables', text: 'DataTables' },
    { path: '/customtables', text: 'CustomTables' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
