import { Component } from '@angular/core';

@Component({
  selector: 'products',
  template: `<h1>{{title}}<h1>`,
  styleUrls: ['./app.component.css']
})
export class ProductsComponent {
  title = 'some products!';
}