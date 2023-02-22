import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageSheetComponent } from './homepage-sheet/homepage-sheet.component';
import { StatDetailComponent } from './stat-detail/stat-detail.component';
import { SavingThrowsComponent } from './saving-throws/saving-throws.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { OtherCharacteristicsDetailComponent } from './other-characteristics-detail/other-characteristics-detail.component';
import { TopContentComponent } from './top-content/top-content.component';
import { DataServiceService } from './services/data-service.service';
import { AttacksSpellcastingComponent } from './attacks-spellcasting/attacks-spellcasting.component';
import { GenericTextBoxComponent } from './generic-text-box/generic-text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageSheetComponent,
    StatDetailComponent,
    SavingThrowsComponent,
    SkillDetailComponent,
    OtherCharacteristicsDetailComponent,
    TopContentComponent,
    AttacksSpellcastingComponent,
    GenericTextBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
