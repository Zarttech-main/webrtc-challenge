import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatGridListModule} from "@angular/material/grid-list";
import { RoomComponent } from './pages/room/room.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBottomComponent } from './common/menu-bottom/menu-bottom.component';
import { VideoPlayerComponent } from './common/video-player/video-player.component';
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";



const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};
@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    HomeComponent,
    MenuBottomComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
