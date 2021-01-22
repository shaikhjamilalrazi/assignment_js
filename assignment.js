// 1. kilometer To meater conversion
function kilometerToMeter(kilometer) {
  var meter = kilometer * 1000;
  if (kilometer > 0 && typeof kilometer == "number") {
    return meter;
  } else {
    return "Invalid Data";
  }
}

console.log(kilometerToMeter(1));

// 2. Budget Calculator
function budgetCalculator(watch, phone, laptop) {
  var watchPrice = 50 * watch;
  var phonePrice = 100 * phone;
  var laptopPrice = 500 * laptop;
  var total = watchPrice + phonePrice + laptopPrice;

  if (
    total > 0 &&
    typeof total == "number" &&
    watch > 0 &&
    typeof watch == "number" &&
    phone > 0 &&
    typeof phone == "number" &&
    laptop > 0 &&
    typeof laptop == "number"
  ) {
    return total;
  } else {
    return "Invalid Data";
  }
}

console.log(budgetCalculator(1, 1, 1));

// 3. Hotel Cost
function hotelCost(numberOfDays) {
  var tenDaysCost = 100;
  var afterTenDaysCost = 80;
  var afterTwentyDaysCost = 50;
  var cost = 0;

  if (numberOfDays <= 10) {
    cost = tenDaysCost * numberOfDays;
  } else if (numberOfDays <= 20) {
    var firstTenDays = tenDaysCost * 10;
    var remainDays = numberOfDays - 10;
    var totalCostAfterTenDays = afterTenDaysCost * remainDays;
    cost = firstTenDays + totalCostAfterTenDays;
  } else {
    var firstTenDays = tenDaysCost * 10;
    var afterTendayCost = afterTenDaysCost * 10;
    var remainAftertwentyDays = numberOfDays - 20;
    var totalCostTwentyDays = afterTwentyDaysCost * remainAftertwentyDays;
    cost = firstTenDays + afterTendayCost + totalCostTwentyDays;
  }

  if (numberOfDays > 0 && typeof numberOfDays == "number") {
    return cost;
  } else {
    return "Invalid Data";
  }
}

console.log(hotelCost(1));

// 4. Mega Friend
var arrFriends = ["jamil", "noor"];

function megaFriend(nameList) {
  var largestName = nameList[0];

  for (var i = 0; i < nameList.length; i++) {
    var element = nameList[i];

    if (element.length > largestName.length) {
      largestName = element;
    }
  }
  if (nameList.length == 0 || nameList == "") {
    return "No data found..";
  } else {
    return largestName;
  }
}

console.log(megaFriend(arrFriends));
