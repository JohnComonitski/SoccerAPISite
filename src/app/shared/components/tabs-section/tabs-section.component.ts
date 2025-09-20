import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-tabs-section',
  imports:[MatButtonModule,MatIconModule,MatTabsModule],
  templateUrl: './tabs-section.component.html',
})
export class TabsSectionComponent {}


