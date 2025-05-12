import { Component } from '@angular/core';
import { Item } from '../models/item.model';
import { PriceCalculatorService } from '../price-calculator.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent {
  items: Item[] = [
    { name: 'Apple' },
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Melon' },
    { name: 'Melon' },
    { name: 'Lime' },
    { name: 'Lime' },
    { name: 'Lime' },
  ];

  total: number = 0;

  constructor(private priceCalculator: PriceCalculatorService) {
    this.total = this.priceCalculator.calculateTotal(this.items);
  }
}
