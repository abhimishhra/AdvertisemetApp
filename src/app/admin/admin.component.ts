import { Component, OnInit } from '@angular/core';
import{ HttpserviceService } from '../services/httpservice.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
users;
  constructor(private adminService:  HttpserviceService ) { }

  ngOnInit(): void {
    this.adminService.getUsers().subscribe(
      data=>{
        this.users=data;
         console.log(data);

      }
    );

  }

}
