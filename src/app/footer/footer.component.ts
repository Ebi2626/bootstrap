import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="jumbotron jumbotron-fluid mb-0">
      <div class="container">
        <div class="px-2">
          <h1 class="display-4">Strona oparta o zwyły bootstrap</h1>
          <p class="lead">
            Została opracowana na potrzeby proof of concept tworzenia rozwiązań
            w natywnym bootstrapie przy użyciu angulra.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
