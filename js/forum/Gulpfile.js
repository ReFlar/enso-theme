var gulp = require('flarum-gulp');

gulp({
  modules: {
    'reflar/enso-theme': [
      'src/**/*.js',
    ]
  }
});
