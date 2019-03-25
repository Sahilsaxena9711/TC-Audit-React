import config_development from './development';
import config_production from './production';

let CONFIG = config_development;

console.log("👋 Hi there! Looks like you're using the developer tools on our site. If you are willing to learn you can visit my Github http://www.github.com/Sahilsaxena9711 ! "
            +"%c Creafted with love by : Sahil Saxena  ✨",'color: green; font-weight: bold; ')

process.env.NODE_ENV === 'production' ? null : console.log('Environment :: ' + process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  CONFIG = config_production;
}

CONFIG['ADMIN'] = 'Admin';

export {CONFIG};
