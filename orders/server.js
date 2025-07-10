const express = require('express');
const axios = require('axios')
const app=express();
const PORT = 3003;

app.get('/orders', async (req, res) => {
    
//     res.send({
//         'data': 'This is orders server',
//         'info': 'I am coming from order server'
// })
res.send(
    [
  {
    "orderId": "O1001",
    "accountId": "A1001",
    "orderDate": "2025-07-10T14:00:00Z",
    "status": "Shipped",
    "items": [
      {
        "productId": "P1001",
        "quantity": 1
      },
      {
        "productId": "P1002",
        "quantity": 1
      }
    ],
    "totalAmount": 3398
  },
  {
    "orderId": "O1002",
    "accountId": "A1002",
    "orderDate": "2025-07-09T16:45:00Z",
    "status": "Processing",
    "items": [
      {
        "productId": "P1001",
        "quantity": 2
      }
    ],
    "totalAmount": 1798
  }
]

)
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})