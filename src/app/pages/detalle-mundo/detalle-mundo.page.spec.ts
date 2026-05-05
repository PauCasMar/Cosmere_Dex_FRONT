import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleMundoPage } from './detalle-mundo.page';

describe('DetalleMundoPage', () => {
  let component: DetalleMundoPage;
  let fixture: ComponentFixture<DetalleMundoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMundoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
