export const environment = {
  production: false,
  url:'https://pacoprod-back.azurewebsites.net/', // ------ Url Prod ------
  // url:'https://unidappback.azurewebsites.net/', // ------ Url Desarrollo ------
  // url: 'http://190.251.210.194:8080', // ip miguel
  autenticacion: 'authenticate',
  restorePassword: 'authenticate/restorePassword',
  usuarios: '/findAllUsers',
  establecimientos: '/getMyEstablishments',
  options: '/getOptions',
  establecimiento: '/establishment',
  update: '/saveEstablishment',
  user: '/user',
  saveUser: '/saveUser',
  vecino: '/neighbor',
  vecinoPorEstablecimiento: '/getByEstablishment',
  neighbor: '/neighbor',
  saveNeighbor: '/saveNeighbor',
  asset: '/asset',
  saveAsset: '/saveAsset',
  getByNum_interno: '/getByNum_interno',
  // ------ Config Firebase Desarrollo ------
  // firebaseConfig: {
  //   apiKey: "AIzaSyAh-UnJ1nF5Pd2E4ly4X8vwA7nQGz3CNKY",
  //   authDomain: "unidapp-385a8.firebaseapp.com",
  //   databaseURL: "https://unidapp-385a8.firebaseio.com",
  //   projectId: "unidapp-385a8",
  //   storageBucket: "unidapp-385a8.appspot.com",
  //   messagingSenderId: "997451424192",
  //   appId: "1:997451424192:web:ff1d865364f67a1f536825",
  //   measurementId: "G-QTY9N0Q2E7"
  // }
  // ------ Config Firebase Producción ------
  firebaseConfig: {
    apiKey: "AIzaSyBlpYsXeqDxtZ9Xvfwuz79NW6Ho0mB-FDs",
    authDomain: "paco-prod.firebaseapp.com",
    databaseURL: "https://paco-prod-default-rtdb.firebaseio.com",
    projectId: "paco-prod",
    storageBucket: "paco-prod.appspot.com",
    messagingSenderId: "483058656029",
    appId: "1:483058656029:web:9339316c8886255808f7f4",
    measurementId: "G-B26BY35K93"
  }
};
