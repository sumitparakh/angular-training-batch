import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { AddArrayPipe } from './add-array.pipe';



@NgModule({
  declarations: [PipesComponent, AddArrayPipe],
  exports: [PipesComponent],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
