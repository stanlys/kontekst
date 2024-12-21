import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ButtonModule, InputTextModule, TableModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: Product[] = [
    {
      col1: 'Продукт 1',
      col2: 'Категория',
      col3: 'Цена',
      col4: 'В наличии',
      col5: 'Рейтинг',
      col6: 'Дата добавления',
    },
    {
      col1: 'Продукт 2',
      col2: 'Категория',
      col3: 'Цена',
      col4: 'В наличии',
      col5: 'Рейтинг',
      col6: 'Дата добавления',
    },
  ];
}
