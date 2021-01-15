import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  auth: boolean;

  constructor(
    private authService: AuthService
  ) {
    authService.auth$.subscribe((status) => {
      this.auth = status;
    });
  }

  ngOnInit(): void {
    this.authService.isAuth();
  }


  disconnect(): void {
    this.authService.disconnect();
  }

}
