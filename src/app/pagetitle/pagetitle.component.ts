import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.scss'],
})
export class PagetitleComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
