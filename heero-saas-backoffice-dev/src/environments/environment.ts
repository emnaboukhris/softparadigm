// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/',
  frontUrl: 'http://localhost:4200/#/',
  domain : 'admin.mkt.localhost:4200/',
  environmentProfile: 'DEV',
  firebase: {
    apiKey: "AIzaSyCN8GlBmyAVTqWtADqXK-oS_Reor1KhT34",
    authDomain: "pass-excellence.firebaseapp.com",
    databaseURL: "https://pass-excellence-default-rtdb.firebaseio.com",
    projectId: "pass-excellence",
    storageBucket: "pass-excellence.appspot.com",
    messagingSenderId: "1090051205616",
    appId: "1:1090051205616:web:f6d372ea583248be191535"
  },
  productFamily: 'APPARELS',  //'PRODUCT_FAMILY';
  recaptchaSiteKey: "6LdHMg4fAAAAAFJV_2dgfUY0fD5ZjOMwRZhag2It"
};
