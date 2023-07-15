import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {

productData : undefined|Product;
productMessgae : undefined|string;

constructor(private route : ActivatedRoute , private product : ProductService){}

ngOnInit(){
  let productId = this.route.snapshot.paramMap.get('id');
  console.log(productId);
  productId && this.product.getProduct(productId).subscribe((data : Product)=>{
    this.productData = data;
  })
}

submit(data :Product){
  if(this.productData){
    data.id = this.productData.id;
  }
  this.product.updateProduct(data).subscribe((result)=>{
    if(result){
      this.productMessgae ="Product has Updated !"
    }
  });
  setTimeout(()=>{
    this.productMessgae = undefined;
  },3000);
}

}
