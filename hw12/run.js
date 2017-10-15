var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'saam',
  password: 'S@amk1992',
  database: 'bamazon'
});

function run (){

  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "Enter the ID of the product you want: "
      },
      {
        name: "quantity",
        type: "input",
        message: "How many would you like to buy? "
      }
    ])
    .then(function(answer) {


      connection.query("SELECT * FROM products WHERE ID = " + answer.id, function(err, result) {
          if (result[0].stock_quantity > answer.quantity){
            console.log('Price : $',parseInt(result[0].price) * answer.quantity);
            var stock = result[0].stock_quantity;
            var quantityRequested = answer.quantity;
            var quantityRemaining = parseInt(stock) - quantityRequested;
            var sql = "UPDATE products SET stock_quantity = " + quantityRemaining + " WHERE ID = " + answer.id;

            connection.query(sql, function(err, result) {
              if (err) throw err;
              console.log('Old Stock: ', stock);
              console.log('New Stock: ', quantityRemaining);
           });
          } else {
            console.log('Insufficient quantity! Try a different quantity' + '\n' +'-------------------------');
            run();
          }
        });
    });
}

run();
