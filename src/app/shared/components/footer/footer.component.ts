import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports:[MatIconModule,MatButtonModule,MatListModule],
})
export class FooterComponent {

  constructor() { }

  ngOnInit() {
  }

}
