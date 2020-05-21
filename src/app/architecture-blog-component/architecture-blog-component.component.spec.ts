import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureBlogComponentComponent } from './architecture-blog-component.component';

describe('ArchitectureBlogComponentComponent', () => {
  let component: ArchitectureBlogComponentComponent;
  let fixture: ComponentFixture<ArchitectureBlogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectureBlogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectureBlogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
