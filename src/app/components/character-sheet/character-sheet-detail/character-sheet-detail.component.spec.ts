import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetDetailComponent } from './character-sheet-detail.component';

describe('CharacterSheetDetailComponent', () => {
  let component: CharacterSheetDetailComponent;
  let fixture: ComponentFixture<CharacterSheetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSheetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
