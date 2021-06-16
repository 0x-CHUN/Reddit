import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./auth/auth.module";
import {NgxWebstorageModule} from "ngx-webstorage";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {TokenInterceptor} from "./token-interceptor";
import {HomeComponent} from './home/home.component';
import {PostTitleComponent} from './shared/post-title/post-title.component';
import {SideBarComponent} from './shared/side-bar/side-bar.component';
import {SubredditSideBarComponent} from './shared/subreddit-side-bar/subreddit-side-bar.component';
import {VoteButtonComponent} from './shared/vote-button/vote-button.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CreateSubredditComponent} from './subreddit/create-subreddit/create-subreddit.component';
import {CreatePostComponent} from './post/create-post/create-post.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ListSubredditsComponent} from './subreddit/list-subreddits/list-subreddits.component';
import {EditorModule} from "@tinymce/tinymce-angular";
import {ViewPostComponent} from './post/view-post/view-post.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostTitleComponent,
    SideBarComponent,
    SubredditSideBarComponent,
    VoteButtonComponent,
    CreateSubredditComponent,
    CreatePostComponent,
    ListSubredditsComponent,
    ViewPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    ReactiveFormsModule,
    EditorModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  exports: [
    PostTitleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
