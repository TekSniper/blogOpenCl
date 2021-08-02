import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/posts.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { NgForm, Validators } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postSubscription?: Subscription;
  posts?: any[];
  constructor(
    private postService: PostService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  postForm: any;
  initForm(){
    this.postForm = this.fb.group(
      {
        title: ['', Validators.required],
        content: ['', Validators.required]
      }
    );
  }
  ngOnInit(): void {
    this.initForm();
  }
  ngOnDestroy(){
    this.postSubscription?.unsubscribe();
  }
  onSubmit(){
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const postNew = new Post(title,content, new Date());

    this.postService.newFuncPost(postNew);
    this.router.navigate(['posts']);
  }

}
