import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  redirect(): void {
    window.location.href = 'https://nulab-demo.vercel.app/';
  }
}
