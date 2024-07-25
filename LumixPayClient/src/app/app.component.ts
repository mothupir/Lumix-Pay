import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.showSplash();
  }

  private async showSplash(): Promise<void> {
    await SplashScreen.show({
      showDuration: 5000,
      autoHide: true,
    });
  }
}
