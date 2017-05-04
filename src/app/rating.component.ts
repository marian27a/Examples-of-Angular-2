import { Component } from '@angular/core';

@Component({
  selector: 'rating',
  template: `
   <i            
   class="glyphicon"  
  [class.glyphicon-star-empty]="rating < 1" 
  [class.glyphicon-star]="rating >= 1"
  (click)="onClick(1)" > </i> 
      <i            class="glyphicon"
                  [class.glyphicon-star-empty]="rating < 2"
      [class.glyphicon-star]="rating >= 2"
      (click)="onClick(2)"></i>
       <i class="glyphicon"
       [class.glyphicon-star-empty]="rating < 3"
       [class.glyphicon-star]="rating   >= 3" 
        (click)="onClick(3)"></i>
      <i class="glyphicon" 
      [class.glyphicon-star-empty]="rating < 4"
      [class.glyphicon-star]="rating >= 4" (click)="onClick(4)"></i> `,
  styleUrls: ['./app.component.css']
})
export class RatingComponent{    
  rating = 0; 
    onClick(ratingValue){        this.rating = ratingValue;    } 
  }