import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resulttable',
  templateUrl: './resulttable.component.html',
  styleUrls: ['./resulttable.component.css']
})
export class ResulttableComponent implements OnInit {

  gameList = [
    {date:"1/1/2011",
    link:"link dot com",
    map: "Narrows",
    gametype: "Slayer",
    playlist: "MLG"},
    {date:"2/2/2009",
    link:"link dot org",
    map: "The Pit",
    gametype: "Flag",
    playlist: "MLG"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
