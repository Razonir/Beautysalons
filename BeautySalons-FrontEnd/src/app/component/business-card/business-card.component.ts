import { Component, Input, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit {

  @Input() id = "0";
  @Input() blogo = "לוגו";
  @Input() bname = "שם עסק";
  @Input() bsubject = "נושא"
  @Input() baddress = "כתובת"
  @Input() bcity = "עיר"
  @Input() blikes = "0"
  @Input() bviews = "0"


  likes:any;
  iflike = 'unlike';

  constructor(private bussinressService: BusinessService) { }

  ngOnInit(): void {
    this.likes = localStorage.getItem('likes');
    if(this.likes.includes(','+this.id+',')){
      this.iflike = 'like';
    }
  }

  like(){
    if(this.likes.includes(','+this.id+',')){
    }else{
      this.likes = localStorage.getItem('likes');
      if(this.likes == undefined){
        localStorage.setItem('likes',","+this.id + ",");
      }else{
        this.likes = this.likes +this.id + ",";
        localStorage.setItem('likes',this.likes);
      }
      this.bussinressService.addLike(this.id).subscribe();
    }
  }
}
