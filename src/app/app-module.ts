import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { MovieList } from './components/movie-list/movie-list';
import { MovieDetail } from './components/movie-detail/movie-detail';
import { ShowtimeList } from './components/showtime-list/showtime-list';
import { BookingSummary } from './components/booking-summary/booking-summary';
import { Navbar } from './components/navbar/navbar';

@NgModule({
  declarations: [
    App,
    MovieList,
    MovieDetail,
    ShowtimeList,
    BookingSummary,
    Navbar
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
