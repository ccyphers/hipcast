var express = require('express')
    , app = express()
    , request = require('request')
    , async = require('async')
    ,token= process.env.HIPCAST_TOKEN
    , base_url = process.env.HIPCAST_HIPCHAT_URL;

bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function getOptions(str, room) {
    return {method: 'POST',
        url: base_url + '/room/' + room + '/message?auth_token=' + token,
        body: JSON.stringify({message: str}),
        headers: {'Content-Type': 'application/json'}}
}


function process(rooms, message, res) {
    var q = async.queue(function (room, callback) {
        ops = getOptions(message, room);
        console.log(ops);
        request(ops, function(err, hip_res) {
            console.log(err);
            console.log(hip_res);
            callback();
        })

    }, 10);

    q.drain = function () {
        res.send('OK')
    };

    for(var x = 0; x < rooms.length; x++) {
        q.push(rooms[x])
    }
}

app.get('/api/hipchat/rooms', function(req, res){
    request.get(base_url + '/room?auth_token=' + token, function(err, rooms) {
       if(err) {
           console.log(err)
           res.send({items: []})
       } else {
           try {
               res.send(rooms.body)
           } catch(e) {
               console.log(e)
               res.send({items: []})
           }
       }
    });
});

app.post('/api/hipchat/rooms/broadcast', function(req, res){
    req.body = req.body || {};
    req.body.rooms = req.body.rooms || [];
    req.body.message = req.body.message || '';
    process(req.body.rooms, req.body.message, res)
});

app.listen(10010);
