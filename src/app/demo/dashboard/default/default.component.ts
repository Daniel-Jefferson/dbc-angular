import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service'
import { element } from 'protractor';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public totalUsers         :   number = 0;
  public totalDispensaries  :   number = 0;
  public totalQuestions     :   number = 0;
  public totalVouchers : number = 0;
  public recentUsers        :   any;
  public isAdmin    :   any;
  public userID: any;
  public userRole: any;

  constructor(private user: UserService) { }

  ngOnInit() {
    let admin = JSON.parse(localStorage.getItem('userInfo'));
    this.userID = admin.id;
    this.userRole = admin.role;

    if(this.userRole == 1){
      // Admin
      this.isAdmin = true;
    }else{
      // Business
      this.isAdmin = false;
    }
    
    this.user.getDashboradData(this.userID, this.userRole).then( response => {
      if (response['status'] === 200){
        this.totalUsers = response['data'].allUsers;
        this.totalDispensaries = response['data'].allDispensaries;
        this.totalQuestions = response['data'].allQuestions;
        this.totalVouchers = response['data'].allVouchers;
        this.recentUsers = response['data'].recentUsers;
        
        this.recentUsers.forEach( element => {
          element['created'] = this.formatDate(element['created'])
        })
      }
    })
  }

  formatDate(date: any) {
    var newDate = new Date(date);
    let month = "" + (newDate.getMonth() + 1);
    let day =   "" + newDate.getDate();
    let year = newDate.getFullYear(); 
    
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
  
    return [year, month, day].join("-");
  }

}
