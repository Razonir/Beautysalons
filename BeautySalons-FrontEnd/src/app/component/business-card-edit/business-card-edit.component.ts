import { Component, Input, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-business-card-edit',
  templateUrl: './business-card-edit.component.html',
  styleUrls: ['./business-card-edit.component.scss']
})
export class BusinessCardEditComponent implements OnInit {

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

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.likes = localStorage.getItem('likes');
    if(this.likes.includes(','+this.id+',')){
      this.iflike = 'like';
    }
  }


  remove(id: any){
    
    this.businessService.removeBusiness(id).subscribe();
    location.reload()
  }

}
