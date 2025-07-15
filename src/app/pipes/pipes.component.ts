import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: false,
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  fullName: string = "Core Istanbul";
  currentDate: Date = new Date();
}
