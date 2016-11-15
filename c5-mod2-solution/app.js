(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var listToBuy = this;
  listToBuy.items = ShoppingListCheckOffService.getItemsToBuy();
  listToBuy.itemName = "";
  listToBuy.itemQuantity = "";

  listToBuy.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.itemBought(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var listBought = this;
  listBought.items = ShoppingListCheckOffService.getItemsBought();
  listBought.itemName = "";
  listBought.itemQuantity = "";
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of items to buy
  var itemsToBuy = [
    { name: "cookies", quantity: 10 }, 
    { name: "juice", quantity: 5 },
    { name: "soft drink", quantity: 2 },
    { name: "bread", quantity: 3 },
    { name: "milk", quantity: 6 }
    ];

  // List of bought items
  var itemsBought = [];

  service.itemBought = function (itemIndex) {
    var item = itemsToBuy[itemIndex];
    itemsToBuy.splice(itemIndex, 1);
    itemsBought.push(item);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };

}



})();
