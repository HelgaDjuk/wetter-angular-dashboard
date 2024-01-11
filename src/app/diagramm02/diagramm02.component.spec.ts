import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diagramm02Component } from './diagramm02.component';

describe('Diagramm02Component', () => {
  let component: Diagramm02Component;
  let fixture: ComponentFixture<Diagramm02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Diagramm02Component]
    });
    fixture = TestBed.createComponent(Diagramm02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
