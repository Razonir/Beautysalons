import { Component, Input, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor(private photosService : PhotosService,private userService: UserService) { }

  @Input() url = '';
  @Input() pid = '0';
  @Input() bid = '0';
  @Input() buid = '0';
  @Input() uid = '';

  admin:any;
  ngOnInit(): void {
    this.url = 'url('+this.url+')';
    this.admin = !this.userService.isAdmin();
  }

  remove(){
    this.photosService.deleteByPid(this.pid).subscribe();
    location.reload();
  }


}
