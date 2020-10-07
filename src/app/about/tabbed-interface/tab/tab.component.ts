import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8 py-5">
        <p class="p-4 text-center">{{ content }}</p>
      </div>
    </div>
  `,
  styles: [],
})
export class TabComponent implements OnInit {
  @Input()
  content = 'Brak tekstu';
  constructor() {}

  ngOnInit(): void {}
}
