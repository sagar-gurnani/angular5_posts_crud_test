import { Component, OnInit } from '@angular/core';

// Importing snackbar for messages
import { MatSnackBar, MatDialogRef } from '@angular/material';

// Importing FormControl and Validators
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Importing Post model
import { Post } from '../models/post.model';

// Importing service for calling API's
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})

export class PostDialogComponent implements OnInit {
  pageTitle: string = 'New Post';
  postForm: FormGroup;
  postDetails: Post = new Post();
  postMode: string = '';

  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>,
    private matSnackbar: MatSnackBar,
    private postService: PostService,
  ) {
    this.initForm();
  }

  // Initializing Post Form
  initForm() {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
      userId: new FormControl('', Validators.required),
    });
  }

  // Creating New Post
  createPost() {
    let data = this.postForm.value;

    this.postService.addPost(data)
      .subscribe(result => {

        if(result != null && result != undefined && result){
          this.matSnackbar.open('Post created successfully.' , '', { duration: 2000 });
          this.dialogRef.close();
        }else{
          this.matSnackbar.open('Try after some time.' , 'Retry', { duration: 2000 });
        }
      });
  }

  // Editing Post
  editPost() {
    let data = this.postForm.value;

    this.postService.editPost(data, this.postDetails.id)
      .subscribe(result => {

        if(result != null && result != undefined && result){
          this.matSnackbar.open('Post edited successfully.' , '', { duration: 2000 });
          this.dialogRef.close();
        }else{
          this.matSnackbar.open('Try after some time.' , 'Retry', { duration: 2000 });
        }
      });
  }

  ngOnInit() {
    this.pageTitle = this.postMode === 'new' ? 'New Post' : 'Edit Post';

    if (this.postMode === 'edit' && this.postDetails != null && this.postDetails != undefined) {

      // Pronting Details of selected Post
      this.postForm.reset({
        title: this.postDetails.title,
        body: this.postDetails.body,
        userId: this.postDetails.userId,
      });

    }
  }

}
