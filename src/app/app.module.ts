import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { UserComponent } from './user/user.component';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board/board.component';
import { GameService } from './game.service';
import { ShareComponent } from './share/share.component';
import { CardsComponent } from './cards/cards.component';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PlayerComponent,
    UserComponent,
    CardComponent,
    BoardComponent,
    ShareComponent,
    CardsComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
