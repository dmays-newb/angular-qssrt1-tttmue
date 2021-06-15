import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts', // css selector -> instructs angular to instantiate this component any time the tag <app-product-alarts> appears in a template (html)
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  //component class
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
