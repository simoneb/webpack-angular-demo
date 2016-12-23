import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'

import {AppModule} from './AppModule'

if(!document.querySelector('base')) {
  const base = document.createElement('base')
  base.href = '/angular-bundle/'
  document.head.appendChild(base)
}

const myApp = document.createElement('my-app')
myApp.innerText = 'my angular app will render here'
document.body.appendChild(myApp)

platformBrowserDynamic().bootstrapModule(AppModule)
