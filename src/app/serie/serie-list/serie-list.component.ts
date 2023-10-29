import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Serie[] = [];
  averageSeasons: number = 0;
  
  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.getAverageSeasons(series);
    });
  }

  getAverageSeasons(series: Serie[]): void {
    let totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    this.averageSeasons = totalSeasons / series.length;
  }

}
