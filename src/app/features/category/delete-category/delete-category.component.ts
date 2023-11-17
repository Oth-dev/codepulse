import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from '../models/category.model';
import { DeleteCategoryRequest } from '../models/delete-category-request.model ';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent  implements OnInit, OnDestroy {

  id : string | null=null;
  paramsSubscription ?:Subscription;
  category? : Category ;
  deleteCategorySubscription?:Subscription;
  constructor(private router: Router, private route: ActivatedRoute, private categoryService: CategoryService) {

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
          this.categoryService.getCategoryById(this.id)
          .subscribe({
            next:(response)=>{
              this.category=response;
            }
          });
        }

      }
    });
  }

  onFormSubmit():void{
    console.log(this.category);
    const deleteCategoryRequest: DeleteCategoryRequest={
      name: this.category?.name??'',
      urlHandle: this.category?.urlHandle??''

    };
    if(this.id){
      this.deleteCategorySubscription=this.categoryService.deleteteCategory(this.id,deleteCategoryRequest)
      .subscribe({
        next:(response)=>{
          this.router.navigateByUrl('/admin/categories');
        }
      });
    }


  }



}
