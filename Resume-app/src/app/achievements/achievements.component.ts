import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  @Input() acheivements: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
