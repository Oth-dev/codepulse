import { BlogPost } from './../../category/models/blogpost.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPostsService } from '../../category/services/blog-posts.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent  implements OnInit {

  blogPosts$ ? :Observable<BlogPost[]>;
  constructor(private blogPostsService: BlogPostsService) {

  }

  ngOnInit(): void {
    this.blogPosts$=this.blogPostsService.getAllBlogPosts();
  }


}
