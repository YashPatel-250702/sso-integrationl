import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'https://bmsso.duckdns.org/',
  realm: 'bitlabs',
  clientId: 'employee-admin',
});

export default keycloak;
