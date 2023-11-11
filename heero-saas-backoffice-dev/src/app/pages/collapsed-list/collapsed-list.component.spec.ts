import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsedListComponent } from './collapsed-list.component';

describe('CollapsedListComponent', () => {
  let component: CollapsedListComponent;
  let fixture: ComponentFixture<CollapsedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
