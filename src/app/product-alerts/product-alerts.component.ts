import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit, OnChanges {
  @Input() product!: Product;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changed');
  }

  ngOnInit() {}

  onClick(): void {
    this.notify.emit('aaaaaaaaaaaaaaaa');
    console.log('you click me');
  }
}
