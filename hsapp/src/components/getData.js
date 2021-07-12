
var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();

axios({
  method: 'get',
  url: 'https://api.helpscout.net/v2/conversations?mailbox=58926&tag=brad',
  headers: { 
    'Authorization': 'Bearer GtQhG5a2msRftHJoRZ5lN511tZTgA2QM', 
    'Cookie': '_A_FirstTouchURL=/members/login/; _A_LastTouchURL=/members/login/; _A_source=utmcsr=(direct); _ga=GA1.2.2124033422.1589197917; firstTouchGA=(direct)~~~~~~~~', 
    ...data.getHeaders()
  },
  data : data
})




  console.log(data);

  
    