import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  // Create an array of object
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Ryan', 'Morrison', 'ryanmorrisonsay@yahoo.com', 50000),
    new SalesPerson('Ryan', 'Morrison', 'ryanmorrisonsay@yahoo.com', 50000),
    new SalesPerson('Ryan', 'Morrison', 'ryanmorrisonsay@yahoo.com', 50000),
    new SalesPerson('Ryan', 'Morrison', 'ryanmorrisonsay@yahoo.com', 50000),
    new SalesPerson('Ryan', 'Morrison', 'ryanmorrisonsay@yahoo.com', 50000),
  ];

  constructor() {}

  ngOnInit(): void {}
}
