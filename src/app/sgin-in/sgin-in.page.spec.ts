import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SginInPage } from './sgin-in.page';

describe('SginInPage', () => {
  let component: SginInPage;
  let fixture: ComponentFixture<SginInPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SginInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
