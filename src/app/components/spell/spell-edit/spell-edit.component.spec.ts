import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellEditComponent } from './spell-edit.component';

describe('SpellEditComponent', () => {
  let component: SpellEditComponent;
  let fixture: ComponentFixture<SpellEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
