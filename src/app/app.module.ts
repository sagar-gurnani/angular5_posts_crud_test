import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// Importing Angular material components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule , MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

// Importing MatIconModule for Using Angular Material Icons
import { MatIconModule } from '@angular/material/icon';

// Importing HttpClientModule for using Http request
import { HttpClientModule } from '@angular/common/http';

// Importing Post Component
import { PostComponent } from './post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDialogComponent } from './post-dialog/post-dialog.component';

// Creating route array
const appRoutes: Routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full'  },
  { path: 'post', component: PostComponent , pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full'  },
];

@NgModule({
  declarations: [
    AppComponent,

    // Declaring PostComponent
    PostComponent,

    // Declaring PageNotFoundComponent
    PageNotFoundComponent,

    //  Declaring PostDialogComponent
    PostDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Importing Routes
    RouterModule.forRoot(
      appRoutes,
    ),

    // Importing angular Material component
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    MatTooltipModule,
    ReactiveFormsModule,

    // Importing HTTP client Module
    HttpClientModule,
  ],

  entryComponents :[
    PostDialogComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
