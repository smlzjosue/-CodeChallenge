import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlusPipe } from './plus.pipe';



@NgModule({
  declarations: [PlusPipe],
  imports: [
    CommonModule
  ],
  exports:[
    PlusPipe
  ]
})
export class PipesModule { }
