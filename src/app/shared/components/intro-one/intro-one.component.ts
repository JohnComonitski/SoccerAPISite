import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-intro',
  imports:[MatButtonModule,MatIconModule],
  templateUrl: './intro-one.component.html',
})
export class IntroOneComponent {}


