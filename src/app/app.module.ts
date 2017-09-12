import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { UserComponent } from './user/user.component';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board/board.component';
import { GameService } from './game.service';
import { ShareComponent } from './share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PlayerComponent,
    UserComponent,
    CardComponent,
    BoardComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
