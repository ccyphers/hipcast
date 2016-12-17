var kong = require('tokyo_ape')()
    , util = require('util');

kong.api.add({name: 'hipchat_room_broadcast', upstream_url: 'http://10.8.0.2:10010', request_path: '/api/hipchat/rooms/broadcast', strip_request_path: false});
kong.api.add({name: 'hipchat_rooms', upstream_url: 'http://10.8.0.2:10010', request_path: '/api/hipchat/rooms', strip_request_path: false});

kong.api.addPlugin('hipchat_room_broadcast', {name: 'cors'});
kong.api.addPlugin('hipchat_rooms', {name: 'cors'});
