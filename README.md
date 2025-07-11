#run the cmd to clone the repo:
git clone https://github.com/rohit-debnath24/GCP-Cloud-training

#run all the microservices in every dir separately- (/account /product /cart /orders):
npx nodemon server.js 

#then run the MainServer in /MainServer dir:
npx nodemon server.js 

now u can see every data will be fetched at the MainServer running at localhost:3000/MainServer.
