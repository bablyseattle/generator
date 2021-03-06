import { Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import { FormsModule } from '@angular/forms';

import { Variable } from './variable';
import { GeneratorService } from './services/generator.service';

declare var GuppyOSK: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GeneratorService]
})

export class AppComponent implements OnInit {
  title = 'app';
  constructor(private _generatorService: GeneratorService) {}

  ngOnInit() {
    // let valuesArray = this._generatorService.findValues('x^3 + x^2 + 5=-25', 'x', 2);
    // console.log(valuesArray);
  }

}
