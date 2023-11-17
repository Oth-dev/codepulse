import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddBlogPostRequest } from '../../category/models/add-blogpost-request.model';
import { BlogPostsService } from '../../category/services/blog-posts.service';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent implements OnDestroy {

  model: AddBlogPostRequest;

  constructor(private blogPostsService: BlogPostsService, private router: Router) {
    this.model ={
      title:'',
      urlHandle:'',
      featuredImageUrl:'',
      shortDescription:'',
      content:'',
      isVisible:true,
      publishedDate:new Date(),
      author:''
    };
  }


  ngOnInit(): void {
  }

  private addBlogPostSubscription?: Subscription;


  onFormSubmit():void{
    console.log(this.model)
    this.addBlogPostSubscription= this.blogPostsService.AddBlogPosts(this.model).subscribe({
      next:(response)=>
      {

        this.router.navigateByUrl('/admin/blogposts');
      }
    });

  }

  ngOnDestroy(): void {
    this.addBlogPostSubscription?.unsubscribe();
  }
}
