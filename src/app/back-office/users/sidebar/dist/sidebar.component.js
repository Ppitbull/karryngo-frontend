"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SidebarComponent = exports.ROUTES = void 0;
var core_1 = require("@angular/core");
exports.ROUTES = [
    { path: '/user', title: 'Profile', icon: 'pe-7s-user', "class": '' },
    { path: '/dashboard', title: 'Dashboard', icon: 'pe-7s-graph', "class": '' },
    { path: '/trips', title: 'Trips', icon: 'pe-7s-car', "class": '' },
    { path: '/services', title: 'Services', icon: 'pe-7s-news-paper', "class": '' },
    { path: '/chats', title: 'Chats', icon: 'pe-7s-chat', "class": '' },
    { path: '/requests', title: 'Requests', icon: 'pe-7s-up-arrow', "class": '' },
    { path: '/maps', title: 'Maps', icon: 'pe-7s-map-marker', "class": '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService, router, ngZone) {
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html'
        })
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
