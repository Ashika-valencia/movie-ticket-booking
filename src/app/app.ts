import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { MovieList} from './components/movie-list/movie-list';
import { ShowtimeList} from './components/showtime-list/showtime-list';
import { BookingSummary } from './components/booking-summary/booking-summary';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    MovieList,
    ShowtimeList,
    SeatSelectionComponent,
    BookingSummary
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
