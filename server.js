var express = require('express'),
    app = express(),
    timestamps={};
    
    app.get('/', function(req, res){
        res.send("timestamp API server, enter as string params.")
    })
    
   app.param('id', function(req, res){
       var id = req.params.id;
       
       if (new Date(id).getTime()>0){
         var dat = new Date(id)  
         timestamps.date = dat.toString().substr(0, 16);
         timestamps.unix = dat.getTime()/1000;
       } else if (new Date(id*1000).getTime()>0){
            var dat = (new Date(id*1000)).toGMTString()
            timestamps.date = dat.substr(0, 16);
            timestamps.unix = id;
       }
       res.send(timestamps);
   })
    app.get('/:id', function(req, res){
       res.end();
    });
  
   
    
    app.listen(8080, function(){
        console.log("Listenning on 8080")
    })