// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false

};

export const agilidadConfig = {
  min: 1,
  max: 5
};

export const apiConfig = {
  host: 'http://apisala.avillucas.com.ar/'
  //host: 'http://localhost:8080/'
};

// tslint:disable-next-line:max-line-length
export const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4gQWRtaW4iLCJlbWFpbCI6ImFkbWluQHNhbGEuY29tIiwiaWQiOjEsImlhdCI6MTUxNjIzOTAyMn0.5zO6BKPJiqNGCkFfJxza32gQjkDZBeKmwtLgMU47cq0';

export const fakeTokenData = {
  'name': 'Carlos Admin',
  'email': 'admin@sala.com',
  'id': 1,
  'iat': 1516239022
};
