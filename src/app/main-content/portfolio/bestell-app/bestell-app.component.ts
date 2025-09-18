import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bestell-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bestell-app.component.html',
  styleUrl: './bestell-app.component.scss'
})
export class BestellAppComponent {

}
