import { AddBlogpostComponent } from './features/blog-post/add-blogpost/add-blogpost.component';
import { BlogpostListComponent } from './features/blog-post/blogpost-list/blogpost-list.component';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteCategoryComponent } from './features/category/delete-category/delete-category.component';
import { EditBlogpostComponent } from './features/blog-post/edit-blogpost/edit-blogpost.component';

const routes: Routes = [
  {
    path:'admin/categories',
    component:CategoryListComponent
  },
  {
    path:'admin/categories/add',
    component:AddCategoryComponent
  },
  {
    path:'admin/categories/:id',
    component:EditCategoryComponent
  },
  {
    path:'admin/categories/delete/:id',
    component:DeleteCategoryComponent
  },
  {
    path:'admin/blogposts',
    component:BlogpostListComponent
  },
  {
    path:'admin/blogposts/add',
    component:AddBlogpostComponent
  },
  {
    path:'admin/blogposts/:id',
    component:EditBlogpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
