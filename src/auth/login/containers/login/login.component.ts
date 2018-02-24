import { Component } from '@angular/core';

@Component({
  selector: 'login',
  template:`
    <div>
      Login component
      <auth-form>
      </auth-form>
    </div>
  `
})
export class LoginComponent {
  constructor() {}
}
