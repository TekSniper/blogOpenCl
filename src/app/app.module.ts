import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { PostService } from './services/posts.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

const blogRoute: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NewPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(blogRoute)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
