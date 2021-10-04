import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCropComponent } from './data-ratio/image-crop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';




import { DataTablesExampleComponent } from './data-tables-example/data-tables-example.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { CustomDataTablesExampleComponent } from './custom-data-tables-example/custom-data-tables-example.component';





@NgModule({
  declarations: [
    AppComponent,
    ImageCropComponent,
    DataTablesExampleComponent,
    AppNavigationComponent,
    CustomDataTablesExampleComponent
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    AppRoutingModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
