import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Meal, MealsService } from '../../../shared/services';

@Component({
  selector: 'meal',
  styleUrls: ['meal.component.scss'],
  template: `
    <div class="meal">
      <div class="meal__title">
        <h1>
          <img src="/img/food.svg">
          <span>Create meal</span>
        </h1>
      </div>
      <div>
        <meal-form
          (create)="addMeal($event)"
        >
        </meal-form>
      </div>
    </div>
  `
})
export class MealComponent {
  constructor(
    private mealService: MealsService,
    private router: Router,
  ) {}

  async addMeal(meal: Meal) {
    try {
      await this.mealService.addMeal(meal);
      this.backToMeals();
    } catch (error) {
      console.log(error);
    }
  }

  backToMeals() {
    this.router.navigate(['meals']);
  }
}
