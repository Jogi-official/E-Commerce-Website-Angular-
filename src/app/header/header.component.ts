import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType : String = 'default';

  constructor(private route : Router){}

  ngOnInit() {
    this.route.events.subscribe((val:any)=>{
      console.warn(val.url);
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.log("Andrr")
          this.menuType = 'seller';
        }
        else{
          console.error("Bahar");
          this.menuType = 'default';
        }
      }
    })
  };
}
