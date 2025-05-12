import { Injectable } from '@angular/core';
import { Item } from './models/item.model';

@Injectable({
  providedIn: 'root',
})
export class PriceCalculatorService {
  private prices = {
    Apple: 0.35,
    Banana: 0.20,
    Melon: 0.50,
    Lime: 0.15,
  };

  calculateTotal(items: Item[]): number {
    const itemCounts: { [key: string]: number } = {};

    items.forEach((item) => {
      itemCounts[item.name] = (itemCounts[item.name] || 0) + 1;
    });

    let total = 0;

    for (const [itemName, count] of Object.entries(itemCounts)) {
      switch (itemName) {
        case 'Apple':
        case 'Banana':
          total += this.prices[itemName] * count;
          break;
        case 'Melon':
          const melonChargeable = Math.ceil(count / 2);
          total += this.prices[itemName] * melonChargeable;
          break;
        case 'Lime':
          const limeChargeable = count - Math.floor(count / 3);
          total += this.prices[itemName] * limeChargeable;
          break;
        default:
          console.warn(`Unknown item: ${itemName}`);
      }
    }

    return total;
  }
}
