const shell = require('shelljs')
shell.echo('********** change dir ******');
shell.cd('./packages-build');

shell.echo('********** install packages Start ******');
shell.exec('node install.js && node install-dev.js && node build.js');

shell.echo('********** install packages End ******');

// shell.echo('********** install dev packages Start ******');
// shell.exec('node install-dev.js');

// shell.echo('********** install dev packages End ******');

// shell.echo('********** build dev packages Start ******');
// shell.exec('node build.js');

// shell.echo('********** build dev packages End ******');