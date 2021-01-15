import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WipPageComponent } from './wip-page.component';

describe('WipPageComponent', () => {
  let component: WipPageComponent;
  let fixture: ComponentFixture<WipPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WipPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
