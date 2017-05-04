import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works this is test!';
  isActive = true;
   onClick($event){      console.log("Clicked",$event)    };
      rating = 0; 
    onClickRating(ratingValue){        this.rating = ratingValue;    } 
}
