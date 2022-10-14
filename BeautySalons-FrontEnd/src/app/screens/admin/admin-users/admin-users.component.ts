import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  datauser:any;
  ngOnInit(): void {
    this.userService.allUsers().subscribe((data)=>{
      this.datauser = data;
    })
  }

}
