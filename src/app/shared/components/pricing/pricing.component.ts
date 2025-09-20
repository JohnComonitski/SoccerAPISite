import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-pricing',
  imports:[MatButtonModule,MatIconModule,MatListModule,MatCardModule],
  templateUrl: './pricing.component.html'
})
export class PricingComponent  {
  isAnnualSelected: boolean = false;
  constructor() { }
}
