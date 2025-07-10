const express = require('express');
const axios = require('axios')
const app=express();
const PORT = 3004;

app.get('/cart', async (req, res) => {
    // console.log('this is account')
    // const response= await axios.get('https://localhost:3001/')
    // console.log(response.data)
//     res.send({
//         'data': 'This is cart server',
//         'info': 'I am coming from cart server'
// })
res.send([
  {
    "accountId": "A1001",
    "items": [
      {
        "productId": "P1002",
        "quantity": 1
      }
    ],
    "updatedAt": "2025-07-10T13:30:00Z"
  },
  {
    "accountId": "A1002",
    "items": [
      {
        "productId": "P1001",
        "quantity": 1
      },
      {
        "productId": "P1002",
        "quantity": 2
      }
    ],
    "updatedAt": "2025-07-10T11:00:00Z"
  }
]
)
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})