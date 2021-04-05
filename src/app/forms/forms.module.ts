import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReactiveFormsComponent, TemplateDrivenFormsComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ReactiveFormsComponent]
})
export class FormsModule {}
