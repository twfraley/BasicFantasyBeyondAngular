import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CharacterAddComponent } from './components/character/character-add/character-add.component';
import { CharacterEditComponent } from './components/character/character-edit/character-edit.component';
import { CharacterSheetAddComponent } from './components/character-sheet/character-sheet-add/character-sheet-add.component';
import { CharacterSheetDetailComponent } from './components/character-sheet/character-sheet-detail/character-sheet-detail.component';
import { CharacterSheetEditComponent } from './components/character-sheet/character-sheet-edit/character-sheet-edit.component';
import { ItemAddComponent } from './components/item/item-add/item-add.component';
import { ItemEditComponent } from './components/item/item-edit/item-edit.component';
import { ItemDetailComponent } from './components/item/item-detail/item-detail.component';
import { SpellAddComponent } from './components/spell/spell-add/spell-add.component';
import { SpellEditComponent } from './components/spell/spell-edit/spell-edit.component';
import { SpellDetailComponent } from './components/spell/spell-detail/spell-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterAddComponent,
    CharacterEditComponent,
    CharacterSheetAddComponent,
    CharacterSheetDetailComponent,
    CharacterSheetEditComponent,
    ItemAddComponent,
    ItemEditComponent,
    ItemDetailComponent,
    SpellAddComponent,
    SpellEditComponent,
    SpellDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
