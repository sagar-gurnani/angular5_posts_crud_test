import { Component, OnInit } from '@angular/core';

// Importing service for calling API's
import { PostService } from '../services/post.service';

// Importing snackbar for messages
import { MatSnackBar } from '@angular/material';

// Importing Dialog for calling Post Dialog
import { MatDialog } from '@angular/material';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';

// Importing Post model
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  posts: Array<Post> = [];

  // Creating private object of PostService, Snackbar, MatDialog
  constructor(
    private postService: PostService,
    private snackBar : MatSnackBar,
    private matDiaog: MatDialog,

  ) {
    this.getAllPosts();
  }

  // Fetching all post details
  getAllPosts() {
    this.postService.getAllPost()
      .subscribe((result: Post[]) => {
        if (result != null && result != undefined && result != []) {
          this.posts = result;
        }
      });
  }

  // Open Dialog for Adding and updating Post
  openPostDialog(mode: string, post: Post) {
    const dialogRef = this.matDiaog.open( PostDialogComponent, {
      width: '500px',
    });

    dialogRef.componentInstance.postDetails = mode === 'edit' ? post : null;
    dialogRef.componentInstance.postMode = mode;

    // Getting new Post after closing dialog
    dialogRef.afterClosed().subscribe(result => {
        this.getAllPosts();
    });

  }

  // Deleting selected Post
  deletePost(postId: number) {
    if (postId != null && postId != undefined) {
      this.postService.deletePost(postId)
        .subscribe((result: any) => {

          // Getting new post after deleting Post
          this.getAllPosts();
          if (result != null && result != undefined) {
            this.snackBar.open('Post deleted successfully.', '', {
              duration: 2000,
            });
          }
        });
    }

  }

  ngOnInit() {
  }

}
