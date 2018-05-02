import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AboutComponent } from './about.component';
import { LadderComponent } from './../ladder/ladder.component';
import { AFLLadderModule } from './../afl-ladder/afl-ladder.module';
import { MaterialModule } from './../angularMaterial.module';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../services/user.service';
import { RoundService } from '../services/round.service';
import { TipService } from '../services/tip.service';

describe('Component: About', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent, LadderComponent ],
      imports: [
        AFLLadderModule,
        MaterialModule,
        SharedModule
      ],
      providers: [
        UserService,
        RoundService,
        TipService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the string "About" in h4', () => {
    const el = fixture.debugElement.query(By.css('h4')).nativeElement;
    expect(el.textContent).toContain('Welcome');
  });

});
