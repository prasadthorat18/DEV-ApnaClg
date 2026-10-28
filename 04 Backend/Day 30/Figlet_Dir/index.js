const figlet = require('figlet')

figlet('Prasad Thorat', function(err, data){
    if(err){
        console.log('somehting went wrong');
        console.log(err);
        return;
    }
    console.log(data);
    
}) 