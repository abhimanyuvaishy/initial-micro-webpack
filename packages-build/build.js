const fs= require('fs');
const resolve = require('path').resolve;
const join= require('path').join;
const cp = require('child_process');
const os = require('os');
const packages= require('./packages.json');


function build(count = 0){
    if(count >= packages.length){
        return;
    }
    const modules =packages[count];
    buildTasks(modules, function(){
        build(count + 1);
    });
}

if(packages.length){
    build();
}

function buildTasks(module, callBack){
    if(module.publish){
        const modPath = resolve(__dirname, '../', module.sourceDir);
        if(!fs.existsSync(join(modPath,'package.json'))) return;

        console.info('Starting build for the package', module.name);
        // npm binary based on OS.

        const npmCmd= os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

        // build packages.

        const buildCmd= module.buildCmd || 'build';

        cp.spawn(npmCmd, ['run', buildCmd], {env: process.env, cwd : modPath, stdio: 'inherit'})
        .on('close',function(){
            callBack();
        }).on('error', function(){
            callBack();
        });
    }
    else{
        callBack();
    }
}