import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  imports:[MatButtonModule,MatCardModule,MatIconModule,MatDividerModule,CommonModule]
})
export class PortfolioComponent {
  
  constructor() { }

  articles: any = [
    {
      title : "Player Profiler",
      image : "assets/images/radar.png",
      desc : "A fully customizable radar chart allowing you to breakdown and compare a player's per 90 statistics and profile across various different leagues.",
      link : "https://johncomonitski.com/playerprofiles/",
    },
    {
      title : "MLS vs The World",
      image : "assets/images/vs.png",
      desc : "A live look at MLS’ league wide Transfermarkt Market Values and comparing them to the market value of other leagues around the world.",
      link : "https://johncomonitski.com/mlsvstheworld/",
    },
    {
      title : "Younger, Better & Cheaper Scouting Analysis",
      image : "assets/images/cheaper.png",
      desc : "A 21st Club’s styled \"Younger, Better, Cheaper\" player recruitment to find a replacement for Union Berlin’s Benedict Hollderbach.",
      link : "https://medium.com/@johncomonitski/younger-better-cheaper-scouting-analysis-479372917373",
    },
    {
      title : "Data Driven Scouting With Python and Soccer API",
      image : "assets/images/scout.png",
      desc : "Data driven scouting across +1,400 different players in 3 different and comparing their key statistics with scatter plots for player recruitment.",
      link : "https://medium.com/@johncomonitski/data-driven-scouting-with-python-and-soccer-api-88570c59f592",
    },
    {
      title : "USMNT’s 2024 DVpC",
      image : "assets/images/dvpc.png",
      desc : "Tableau Dashboard breaking down the 23/24 season's USMNT player’s productivity in Europe and visualizing and comparing their Defensive Value statistics.",
      link : "https://medium.com/@johncomonitski/the-usmnts-2024-dvpc-and-why-the-pulisic-might-be-overrated-f7bf17ee1ac3",
    }
  ]

}
