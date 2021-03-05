import {Component} from '@angular/core';
import {UtilsService} from './services/utils.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qob';
  opened = true;

  constructor(
    public router: Router,
    public utils: UtilsService,
    // private dataCollecter: DataCollectorService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  toggleMenu(): any {
    this.utils.toggleOpened();
  }

  goHome(): any {
    this.router.navigate(['']);
  }

  goStudentList(): any {
    this.router.navigate(['/students']);
  }
}
