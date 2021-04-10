import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../api/user.service';
import {UsersModule} from '../../api/users.module';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  userDetailInfo: UsersModule[];
  public id: any;
  constructor(private route: ActivatedRoute,
              private service: UserService,
              private spinner: NgxSpinnerService) {
    this.userDetailInfo = [];
  }



  ngOnInit(): void {
    this.spinner.show();
    this.route.paramMap.subscribe(params => this.id = params.get('id'));
    this.service.getUser(this.id).subscribe(response => {
      this.userDetailInfo = response;
      this.spinner.hide();

    });
  }

}
