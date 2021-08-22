const fs= require('fs');
const resolve = require('path').resolve;
const join= require('path').join;
const cp = require('child_process');
const os = require('os');
const packages= require('./packages.json');


function testPackages(count = 0){
    if(count >= packages.length){
        return;
    }
    const modules =packages[count];
    testPackagesTasks(module, function(){
        testPackages(count + 1);
    });
}

if(packages.length){
    testPackages();
}

function testPackagesTasks(module, callBack){
    if(module.publish && !module.test){
        const modPath = resolve(__dirname, '../', module.sourceDir);
        if(!fs.existsSync(join(modPath,'package.json'))) return;

        console.info('Starting test for the package', module.name);
        // npm binary based on OS.

        const npmCmd= os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

        // build packages.

        const buildCmd= module.buildCmd || 'test';

        cp.spawn(npmCmd, ['run', buildCmd], {env: process.env, cwd : modPath, stdio: 'inherit'})
        .on('close',function(code){
            if(code === 0){
                callBack();
            } else {
                console.error(`Process Exit with code :', ${code}`);
                process.exit(1);
            }
            
        }).on('error', function(err){
            callBack(err);
            console.error(`Test Failed  :', ${module.name}`);
            console.error(err);
            process.exit(1);
        });
    }
    else{
        callBack();
    }
}