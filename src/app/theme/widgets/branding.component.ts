import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="d-inline-block text-nowrap text-reset" href="/">
      <img src="./assets/images/matero.png" class="brand-logo align-middle m-2" alt="logo" />
  
    </a>
  `,
  styles: [
    `
      .brand-logo {
        width: 100px;
        height: 30px;
      }

      a {
        text-decoration: none;
      }
    `,
  ],
  standalone: true,
})
export class BrandingComponent {}
