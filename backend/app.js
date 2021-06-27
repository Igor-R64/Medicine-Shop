 
const express = require("express");
const fs = require("fs");
    
const app = express();
const jsonParser = express.json();
const filePath = "product.json";

app.get("/api/goods", function(req, res){
       
    const content = fs.readFileSync(filePath,"utf8");
    const users = JSON.parse(content);
    res.send(users);
});
  
app.get("/api/goods/:id", function(req, res){
       
    const id = req.params.id;
    const content = fs.readFileSync(filePath, "utf8");
    const users = JSON.parse(content);
    let user = null;
    for(let i=0; i<users.length; i++){
        if(users[i].id==id){
            user = users[i];
            break;
        }
    }
    if(user){
        res.send(user);
    }
    else{
        res.status(404).send();
    }
});

app.post("/api/goods", jsonParser, function (req, res) {
      
    if(!req.body) return res.sendStatus(400);
      
    const proCount = req.body.count;
    const proTitle = req.body.title;
    const proPrice = req.body.price;

    let product = {count: proCount, title: proTitle, price: proPrice};
      
    let data = fs.readFileSync(filePath, "utf8");
    let products = JSON.parse(data);
      
    
    const id = Math.max.apply(Math,products.map(function(o){return o.id;}))
    product.id = id+1;
    products.push(product);
    data = JSON.stringify(products);
    fs.writeFileSync("product.json", data);
    res.send(product);
});
app.delete("/api/goods/:id", function(req, res){
       
    const id = req.params.id;
    let data = fs.readFileSync(filePath, "utf8");
    let products = JSON.parse(data);
    let index = -1;
    for(let i=0; i < products.length; i++){
        if(products[i].id==id){
            index=i;
            break;
        }
    }
    if(index > -1){
        const product = products.splice(index, 1)[0];
        data = JSON.stringify(products);
        fs.writeFileSync("product.json", data);
        res.send(product);
    }
    else{
        res.status(404).send();
    }
});
app.put("/api/goods", jsonParser, function(req, res){
       
    if(!req.body) return res.sendStatus(400);

    const prorId = req.body.id;
    const proCount = req.body.count;
    const proTitle = req.body.title;
    const proPrice = req.body.price;
      
    let data = fs.readFileSync(filePath, "utf8");
    const products = JSON.parse(data);
    let product;
    for(let i=0; i<products.length; i++){
        if(products[i].id==prorId){
            product = products[i];
            break;
        }
    }
    if(product){
        product.count = proCount;
        product.title = proTitle;
        product.price = proPrice;

        data = JSON.stringify(products);
        fs.writeFileSync("product.json", data);
        res.send(product);
    }
    else{
        res.status(404).send(product);
    }
});
   
app.listen(3001);