import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {


  background = 'url(/assets/homebgblack.jpg)';
  data:any;
  gender: any;
  load = true;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.gender = localStorage.getItem('gender');
    if(this.gender == null || this.gender == 'female'){
      this.gender = 'female';
      localStorage.setItem('gender','female');
    }else{
      this.background = 'url(/assets/man.jpg)';
    }
    this.blogService.getAll().subscribe((data)=>{
      this.load = false;
      this.data = data;
    });
  }

}
