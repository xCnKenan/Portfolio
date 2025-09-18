import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JoinComponent } from './join/join.component';
import { ElPolloLocoComponent } from './el-pollo-loco/el-pollo-loco.component';
import { RingOfFireComponent } from './ring-of-fire/ring-of-fire.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { BestellAppComponent } from './bestell-app/bestell-app.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule, JoinComponent, ElPolloLocoComponent, RingOfFireComponent, PokedexComponent, BestellAppComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
