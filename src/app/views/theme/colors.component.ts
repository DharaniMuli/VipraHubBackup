import { Component, Inject, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {MatTabsModule, MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,
  ]
})

@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent implements OnInit {
  constructor() {}

  public themeColors() {
  }

  ngOnInit() {
  }
}
