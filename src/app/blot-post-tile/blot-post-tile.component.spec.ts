import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlotPostTileComponent } from './blot-post-tile.component';

describe('BlotPostTileComponent', () => {
  let component: BlotPostTileComponent;
  let fixture: ComponentFixture<BlotPostTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlotPostTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlotPostTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
