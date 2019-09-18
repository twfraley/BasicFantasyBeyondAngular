import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellAddComponent } from './spell-add.component';

describe('SpellAddComponent', () => {
  let component: SpellAddComponent;
  let fixture: ComponentFixture<SpellAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
