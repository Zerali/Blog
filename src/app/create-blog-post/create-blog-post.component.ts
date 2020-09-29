import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from 'src/common/BlogPost';
import { BlogPostService } from '../blogPost.service';

@Component({
  selector: 'app-create-blog-post',
  templateUrl: './create-blog-post.component.html',
  styleUrls: ['./create-blog-post.component.scss']
})
export class CreateBlogPostComponent implements OnInit {
  title: string = '';
  body: string = '';
  isSubmitting: boolean = false;
  isComplete: boolean = false;

  constructor(
    private router: Router,
    private blogPostService: BlogPostService,
  ) { }

  ngOnInit(): void {}

  submitPost(): void {
    const blogPost: BlogPost = {
      title: this.title,
      body: this.body
    };

    this.isSubmitting = true;

    this.blogPostService
      .createBlogPost(blogPost)
      .subscribe(
        () => {
          this.router.navigateByUrl('/');
        },
        (e) => {
          console.log('error:' + e)
        });
  }
}
