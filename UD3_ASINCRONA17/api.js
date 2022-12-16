/* function getProduct(){
    fetch('http://localhost:9000/API/PRODUCTOS')
    .then(response=>response.json())
    .then(data=>console.log(data));
}

getProduct(); */

function getOneProduct(){
    fetch('http://localhost:9000/API/PRODUCTOS/639c906d9ca1fbe6a26d1394')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch( err => console.error(err));
}

getOneProduct();


/* function createProduct(){
    let json = {
        SKU:"P200",
        QTY:200,
        NAME:"Gold D Roger",
        PRICE:100000
    }
    fetch('http://localhost:9000/API/PRODUCTOS',{
        method:"POST",
        body:JSON.stringify(json),
        headers:{"Content-type":"application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));
    ;
}

createProduct(); */

/* function updateProduct(){
    fetch('http://localhost:9000/API/PRODUCTOS/639cea5aeb15fd83ced5003c', {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ SKU: "P201", QTY: 230,NAME:"PORTGAS D. ACE",PRICE:100000000 })
    })
    .then(res => res.json())
    .then(res=> {
      console.log(res);
});
}

updateProduct(); */

/* function deleteProduct(){
    fetch('http://localhost:9000/API/PRODUCTOS/639cea5aeb15fd83ced5003c', {
        method: 'DELETE',
  })
  .then(res => res.json())
  .then(res=> {
        console.log(res);
  });
}
deleteProduct(); */