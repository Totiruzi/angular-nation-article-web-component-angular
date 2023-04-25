import { Component, Input } from "@angular/core";

@Component({
  selector: 'reading-list',
  template: `<h1>Hello ${name} from Reading List</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})

export class ReadingListComponent {
  @Input() name: string = '';
}
