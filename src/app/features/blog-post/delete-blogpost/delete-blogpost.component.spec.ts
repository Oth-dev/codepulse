import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBlogpostComponent } from './delete-blogpost.component';

describe('DeleteBlogpostComponent', () => {
  let component: DeleteBlogpostComponent;
  let fixture: ComponentFixture<DeleteBlogpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBlogpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBlogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
