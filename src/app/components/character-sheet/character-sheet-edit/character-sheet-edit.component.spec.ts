import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetEditComponent } from './character-sheet-edit.component';

describe('CharacterSheetEditComponent', () => {
  let component: CharacterSheetEditComponent;
  let fixture: ComponentFixture<CharacterSheetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSheetEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
