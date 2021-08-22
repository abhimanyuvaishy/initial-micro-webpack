const shell = require('shelljs');


shell.echo('********** change dir ******');
shell.cd('./packages-build');

shell.echo('********** install packages Start ******');
shell.exec('node install.js && node install-dev.js && node build.js');

shell.echo('********** install packages End ******');