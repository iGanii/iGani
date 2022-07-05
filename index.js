const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const GoStumble = (code, auth) => new Promise((resolve, reject) => {

   fetch(`http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/${code}`, {
       method: 'GET',
       headers: {
          'authorization': auth,
          'use_response_compression': 'true',
          'Accept-Encoding': 'gzip',
          'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 11; Infinix X6511B Build/RP1A.201005.001)',
      }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {

    console.log(chalk.magenta(chalk.bold(`
██╗  ██╗███████╗ ██████╗████████╗ ██████╗ ██████╗ 
██║  ██║██╔════╝██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗
███████║█████╗  ██║        ██║   ██║   ██║██████╔╝
██╔══██║██╔══╝  ██║        ██║   ██║   ██║██╔══██╗
██║  ██║███████╗╚██████╗   ██║   ╚██████╔╝██║  ██║
╚═╝  ╚═╝╚══════╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝
${(chalk.blue(chalk.bold('╔════════════════════▣◎▣════════════════════╗')))} 
  ${(chalk.red(chalk.bold('[?]')))} ${(chalk.yellow(chalk.bold('Choose a Number')))} ${(chalk.red(chalk.bold('•')))} ${(chalk.yellow(chalk.bold('Author : HectorV2')))}
  ${(chalk.red(chalk.bold('1.')))} ${(chalk.yellow(chalk.bold('Round 1 Eliminate')))} ${(chalk.red(chalk.bold('•')))} ${(chalk.yellow(chalk.bold('Disccord : Vicenzo#3819')))}
  ${(chalk.red(chalk.bold('2.')))} ${(chalk.yellow(chalk.bold('Round 2 Eliminate')))} ${(chalk.red(chalk.bold('•')))} ${(chalk.yellow(chalk.bold('Wa : 085706xxxxx')))}
  ${(chalk.red(chalk.bold('3.')))} ${(chalk.yellow(chalk.bold('Round 3 Winner')))}
${(chalk.blue(chalk.bold('╚════════════════════▣◎▣════════════════════╝')))}
`)));

 const feature = rs.question(chalk.blue(chalk.bold('[~] Enter a Number : ')));

 if (feature == '1') {

    const auth = rs.question(chalk.bold('[+] Enter your auth token : '));
    console.log(chalk.bold('■■■■■□□□'));

    while (true) {

        var code = '1';
        const result = await GoStumble(code, auth);
        if (!result) {

            console.log(chalk.redBright(chalk.bold(`Auth Sudah Expired !`)));
            break;

        } else if (result.includes('User')) {

            const data = JSON.parse(result);
            const username = data.User.Username;
            const country = data.User.Country;
            const exp = data.User.Experience;
            const trophy = data.User.SkillRating;
 
     console.log(chalk.bold(`\r
  ♨ [${moment().format('HH:mm:ss')}] ♨
•> ${(`Username : ${username}`)}
•> ${(`Country : ${country}`)}  
•> ${(`Exp Level : ${exp}`)}
•> ${(`Tropy : ${trophy}`)}  
•> ${(`Status : ✓ Success`)}`));
        await sleep(1);

    } else if (result == 'BANNED') {

        console.log(chalk.redBright(chalk.bold(`Your Account Has Been Banned !`)));
        break;
                
    } else if (result == 'SERVER_ERROR') {

        continue;
                
      }
  }
        
 } else if (feature == '2') {

    const auth = rs.question(chalk.bold('[+] Enter your auth token : '));
    console.log(chalk.bold('■■■■■□□□'));

    while (true) {

        var code = '2';
        const result = await GoStumble(code, auth);
        if (!result) {

            console.log(chalk.redBright(chalk.bold(`Auth Sudah Expired !`)));
            break;

        } else if (result.includes('User')) {

            const data = JSON.parse(result);
            const username = data.User.Username;
            const country = data.User.Country;
            const exp = data.User.Experience;
            const trophy = data.User.SkillRating;
                 
     console.log(chalk.bold(`\r
  ♨ [${moment().format('HH:mm:ss')}] ♨
•> ${(`Username : ${username}`)}
•> ${(`Country : ${country}`)}
•> ${(`Exp Level : ${exp}`)}  
•> ${(`Tropy : ${trophy}`)}  
•> ${(`Status : ✓ Success`)}`));
        await sleep(1);

    } else if (result == 'BANNED') {

        console.log(chalk.redBright(chalk.bold(`Your Account Has Been Banned !`)));
        break;
                
    } else if (result == 'SERVER_ERROR') {

        continue;
                
      }
  }

 } else if (feature == '3') {

    const auth = rs.question(chalk.bold('[/] Enter your auth token : '));
    console.log(chalk.bold('■■■■■□□□'));

    while (true) {

        var code = '3';
        const result = await GoStumble(code, auth);
        if (!result) {

            console.log(chalk.redBright(chalk.bold(`Auth Sudah Expired !`)));
            break;

        } else if (result.includes('User')) {

            const data = JSON.parse(result);
            const username = data.User.Username;
            const country = data.User.Country;
            const exp = data.User.Experience;
            const trophy = data.User.SkillRating;
            const crown = data.User.Crowns;
 
     console.log(chalk.bold(`\r
  ♨ [${moment().format('HH:mm:ss')}] ♨
•> ${(`Username : ${username}`)}
•> ${(`Country : ${country}`)}
•> ${(`Exp Level : ${exp}`)}  
•> ${(`Crown : ${crown}`)}
•> ${(`Tropy : ${trophy}`)}  
•> ${(`Status : ✓ Success`)}`));
        await sleep(1);

    } else if (result == 'BANNED') {

        console.log(chalk.redBright(chalk.bold(`Your Account Has Been Banned !`)));
        break;
                
    } else if (result == 'SERVER_ERROR') {

        continue;
                
      }
  }
  
 } else {

     console.log(chalk.redbright(chalk.Bold(`Enter a Number`)));

 }
    

})();
