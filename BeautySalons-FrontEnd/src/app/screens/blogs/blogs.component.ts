import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {


  data:any;
  gender: any;
  load = true;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.gender = localStorage.getItem('gender');
    this.blogService.getAll().subscribe((data)=>{
      this.load = false;
      this.data = data;
    });
  }

}
