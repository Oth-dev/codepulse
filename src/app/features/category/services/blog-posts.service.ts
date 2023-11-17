import { BlogPost } from './../models/blogpost.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddBlogPostRequest } from '../models/add-blogpost-request.model';
import { UpdateBlogPostRequest } from '../models/update-blogpost-request.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {

  constructor(private http: HttpClient)
   {

   }
   getAllBlogPosts():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`${environment.apiBaseUrl}/api/BlogPosts`);
  }

  AddBlogPosts(model: AddBlogPostRequest):Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/BlogPosts`, model);
  }

  updateBlogPost( id: string, updateBlogPostRequest:UpdateBlogPostRequest):Observable<BlogPost>{
    return this.http.put<BlogPost>(`${environment.apiBaseUrl}/api/BlogPosts/${id}`,updateBlogPostRequest);
  }
  getBlogPostById( id: string):Observable<BlogPost>{
    return this.http.get<BlogPost>(`${environment.apiBaseUrl}/api/BlogPosts/${id}`);
  }
}

