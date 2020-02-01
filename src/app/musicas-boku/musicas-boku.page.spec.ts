import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicasBokuPage } from './musicas-boku.page';

describe('MusicasBokuPage', () => {
  let component: MusicasBokuPage;
  let fixture: ComponentFixture<MusicasBokuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicasBokuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicasBokuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
