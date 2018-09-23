// function to evaluate minimum number of coin.

function changesMadeForMinimumCoin (total) {
var mincoin = 0;
  var cashchange = {},
      p = 0,
      coins = changesMadeForMinimumCoin.COINS,
      coin;
  
  while (total && (coin = coins[p++])) {
    if (total >= coin) {
      cashchange[coin] = ~~(total / coin);
      total = total % coin;
	  mincoin = mincoin + cashchange[coin];
    }
  }
  console.log("The minimun number of coins to get required total is:", mincoin);
  return cashchange;
}

changesMadeForMinimumCoin.COINS = [5, 3, 1];

console.log("The minimun number of coins to get required total with denomination of:",changesMadeForMinimumCoin (27));
console.log("The minimun number of coins to get required total with denomination of:",changesMadeForMinimumCoin (32));
console.log("The minimun number of coins to get required total with denomination of:",changesMadeForMinimumCoin (13));
console.log("The minimun number of coins to get required total with denomination of:",changesMadeForMinimumCoin (35));