import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  exports: [
    HomePageComponent,
  ],
  declarations: [
    HomePageComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
