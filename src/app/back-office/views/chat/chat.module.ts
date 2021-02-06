import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { ChatComponent } from './chat/chat.component';
import { ChatRoutingModule } from './chat-routing.module';

@NgModule({
  imports: [
    ChatRoutingModule,
    ChartsModule
  ],
  declarations: [ ChatComponent ]
})
export class ChatModule { }
