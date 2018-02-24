import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../../../auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['app-header.component.scss'],
  template: `
    <div class="app-header">
      <div class="wrapper">
        <img src="/img/logo.svg">
        <div
          *ngIf="user?.authenticated"
          class="app-header__user-info">
          <span (click)="logoutUser()"></span>
        </div>
      </div>
    </div>
  `
})
export class AppHeaderComponent {
  @Output() logout = new EventEmitter<void>();

  @Input() user: User;

  constructor() {}

  logoutUser() {
    this.logout.emit();
  }
}
