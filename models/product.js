
const fs=require('fs');
const path=require('path');

const p=path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
    
);

const getProductsFromFile=(cb)=>{


    fs.readFile(p,(err,fileContent)=>{
        if(err){
            return cb([]);
        }else{

            cb(JSON.parse(fileContent));
        }

        
    });
    //return products;

}

const products= [];
module.exports=class Product{
    constructor(t){
        this.title=t;
    }

    save(){
        getProductsFromFile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),err=>{
                console.log(err);

            });
        });

        fs.readFile(p,(err,fileContent)=>{
            console.log(fileContent)

        });

        //products.push(this);
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }

};