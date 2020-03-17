import { Component, ViewEncapsulation } from '@angular/core'; //pulling in ViewEncapsulation to allow this component's css to affect app globally

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'pointcheck-front-end';
}
