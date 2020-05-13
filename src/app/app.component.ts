import { Component, Compiler, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'my-app';

  constructor(
    private _compiler: Compiler,
    private router: Router
  ) {
    this._compiler.clearCache();
  }

  ngOnInit(){
    this.router.navigate(['/login']);
  }


}
