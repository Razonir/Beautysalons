import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {



  background = 'url(/assets/homebgblack.jpg)';
  data:any;
  gender: any;
  constructor(private blogService: BlogService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gender = localStorage.getItem('gender');
    if(this.gender == null || this.gender == 'female'){
      this.gender = 'female';
      localStorage.setItem('gender','female');
    }else{
      this.background = 'url(/assets/man.jpg)';

    }
    const id = +this.route.snapshot.params['bid'];
    this.blogService.getBlogById(id).subscribe((data)=>{
      this.data = data;
    });
  }

}
