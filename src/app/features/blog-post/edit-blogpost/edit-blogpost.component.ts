import { BlogPostsService } from './../../category/services/blog-posts.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogPost } from '../../category/models/blogpost.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateBlogPostRequest } from '../../category/models/update-blogpost-request.model';

@Component({
  selector: 'app-edit-blogpost',
  templateUrl: './edit-blogpost.component.html',
  styleUrls: ['./edit-blogpost.component.css']
})
export class EditBlogpostComponent implements  OnInit, OnDestroy {

  id : string | null=null;
  paramsSubscription ?:Subscription;
  blogpost? : BlogPost ;
  editBlogPostSubscription?:Subscription;
  constructor(private router: Router, private route: ActivatedRoute, private blogpostService: BlogPostsService) {

  }


  ngOnInit(): void {
    this.paramsSubscription=this.route.paramMap.subscribe({
      next:(params)=>{
        this.id=params.get('id');

        if(this.id)
        {
          this.blogpostService.getBlogPostById(this.id)
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
    const updateCategoryRequest: UpdateBlogPostRequest={
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
      this.editBlogPostSubscription=this.blogpostService.updateBlogPost(this.id,updateCategoryRequest)
      .subscribe({
        next:(response)=>{
          this.router.navigateByUrl('/admin/blogposts');
        }
      });
    }

  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editBlogPostSubscription?.unsubscribe();
  }

}
