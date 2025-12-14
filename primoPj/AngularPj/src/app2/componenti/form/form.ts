import {Component, ViewChild } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Form {

  @ViewChild('homeForm') homeForm: NgForm;

  onSubmit(form :NgForm){
    console.log(this.homeForm);
  }

}
