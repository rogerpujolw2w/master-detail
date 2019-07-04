import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembermanagerComponent } from './membermanager.component';

describe('MembermanagerComponent', () => {
  let component: MembermanagerComponent;
  let fixture: ComponentFixture<MembermanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembermanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembermanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
