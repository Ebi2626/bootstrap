import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-section',
  templateUrl: './text-section.component.html',
  styleUrls: ['./text-section.component.scss'],
})
export class TextSectionComponent implements OnInit {
  @Input()
  title = 'Brak tekstu';

  @Input()
  content = 'Brak kontentu';

  constructor() {}

  ngOnInit(): void {}
}
