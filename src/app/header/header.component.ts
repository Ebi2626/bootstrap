import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="row bg-dark text-light">
      <div class="col-12">
        <h1 class="dispaly-1 my-5 text-center">Testowa apka</h1>
      </div>
    </div>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
