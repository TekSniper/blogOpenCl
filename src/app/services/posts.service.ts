import { identifierModuleUrl } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { HttpClient } from "@angular/common/http";
import firebase from "firebase";
import { Post } from "../models/post.model";
import Snap = firebase.database.DataSnapshot;

@Injectable()
export class PostService{
    constructor(){
        this.getPostsFromServer();
    }
    postsSubject = new Subject<any[]>();
    posts: Post[]= [];
    emitPostsSubject(){
        this.postsSubject.next(this.posts.slice());
    }
    /*post = [
        {
            id: 1,
            title: 'Mon premier post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
            created_at: new Date()
        },
        {
            id: 2,
            title: 'Mon deuxième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
            loveIts: 0,
            created_at: new Date()
        },
        {
            id: 3,
            title: 'Mon troisième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
            created_at: new Date()
        }
    ]*/
    newFuncPost(NewPost: Post){
        /*const objetPoste =
        {
            id: 0,
            title: '',
            content: '',
            loveIts: 0,
            created_at: new Date()
        };
        objetPoste.id = this.post[(this.post.length - 1)].id + 1;
        objetPoste.title = title;
        objetPoste.content = content;
        objetPoste.created_at = new Date();*/
        this.posts.push(NewPost);
        this.savePostsToServer();
        this.emitPostsSubject();

    }
    savePostsToServer(){
        firebase.database().ref('/blog').set(this.posts);
    }

    getPostsFromServer(){
        firebase.database().ref('/blog')
            .on('value', (data: Snap)=>{
                this.posts = data.val()? data.val(): [];
                this.emitPostsSubject();
            }
            );
    }

    removePost(po: Post){
        const IndexOfPost = this.posts.findIndex(
            (postFI)=>{
                if(postFI === po){
                    return true;
                }
                else{
                    return false;
                }
            }
        );
        this.posts.splice(IndexOfPost,1);
        this.savePostsToServer();
        this.emitPostsSubject();
    }
}