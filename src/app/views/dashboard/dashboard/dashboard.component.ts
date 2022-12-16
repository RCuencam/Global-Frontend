import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from "@services/product.service";
import { Product } from "@models/product";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  //Datatables
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();

  //Products
  products: Product[] = [];

  constructor(private productService: ProductService){
    //Define Structure Datatable
    this.dtOptions = {
      columns: [{
        title: 'Nombre',
        data: 'id'
      }, {
        title: "Category"
      }, {
        title: 'Price',
      }, {
        title: 'Stock',
      }]
    };
  }
  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(response => {
      this.products = response.products;
      this.dtTrigger.next("");
    })
  }

}
