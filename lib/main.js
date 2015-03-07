var self = require('sdk/self');
var PageMod = require('sdk/page-mod').PageMod;

PageMod({
  include: ['*.twitter.com', '*.facebook.com'],
  contentScriptWhen: 'start',
  attachTo: ["existing", "top", "frame"],
  contentScriptFile: self.data.url('content-script.js'),
});
