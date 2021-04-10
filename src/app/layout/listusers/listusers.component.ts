import {Component, OnInit} from '@angular/core';
import {UsersModule} from '../../api/users.module';
import {UserService} from '../../api/user.service';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

export interface Data {
  id: number;
  title: string;
  image: number;
  description: string;

}

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  listOfData: UsersModule[];
  isSpinning = false;

  constructor(private service: UserService,
              private router: Router,
              private spinner: NgxSpinnerService) {
    this.listOfData = [];
  }

  ngOnInit(): void {
    this.spinner.show().then();
    this.service.getAllUsers().subscribe((response) => {
        if (response !== null) {
          this.listOfData = response;
          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide()
          }, 4000);
        }
      },
      (error )=> console.log(error));
  }

  goToDetail(id: any) {
    this.router.navigate(['user/detail/' + id]);
  }
}
