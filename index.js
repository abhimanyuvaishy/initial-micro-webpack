const shell = require('shelljs')
shell.echo('********** change dir ******');
shell.cd('./packages-build');

shell.echo('********** install packages Start ******');
shell.exec('node install.js');

shell.echo('********** install packages End ******');

