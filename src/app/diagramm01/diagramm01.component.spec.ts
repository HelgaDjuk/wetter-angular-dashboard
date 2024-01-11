import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diagramm01Component } from './diagramm01.component';

describe('Diagramm01Component', () => {
  let component: Diagramm01Component;
  let fixture: ComponentFixture<Diagramm01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Diagramm01Component]
    });
    fixture = TestBed.createComponent(Diagramm01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
