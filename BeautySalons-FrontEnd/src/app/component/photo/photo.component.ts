import { Component, Input, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor(private photosService : PhotosService) { }

  @Input() url = '';
  @Input() pid = '0';
  @Input() bid = '0';
  @Input() buid = '0';

  uid:any;
  
  ngOnInit(): void {
    this.url = 'url('+this.url+')';
    this.uid = localStorage.getItem('uid');
  }

  remove(){
    this.photosService.deleteByPid(this.pid).subscribe();
    location.reload();
  }
}
