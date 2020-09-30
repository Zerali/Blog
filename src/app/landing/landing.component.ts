import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/common/BlogPost';
import { BlogPostService } from '../blogPost.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  title = 'blog-app';

  constructor(private blogPostService: BlogPostService) { }

  blogPosts: BlogPost[];

  ngOnInit(): void {
    this.blogPostService.readAll().subscribe((blogPosts) => { this.blogPosts = blogPosts});
  }
}
