import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Post } from '../models/post.model';
import { PostService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  /*@Input() post_title: string='';
  @Input() post_content: string='';
  @Input() post_loveIts?: Number;
  @Input() post_created_at: Date = new Date();
  val = 0;
  res = 0;*/
  posts: any;
  postSubscription?: Subscription;
  constructor(
    private route: Router,
    private postServ: PostService
  ) {
    
  }

  ngOnInit(): void {
    this.postSubscription = this.postServ.postsSubject.subscribe(
      (pst: Post[])=>{
        this.posts = pst;
      }
    );
    this.postServ.emitPostsSubject();
  }
  getPostColor(){
    /*if(this.post_loveIts === 1) return 'red';
    else if (this.post_loveIts === 2) return 'green';
    else return;*/
  }
  onLoveIts(){
    const valeur = 1;

    console.log('Like : '+valeur);
  }

  newPost(){
    this.route.navigate(['/new']);
  }
  deletePost(po: Post){
    this.postServ.removePost(po);
  }
}
