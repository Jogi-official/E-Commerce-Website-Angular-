import { Component , OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Login, Signup } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller : SellerService, private router : Router ){}
  showLogin : boolean = false;
  ngOnInit() :void {
    this.seller.reloadSeller();
  }

  signUp(data : Signup) : void{
    this.seller.userSignup(data);
  }

  login(data : Login) :void {
    this.seller.login(data);
  }

  openLogin(){
    this.showLogin = true;
  }

  openSignup(){
    this.showLogin = false;
  }
}
