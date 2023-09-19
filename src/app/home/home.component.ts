import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selected = 'Ahmedabad';
  selected1 = 'Dwarka';
  searchForm = new FormGroup({
    from: new FormControl(''),
    to: new FormControl('')
  });
}
