export default{
  port: 3000,
  dbUri: "mongodb+srv://apiUser:Oor12345678@cluster0.ps2npg9.mongodb.net/?retryWrites=true&w=majority",
}



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://apiUser:<password>@cluster0.ih7lgqr.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
