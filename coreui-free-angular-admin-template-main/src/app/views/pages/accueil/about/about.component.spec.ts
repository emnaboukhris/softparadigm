import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DocsComponentsModule } from 'src/components/docs-components.module';
import { ButtonModule, CardModule, FormModule, GridModule, ProgressModule, WidgetModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { IgxTabsModule } from 'igniteui-angular'
import { AboutComponent } from './about.component';
import { FormControlsComponent } from 'src/app/views/forms/form-controls/form-controls.component';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconModule } from '@coreui/icons-angular';
import { DocsExampleComponent } from 'src/components/docs-example/docs-example.component';
import { TabsComponent } from 'src/app/views/base/tabs/tabs.component';
import { NavsComponent } from 'src/app/views/base/navs/navs.component';
import { CardsComponent } from 'src/app/views/base/cards/cards.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      imports: [
        CardsComponent,
        TabsComponent, NavsComponent,
        DocsExampleComponent ,FormControlsComponent,WidgetModule, ProgressModule, GridModule, DocsComponentsModule, CardModule, RouterTestingModule, ChartjsModule, IconModule],


    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
