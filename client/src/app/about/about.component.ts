import { Component, OnInit } from '@angular/core';

interface TimeEvent {
  time: Date | number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  protected events: TimeEvent[] = [];

  constructor() {
    this.events.push({
      time: new Date('2016-12-04'),
      title: 'Hello GitHub',
      content: 'Nice to meet you, GitHub!'
    });
    this.events.push({
      time: new Date('2018-09-01'),
      title: 'Clean GitHub',
      content: 'I deleted all repositories on my GitHub. Maybe I\'m mad.'
    });
    this.events.push({
      time: new Date('2018-10-06'),
      title: 'First Repository',
      content: 'Oh, there is my first repository calendar, about Angular.'
    });
    this.events.push({
      time: new Date('2019-01-04'),
      title: 'Most Contributions',
      content: 'Oh God! I created 124 commits in 1 repository!'
    });
    this.events.push({
      time: new Date('2019-06-02'),
      title: 'Rester Framework',
      content: 'I started a new tour of coding, named Rester. A TypeScript framework, like Spring Boot.'
    });
    this.events.push({
      time: new Date('2019-06-24'),
      title: 'What\'s Now',
      content: 'I had created 2,253 contributions in the last year, from 2018-10-06 to 2019-06-24'
    });
  }

  ngOnInit() { }

  trackByFn(index: number, item: TimeEvent) {
    return item.time;
  }

}
