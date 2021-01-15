"use strict";
exports.__esModule = true;
exports.AdminLayoutRoutes = void 0;
var home_component_1 = require("../../home/home.component");
var user_component_1 = require("../../user/user.component");
var trips_component_1 = require("../../trips/trips.component");
var services_component_1 = require("../../services/services.component");
var chats_component_1 = require("../../chats/chats.component");
var maps_component_1 = require("../../maps/maps.component");
var requests_component_1 = require("../../requests/requests.component");
var upgrade_component_1 = require("../../upgrade/upgrade.component");
exports.AdminLayoutRoutes = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'trips', component: trips_component_1.TripsComponent },
    { path: 'services', component: services_component_1.ServicesComponent },
    { path: 'chats', component: chats_component_1.ChatsComponent },
    { path: 'maps', component: maps_component_1.MapsComponent },
    { path: 'requests', component: requests_component_1.RequestsComponent },
    { path: 'upgrade', component: upgrade_component_1.UpgradeComponent },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
