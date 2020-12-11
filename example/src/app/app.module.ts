import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule}  from "@angular/forms";// or templateDriveform
import { AppComponent } from './app.component';
import { CalcComponent } from './Components/calc/calc.component';
import { BookManagerComponent } from './Components/book-manager/book-manager.component';
import { FilterPipe } from './Pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    BookManagerComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }