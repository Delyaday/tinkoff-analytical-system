import { ChangeDetectionStrategy, Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
