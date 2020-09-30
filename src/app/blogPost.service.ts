import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BlogPost } from 'src/common/BlogPost';

@Injectable({
  providedIn: 'root'
})

export class BlogPostService {
  constructor(private http: HttpClient) { }

  apiURL = `http://localhost:8080`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  createBlogPost(blogPost: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(`${this.apiURL}/blog/create`, blogPost, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  readAll(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.apiURL}/blog/all`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
