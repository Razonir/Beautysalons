import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Input() userfname = '';
  @Input() userlname = '';
  @Input() reviewtext = '';
  @Input() reviewdate = '';
  @Input() reviewid = ''

  constructor(private router: Router, private userService: UserService, private reviewService: ReviewService) { }

  admin:any;
  ngOnInit(): void {
    this.admin = this.userService.isAdmin();
  }

  remove(){
    this.reviewService.deleteByRid(this.reviewid).subscribe();
  }
}
