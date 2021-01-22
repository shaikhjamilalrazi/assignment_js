// https://github.com/shaikhjamilalrazi/assignment_js

/*
// 1. kilometer To meater conversion
*/
function kilometerToMeter(kilometer) {
  var meter = kilometer * 1000;

  // Error input handeling
  if (kilometer > 0 && typeof kilometer == "number") {
    return meter;
  } else {
    return "Invalid Data";
  }
}

// console.log(kilometerToMeter(1));

/*
// 2. Budget Calculator
*/
function budgetCalculator(watch, phone, laptop) {
  var watchPrice = 50 * watch;
  var phonePrice = 100 * phone;
  var laptopPrice = 500 * laptop;

  // sum of total budget
  var total = watchPrice + phonePrice + laptopPrice;

  // Error input handeling
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

// console.log(budgetCalculator(1, 1, 1));

/*
// 3. Hotel Cost
*/
function hotelCost(numberOfDays) {
  var tenDaysCost = 100;
  var afterTenDaysCost = 80;
  var afterTwentyDaysCost = 50;
  var cost = 0;

  if (numberOfDays <= 10) {
    // ten or less then ten days hotel cost
    cost = tenDaysCost * numberOfDays;
  } else if (numberOfDays <= 20) {
    // first ten days cost
    var firstTenDays = tenDaysCost * 10;

    // remaining days after ten days
    var remainDays = numberOfDays - 10;

    // more then ten but twenty or less then twenty day hotel cost
    var totalCostAfterTenDays = afterTenDaysCost * remainDays;

    // twenty or less then twenty days hotel cost
    cost = firstTenDays + totalCostAfterTenDays;
  } else {
    // first ten days hotel cost
    var firstTenDays = tenDaysCost * 10;

    // After ten days Twenty days hotel cost
    var afterTendayCost = afterTenDaysCost * 10;

    // remaining days after twenty days
    var remainAftertwentyDays = numberOfDays - 20;

    // twenty day hotel cost
    var totalCostTwentyDays = afterTwentyDaysCost * remainAftertwentyDays;

    // after twenty days total hotel cost
    cost = firstTenDays + afterTendayCost + totalCostTwentyDays;
  }

  // Error input handeling
  if (numberOfDays > 0 && typeof numberOfDays == "number") {
    return cost;
  } else {
    return "Invalid Data";
  }
}

// console.log(hotelCost(1));

/*
// 4. Mega Friend
*/
var arrFriends = ["jamil", "nur", "shofiq"];

function megaFriend(nameList) {
  var largestName = nameList[0];

  for (var i = 0; i < nameList.length; i++) {
    var element = nameList[i];

    if (element.length > largestName.length) {
      largestName = element;
    }
  }

  // Error input handeling
  if (nameList.length == 0 || nameList == "") {
    return "No data found..";
  } else {
    return largestName;
  }
}

// console.log(megaFriend(arrFriends));
