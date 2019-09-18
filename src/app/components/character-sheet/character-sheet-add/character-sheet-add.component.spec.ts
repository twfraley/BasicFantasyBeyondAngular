import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetAddComponent } from './character-sheet-add.component';

describe('CharacterSheetAddComponent', () => {
  let component: CharacterSheetAddComponent;
  let fixture: ComponentFixture<CharacterSheetAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSheetAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
