import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';
import { faTrash , faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {

  productList : undefined|Product[];
  productMessage : undefined|string;
  icon = faTrash;
  editIcon = faEdit;

  constructor(private product : ProductService){};

  ngOnInit(){
      this.list();
  }

  deleteProduct(id : number){
    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage = "Product deleted successfully !";
        this.list();
      }
    })
    setTimeout(()=>{this.productMessage = undefined}, 3000);
  }

  list(){
    this.product.productList().subscribe((result)=>{
      console.warn(result);
      this.productList = result;
    });
  }


}
