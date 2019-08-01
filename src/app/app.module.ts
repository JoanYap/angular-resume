import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { DescriptionComponent } from './description/description.component';
import { ParticularsComponent } from './particulars/particulars.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogComponent,
    ContactMeComponent,
    ProfessionalDetailsComponent,
    PersonalDetailsComponent,
    PageTitleComponent,
    DescriptionComponent,
    ParticularsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
