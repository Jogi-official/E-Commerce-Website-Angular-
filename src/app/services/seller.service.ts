import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, Signup } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient , private router : Router) {}

  userSignup(data: Signup) {
    this.http.post('http://localhost:3000/seller', data, {
      observe: 'response',
    }).
      subscribe((result) => {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller-home', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      });
  }

  userLogin(data : Login) {
      console.warn(data);
      //api call

    }

  reloadSeller(){
    const localStorageValue = localStorage.getItem('seller-home')
    console.log("dasdasdasd",localStorageValue);
    if(localStorageValue){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

}
