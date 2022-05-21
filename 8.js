const os =require('os');


// for the user
 const name = os.userInfo();
 console.log(name)

 //uptime of the system

 console.log(`the time in system is ${os.uptime()} seconds`);
 //used many methords

 const information = {
     name :os.type(),
     relese : os.release(),
     totalSpace :os.totalmem(),
     freeSpace :os.freemem()
 }
 //consoel log the item
 console.log(information);