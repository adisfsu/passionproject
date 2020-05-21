import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { TimelineComponentComponent } from './timeline-component/timeline-component.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { ArchitectureBlogComponentComponent } from './architecture-blog-component/architecture-blog-component.component';
import { PersonalComponent } from './personal/personal.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponentComponent,
    TestComponentComponent,
    ContactMeComponent,
    ArticleComponentComponent,
    MainNavComponent,
    ImageComponentComponent,
    ArchitectureBlogComponentComponent,
    PersonalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
