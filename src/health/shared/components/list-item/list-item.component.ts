import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['list-item.component.scss'],
  template: `
    <div class="list-item">
      <a [routerLink]="getRoute(item)">
        <p class="list-item__name">{{item.name}}</p>
        <p class="list-item__ingredients">
          <span>{{item.ingredients}}</span>
        </p>
      </a>

      <div *ngIf="toogled" class="list-item__delete">
        <p>Delete item?</p>
        <button class="confirm" type="button"
          (click)="removeItem()"
        >Yes</button>
        <button class="cancel" type="button"
          (click)="toogle()"
        >No</button>
      </div>
      <button class="trash" type="button"
        (click)="toogle()">
        <img src="/img/remove.svg">
      </button>
    </div>
  `
})
export class ListItemComponent {
  @Output() remove = new EventEmitter<any>();
  @Input() item: any

  toogled = false;
  constructor() {}

  getRoute(item: any) {
    return [`../meals`, item.$key];
  }

  removeItem(event: any) {
    this.remove.emit(this.item);
  }

  toogle() {
    this.toogled = !this.toogled;
  }
}
