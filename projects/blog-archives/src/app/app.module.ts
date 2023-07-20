import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ArchiveComponent } from "./archive/archive.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, HomePageComponent, ArchiveComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: HomePageComponent },
      { path: "archive/:year/:month", component: ArchiveComponent },
      { path: "**", component: NotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
