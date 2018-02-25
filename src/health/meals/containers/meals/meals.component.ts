import { Component } from '@angular/core';

import { MealsService } from '../../../shared/services';

@Component({
  selector: 'meals',
  styleUrls: ['meals.component.scss'],
  template: `
    <div>
      Meals
    </div>
  `
})
export class MealsComponent {
  constructor(
    private mealsService: MealsService,
  ) {}
}
