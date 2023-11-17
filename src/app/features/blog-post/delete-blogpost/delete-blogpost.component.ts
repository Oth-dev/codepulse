import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogPost } from '../../category/models/blogpost.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPostsService } from '../../category/services/blog-posts.service';
import { DeleteBlogPostRequest } from '../../category/models/delete-blogpost-request.model';

@Component({
  selector: 'app-delete-blogpost',
  templateUrl: './delete-blogpost.component.html',
  styleUrls: ['./delete-blogpost.component.css']
})
export class DeleteBlogpostComponent implements OnInit, OnDestroy {

  id : string | null=null;
  paramsSubscription ?:Subscription;
  blogpost? : BlogPost ;
  deleteBlogPostSubscription?:Subscription;
  constructor(private router: Router, private route: ActivatedRoute, private blogPostService: BlogPostsService) {

  }
  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.paramsSubscription=this.route.paramMap.subscribe({
      next:(params)=>{
        this.id=params.get('id');

        if(this.id)
        {
          this.blogPostService.getBlogPostById(this.id)
          .subscribe({
            next:(response)=>{
              this.blogpost=response;
            }
          });
        }

      }
    });
  }

  onFormSubmit():void{
    console.log(this.blogpost);
    const deleteBlogPostRequest: DeleteBlogPostRequest={
      title: this.blogpost?.title??'',
      urlHandle:this.blogpost?.urlHandle??'',
      featuredImageUrl:this.blogpost?.featuredImageUrl??'',
      shortDescription:this.blogpost?.shortDescription??'',
      content:this.blogpost?.content??'',
      isVisible:this.blogpost?.isVisible??true,
      publishedDate:this.blogpost?.publishedDate??new Date(),
      author:this.blogpost?.author??''

    };
    if(this.id){
      this.deleteBlogPostSubscription=this.blogPostService.deleteteBlogPost(this.id,deleteBlogPostRequest)
      .subscribe({
        next:(response)=>{
          this.router.navigateByUrl('/admin/blogposts');
        }
      });
    }


  }
}
