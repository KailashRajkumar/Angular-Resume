import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {
  @Input() profileobjective= '';
  constructor() { }

  ngOnInit(): void {
  }

}
