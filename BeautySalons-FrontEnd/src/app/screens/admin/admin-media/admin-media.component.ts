import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-admin-media',
  templateUrl: './admin-media.component.html',
  styleUrls: ['./admin-media.component.scss']
})
export class AdminMediaComponent implements OnInit {

  constructor(private  photosService: PhotosService ) { }

  photos:any;

  ngOnInit(): void {
    this.photosService.getAll().subscribe((photos) => {
      this.photos = photos;
    });
  }

}
