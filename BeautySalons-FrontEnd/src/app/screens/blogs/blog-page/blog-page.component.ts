import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {



  data:any;
  blogdata:any;
  gender: any;
  blogo:any;
  createdate: any;
  readTime:any;
  constructor(private blogService: BlogService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['bid'];
    this.blogService.getBlogById(id).subscribe((data)=>{
      this.blogdata = data;
      this.blogdata = this.blogdata[0];
      this.createdate = JSON.stringify(this.blogdata.createdate).substring(1,11);
      this.blogo = "url("+this.blogdata.blogo+")";
      this.readTime = Number(this.blogdata.bcontent.length/225);
      this.readTime = "קצב קריאה "+ parseInt(this.readTime) + " דקות";
    });
  }

}
