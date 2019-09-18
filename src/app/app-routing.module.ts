import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CharacterSheetAddComponent } from './components/character-sheet/character-sheet-add/character-sheet-add.component';
import { CharacterAddComponent } from './components/character/character-add/character-add.component';
import { CharacterDetailComponent } from './components/character/character-detail/character-detail.component';
import { CharacterListComponent } from './components/character/character-list/character-list.component';
import { CharacterEditComponent } from './components/character/character-edit/character-edit.component';
import { CharacterSheetDetailComponent } from './components/character-sheet/character-sheet-detail/character-sheet-detail.component';
import { ItemAddComponent } from './components/item/item-add/item-add.component';
import { ItemDetailComponent } from './components/item/item-detail/item-detail.component';
import { ItemEditComponent } from './components/item/item-edit/item-edit.component';
import { SpellAddComponent } from './components/spell/spell-add/spell-add.component';
import { SpellDetailComponent } from './components/spell/spell-detail/spell-detail.component';
import { SpellEditComponent } from './components/spell/spell-edit/spell-edit.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'character', children: [
      {path: 'create', component: CharacterAddComponent},
      {path: 'edit/:id', component: CharacterEditComponent},
      {path: 'detail/:id', component: CharacterDetailComponent},
      {path: 'list', component: CharacterListComponent},
      {path: '', redirectTo: '/list', pathMatch: 'full'},
    ]
  },
  {
    path: 'charactersheet', children: [
      {path: 'create', component: CharacterSheetAddComponent},
      {path: 'detail/:id', component: CharacterSheetDetailComponent},
    ]
  },
  {
    path: 'item', children: [
      {path: 'create', component: ItemAddComponent},
      {path: 'detail/:id', component: ItemDetailComponent},
      {path: 'edit/:id', component: ItemEditComponent},
    ]
  },
  {
    path: 'spell', children: [
      {path: 'create', component: SpellAddComponent},
      {path: 'detail/:id', component: SpellDetailComponent},
      {path: 'edit/:id', component: SpellEditComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
