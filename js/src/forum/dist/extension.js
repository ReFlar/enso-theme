'use strict';

System.register('reflar/enso-theme/main', ['flarum/app'], function (_export, _context) {
  "use strict";

  var app;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }],
    execute: function () {

      app.initializers.add('reflar/enso-theme', function () {
        console.log('Hello, forum!');
      });
    }
  };
});