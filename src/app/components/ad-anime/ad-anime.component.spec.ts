import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAnimeComponent } from './ad-anime.component';

describe('AdAnimeComponent', () => {
  let component: AdAnimeComponent;
  let fixture: ComponentFixture<AdAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAnimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
