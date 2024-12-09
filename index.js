const http = require(http)
        const port = 3000
        const server = http.createserver(function(req,res){

        })
        server.listesn(port, function(err){
            if(error){
                console.log("something went wrong")
            }
            else{
                console.log("server is listening on port", + port)
            }
        })
