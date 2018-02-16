import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterLinkStubDirective, RouterOutletStubComponent } from './router-stubs';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterLinkStubDirective, RouterOutletStubComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
