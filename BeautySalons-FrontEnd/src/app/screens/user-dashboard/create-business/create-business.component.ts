import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/model/business';
import { BusinessService } from 'src/app/services/business.service';
import { Router, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.scss'],
})
export class CreateBusinessComponent implements OnInit {
  constructor(
    private businessService: BusinessService,
    private router: Router,
    private http: HttpClient,
    private userService: UserService
  ) {}

  business: Business = new Business();
  ngOnInit(): void {}

  logourl: any;
  token: any;
  selectedFile: any;
  submited = 'block';
  submitedb = 'none';
  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    const fd = new FormData();
    fd.append('upload_preset', 'otpixt53');
    fd.append('file', this.selectedFile);
    this.http
      .post('https://api.cloudinary.com/v1_1/decne4dss/image/upload', fd)
      .subscribe((res) => {
        this.logourl = res;
        this.logourl = this.logourl.secure_url;
      });
  }

  create() {
    this.submited = 'none';
    this.submitedb = 'block';
    // this.business.blogo = this.logourl;
    // this.token = localStorage.getItem('token');
    // this.businessService.createBusiness(this.business, this.token).subscribe(
    //   (response) => this.goToHome(),
    //   (error) => console.error('Error!', error)
    // );

    let b = {
      businessDetails: JSON.stringify(this.business),
    };
    this.businessService.createSendEmail(b).subscribe();
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
