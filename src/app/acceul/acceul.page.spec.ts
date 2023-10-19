import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcceulPage } from './acceul.page';

describe('AcceulPage', () => {
  let component: AcceulPage;
  let fixture: ComponentFixture<AcceulPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AcceulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
