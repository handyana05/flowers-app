import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersListItemComponent } from './flowers-list-item.component';

describe('FlowersListItemComponent', () => {
  let component: FlowersListItemComponent;
  let fixture: ComponentFixture<FlowersListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowersListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowersListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
