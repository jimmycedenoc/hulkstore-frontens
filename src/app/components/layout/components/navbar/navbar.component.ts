import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
// import { UserProfileService } from '../user-profile/services/user-profile.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    isCollapsed = true;
    constructor(
        readonly layoutService: LayoutService,
        readonly authService: AuthService,
        readonly router: Router
    ) {
    }

    ngOnInit() {
    }


    toggleSidebarPin() {
        this.layoutService.toggleSidebarPin();
    }

    toggleSidebar() {
        this.layoutService.toggleSidebar();
    }

    logout() {
        this.authService.logout();
    }
}
