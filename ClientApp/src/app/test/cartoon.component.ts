
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

export interface Cartoon {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root1',
  templateUrl: './app.component1.html',
  styleUrls: ['./app.component1.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  cartoonsData: Cartoon[] = [
    { id: 0, name: 'Tom and Jerry' },
    { id: 1, name: 'Rick and Morty' },
    { id: 2, name: 'Ben 10' },
    { id: 3, name: 'Batman: The Animated Series' }
  ];

  constructor(private fb: FormBuilder) { }

  onChange(name: string, isChecked: boolean) {
    const cartoons = (this.form.controls.name as FormArray);

    if (isChecked) {
      cartoons.push(new FormControl(name));
    } else {
      const index = cartoons.controls.findIndex(x => x.value === name);
      cartoons.removeAt(index);
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: this.fb.array([])
    });
  }

  submit() {
    console.log(this.form.value.name);
  }
}