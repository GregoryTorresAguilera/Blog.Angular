import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title= 'probioticos-app';

  isDarkTheme = true;

  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
  }
}
