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

    console.log(chalk.bold(`
██╗  ██╗███████╗ ██████╗████████╗ ██████╗ ██████╗ 
██║  ██║██╔════╝██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗
███████║█████╗  ██║        ██║   ██║   ██║██████╔╝
██╔══██║██╔══╝  ██║        ██║   ██║   ██║██╔══██╗
██║  ██║███████╗╚██████╗   ██║   ╚██████╔╝██║  ██║
╚═╝  ╚═╝╚══════╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝
[?] ${chalk.bold('Choose a Number  :')}
1. ${chalk.bold('get : 1 Crown ÷ 30 Trophy ÷ 35 Star ÷ 3000 Exp')}
2. ${chalk.bold('get : 20 Trophy ÷ 30 Star ÷ 1500 Exp')
`));

 const feature = rs.question(chalk.bold('[~] Enter a Number 1/2/3 : '));

 if (feature == '1') {

    const auth = rs.question(chalk.bold('[/] Enter your auth token : '));
    console.log(chalk.bold('STARTING..'));

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
            const tokenPass = data.User.BattlePass.PassTokens;
            const trophy = data.User.SkillRating;
            const crown = data.User.Crowns;
 
     console.log(chalk.bold(`\r
  ♨ [${moment().format('HH:mm:ss')}] ♨
•>  ${(`Username : ${username}`)}
•> ${(`Country : ${country}`)}
•> ${(`Pass Star : ${tokenPass}`)}
•> ${(`Exp Level : ${exp}`)}  
•> ${(`crown : ${crown}`)}
•> ${(`Tropy : ${trophy}`)}  
•> ${(`Status : ✓ Success`)}`));
        await sleep(3000);

    } else if (result == 'BANNED') {

        console.log(chalk.redBright(chalk.bold(`Your Account Has Been Banned !`)));
        break;
                
    } else if (result == 'SERVER_ERROR') {

        continue;
                
      }
  }
        
 } else if (feature == '2') {

    const auth = rs.question(chalk.bold('[/] Enter your auth token : '));
    console.log(chalk.bold('STARTING..'));

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
            const tokenPass = data.User.BattlePass.PassTokens;
            const trophy = data.User.SkillRating;
                 
     console.log(chalk.blue(chalk.bold(`\r
  ♨ [${moment().format('HH:mm:ss')}] ♨
•> ${(`Username : ${username}`)}
•> ${(`Country : ${country}`)}
•> ${(`Pass Star : ${tokenPass}`)}
•> ${(`Exp Level : ${exp}`)}  
•> ${(`Tropy : ${trophy}`)}  
•> ${(`Status : ✓ Success`)}`));
        await sleep(3000);

    } else if (result == 'BANNED') {

        console.log(chalk.redBright(chalk.bold(`Your Account Has Been Banned !`)));
        break;
                
    } else if (result == 'SERVER_ERROR') {

        continue;
                
      }
  }
  
 } else if (feature == '3') {

    const auth = rs.question(chalk.bold('[/] Enter your auth token : '));
    console.log(chalk.bold('STARTING..'));

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
            const tokenPass = data.User.BattlePass.PassTokens;
            const trophy = data.User.SkillRating;
                
     console.log(chalk.bold(`\r
  ♨ [${moment().format('HH:mm:ss')}] ♨
•> ${(`Username : ${username}`)}
•> ${(`Country : ${country}`)}
•> ${(`Pass Star : ${tokenPass}`)}
•> ${(`Exp Level : ${exp}`)}  
•> ${(`Tropy : ${trophy}`)}  
•> ${(`Status : ✓ Success`)}`));
        await sleep(3000);

    } else if (result == 'BANNED') {

        console.log(chalk.redBright(chalk.bold(`Your Account Has Been Banned !`)));
        break;
                
    } else if (result == 'SERVER_ERROR') {

        continue;
                
      }
  }

 } else {

     console.log(chalk.redbright(chalk.Bold (`Wrong feature !`)));

 }
    

})();
