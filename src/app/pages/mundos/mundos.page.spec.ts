import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MundosPage } from './mundos.page';

describe('MundosPage', () => {
  let component: MundosPage;
  let fixture: ComponentFixture<MundosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MundosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
