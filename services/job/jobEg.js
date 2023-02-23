const schedule=require('node-schedule');

const job = schedule.scheduleJob('*/4 * * * * *', function(){
        console.log('Hello how are you!');

      });
