import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetGetComponent } from './character-sheet-get.component';

describe('CharacterSheetGetComponent', () => {
  let component: CharacterSheetGetComponent;
  let fixture: ComponentFixture<CharacterSheetGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSheetGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
