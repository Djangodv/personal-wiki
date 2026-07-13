import * as sideNav from './src/components/sideNav.js'
import * as serviceWorker from './src/services/serviceWorker.js'
    
serviceWorker.register();

sideNav.displayEntries();