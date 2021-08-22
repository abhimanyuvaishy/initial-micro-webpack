const fs= require('fs');
const resolve = require('path').resolve;
const join= require('path').join;
const cp = require('child_process');
const os = require('os');
const packages= require('./packages.json');

function install(count = 0){
    if(count >= packages.length){
        return;
    }
    const modules =packages[count];
    installTasks(modules, function(){
        install(count + 1);
    });
}

if(packages.length){
    install();
}

function installTasks(module, callBack){
    if(module.publish){
        
        const modPath = resolve(__dirname, '../', module.sourceDir);

        if(!fs.existsSync(join(modPath,'package.json'))) return;

        console.info('Starting npm install for the package', module.name);
        // npm binary based on OS.

        const npmCmd= os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

        // install packages.

        cp.spawn(npmCmd, ['i'], {env: process.env, cwd : modPath, stdio: 'inherit'})
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