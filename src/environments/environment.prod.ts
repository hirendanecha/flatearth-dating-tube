const loginUrl = 'https://flatearth.dating/login';
const logoutUrl = 'https://flatearth.dating/logout';
const frontendUrl = 'https://tube.flatearth.dating/';
const backendUrl =  'https://api.flatearth.dating/';

// const frontendUrl = 'http://localhost:4200/';
// const backendUrl = 'http://localhost:8080/';
// const loginUrl = 'http://localhost:4200/login';
const wasabiUrl = 'https://organic-dating.s3.wasabisys.com/'


export const environment = {
  production: false,
  frontendUrl: frontendUrl,
  backendUrl: backendUrl,
  loginUrl: loginUrl,
  apiUrl: `${backendUrl}api/v1/`,
  domain: '.FlatEarth.dating',
  wasabiUrl: wasabiUrl,
  socketUrl: `${backendUrl}`,
  conferenceUrl: 'https://facetime.tube/',
  logoutUrl: logoutUrl

};

