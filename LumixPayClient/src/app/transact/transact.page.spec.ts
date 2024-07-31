import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactPage } from './transact.page';

describe('TransactPage', () => {
  let component: TransactPage;
  let fixture: ComponentFixture<TransactPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
