import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { GroceryListComponent } from './groceries-list/groceries-list.component';
import { CheckCircleComponent } from 'src/shared/check-circle.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    CheckCircleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
