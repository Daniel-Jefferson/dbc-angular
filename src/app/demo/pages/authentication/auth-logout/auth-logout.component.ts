import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-logout',
  templateUrl: './auth-logout.component.html',
  styleUrls: ['./auth-logout.component.scss']
})
export class AuthLogoutComponent implements OnInit {

  public user: any;	
  constructor(private router: Router) { }

  ngOnInit() {
  	this.user = JSON.parse(localStorage.getItem('userInfo'));
  	if(this.user){
  		localStorage.removeItem('userInfo');
  		this.router.navigateByUrl(`/`);
  	}else{
  		this.router.navigateByUrl(`/`);
  	}
  }

}
