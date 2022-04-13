window.onload = function() {
    getCustomers();
    getProducts();
}

function getCustomers() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "api/Customer");
    xhttp.onload = function() {
        var customers = JSON.parse(xhttp.responseText);
        let rows = '';
        for (let i = 0; i < customers.length; i++) {
            rows +=
                "<option value = " + customers[i].customerID + ">" +
                customers[i].Name + "</option>";
        }
        document.getElementById("customerChoose").innerHTML = rows;
    }
    xhttp.send();
}

function getProducts() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "api/Product");
    xhttp.onload = function () {
        var products = JSON.parse(xhttp.responseText);
        let rows = '';
        for (let i = 0; i < products.length; i++) {
            if (products[i].)
            rows +=
                "<option value = " + products[i].ProductId + ">" +
                products[i].Name + "</option>";
        }
        document.getElementById("productChoose").innerHTML = rows;
    }
    xhttp.send();
}

function addOrder() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "api/Customer");
    xhttp.onload = function() {
        var customers = JSON.parse(xhttp.responseText);
        for (let i = 0; i < customers.length; i++) {
            if(customers[i].customerID ===  document.getElementById('customerChoose').value){
                let customerToInsert = {
                    customerID: customers[i].customerID,
                    name: customers[i].name,
                    phoneNumber: customers[i].phoneNumber,
                    address: customers[i].address
                };
                let itemToInsert = {
                    customer: customerToInsert,
                    orderDate: document.getElementById('date').value,
                    orderPrice: document.getElementById('price').value
                };
                let itemToInsertJson = JSON.stringify(itemToInsert);
                let xhttpPost = new XMLHttpRequest();
                xhttpPost.open("POST", "rest/orders/");
                xhttpPost.setRequestHeader('Content-Type', 'application/json');
                xhttpPost.send(itemToInsertJson);
            }
        }
    }
    xhttp.send();

}