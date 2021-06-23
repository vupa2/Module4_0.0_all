import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { PetComponent } from './pet/pet.component';
import { ProductComponent } from './product/product.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ArticleComponent } from './article/article.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TodoComponent } from './todo/todo.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { ProductCreateComponent } from './product7/product-create/product-create.component';
import { ProductListComponent } from './product7/product-list/product-list.component';
import { Product7Component } from './product7/product7.component';
import { ProductEditComponent } from './product7/product-edit/product-edit.component';

const routes: Routes = [
  { path: 'font-size-editor', component: FontSizeEditorComponent },
  { path: 'pet', component: PetComponent },
  { path: 'product', component: ProductComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'color-picker', component: ColorPickerComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'name-card', component: NameCardComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'rating-bar', component: RatingBarComponent },
  { path: 'countdown-timer', component: CountdownTimerComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'timelines', component: TimelinesComponent },
  {
    path: 'product7',
    component: Product7Component,
    children: [
      { path: '', component: ProductListComponent },
      { path: 'create', component: ProductCreateComponent },
      { path: ':id/edit', component: ProductEditComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
