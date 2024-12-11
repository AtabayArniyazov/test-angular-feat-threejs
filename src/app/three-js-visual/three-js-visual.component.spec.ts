import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeVisualComponent } from './three-js-visual.component';

describe('ThreeVisualComponent', () => {
  let component: ThreeVisualComponent;
  let fixture: ComponentFixture<ThreeVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeVisualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
