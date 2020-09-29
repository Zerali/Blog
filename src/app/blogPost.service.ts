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

  // private handleError(error: HttpErrorResponse) {
  //   console.log('I get to the error');

  //   if (error.error instanceof ErrorEvent) {
  //     A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     The backend returned an unsuccessful response code.
  //     The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   Return an observable with a user-facing error message.
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  createBlogPost(blogPost: BlogPost): Observable<BlogPost> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<BlogPost>(`${this.apiURL}/blog/create`, blogPost, httpOptions)
      .pipe(catchError(this.handleError));
  }
}
