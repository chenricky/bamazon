var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "Localhost",
    password: "password",
    database: "bamazonDB",
    user: "root",
    port: 3306
});

var inquirer = require("inquirer");
var customerAnswer;

connection.connect(function(err) {
  if (err) throw err;
  customerQuestion();
  //connection.end();
});


//-------------------------------------------------------------------------------------
function customerQuestion() {
connection.query("SELECT * FROM bamazonTable", function(err, res) {

var itemArrayDisplay=[];
var itemArrayChoice=[];

for (var i=0; i<res.length; i++){
itemArrayDisplay.push("Item: " + res[i].id + "     Name: " + res[i].item_Name + "     price: $"+ res[i].price+ "     Original Stock: "+ res[i].stock + "     Cusotmer purchases: " + res[i].purchase);
itemArrayChoice.push(res[i].item_Name);

}
console.log(itemArrayDisplay);


inquirer.prompt([
    {
        name: "customerAction",
        message: "What item would you like to buy?",
        type: "list",
        choices: itemArrayChoice
    },
    {
        name: "howMany",
        message: "How many do you want to buy?",
        type: "input"
    }
]).then(function(customerAnswer){
    console.log("you would like to buy " + customerAnswer.howMany + " " + customerAnswer.customerAction);
    console.log("purchase completed. stock is updated");
    //console.log(customerAnswer);
    connection.query(
    "UPDATE bamazonTable SET ? WHERE ?",
    [
     {
        purchase: customerAnswer.howMany
     },
     {
        item_Name: customerAnswer.customerAction
     }
    ],
    function() {
            connection.query("SELECT * FROM bamazonTable", function(err, res){
            //console.log(res);

            for (var i=0; i<res.length; i++){
                if (customerAnswer.customerAction === res[i].item_Name) {
                    console.log("current " + res[i].item_Name + " purchase is: " + res[i].purchase);
                }
            }

            })
        }
    );
      }
      );
})
}
//-------------------------------------------------------------------------------------

function afterConnection() {
  connection.query("SELECT * FROM bamazonTable", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

//updateStock();
//}

//updateStock();

//})

//function updateStock() {
//    connection.query(
//    "UPDATE bamazonTable SET ? WHERE ?",
//    [
//     {
//        stock: customerAnswer.howMany
//     },
//     {
//        id: customerAnswer.id
//     }
//    ],
//    function(error) {
//              if (error) throw err;
//              console.log("there is an error!");
//              //start();
//            }
//
//    )
//}
