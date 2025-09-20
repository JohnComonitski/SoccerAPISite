import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-cta',
  imports:[MatButtonModule,MatIconModule],
  templateUrl: './cta.component.html',
})
export class CTAComponent {}


