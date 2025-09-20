import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-contact',
  imports:[MatFormFieldModule, MatInputModule, MatIconModule,MatButtonModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {}


