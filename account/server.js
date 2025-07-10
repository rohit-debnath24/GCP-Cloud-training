const express = require('express');
const axios = require('axios')
const app=express();
const PORT = 3001;

app.get('/account', async (req, res) => {

//     res.send({
//         'data': 'This is account server',
//         'info': 'I am coming from account server'
// })

res.send(
    [
  {
    "accountId": "A1001",
    "name": "Rohit Kumar Debnath",
    "email": "rohit@example.com",
    "password": "hashed_password_123",
    "createdAt": "2025-07-10T12:00:00Z"
  },
  {
    "accountId": "A1002",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "password": "hashed_password_456",
    "createdAt": "2025-07-09T08:30:00Z"
  }
]

)
   
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})