import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-features',
  imports:[MatButtonModule,MatIconModule],
  templateUrl: './features.component.html',
})
export class FeaturesComponent {}


