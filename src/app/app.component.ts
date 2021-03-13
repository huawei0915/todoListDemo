import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'My To Do List Demo';
  inputValue = '';

  todos: any[] = [];

  addToList(): void {
    this.todos.push({
      text: this.inputValue,
      done: false,
    });
    this.inputValue = '';
  }

  togogleStatus(val): void {
    val.done = !val.done;
  }

  rmItem(num): void {
    this.todos.splice(num, 1);
  }
}
