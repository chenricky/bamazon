var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "Localhost",
    password: "password",
    database: "bamazonDB",
    user: "root",
    port: 3306
});

var inquirer = require("inquirer");

connection.query("SELECT * FROM bamazonTable", function(err, res) {

var itemArrayDisplay=[];
var itemArrayChoice=[];

for (var i=0; i<res.length; i++){
itemArrayDisplay.push("Item: " + res[i].item_ID + "     Name: " + res[i].item_Name + "     Sell Department: " + res[i].department_Name + "     price: $"+ res[i].price+ "     Stock: "+ res[i].stock);
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
    console.log("stock need to be updated");

    //var query = "SELECT * FROM bamazonTable WHERE ?";
    //var query = "SELECT * FROM bamazonTable";

    connection.query("SELECT * FROM bamazonTable WHERE item_Name=?", [customerAnswer.customerAction], function(err, res) {
        for (var i=0; i < res.length; i++){
        console.log("stock before your purchase: " + res[i].stock + " , stock after your purchase: " + (res[i].stock-1));
        }
      });
})


})
