import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

import { HttpClientModule }    from '@angular/common/http';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
