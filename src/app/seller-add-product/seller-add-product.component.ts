import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMessage : string|undefined;
  constructor(private product : ProductService){}


  ngOnInit() {}

  submit(data : Product){
    this.product.addProduct(data).subscribe((result)=>{
        if(result){
          this.addProductMessage = 'Product added successfully !';
        }

        setTimeout(()=>(this.addProductMessage =undefined),3000)
    })
  }

}
