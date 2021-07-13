var count = 0 

function cc (card) {
  switch (card) {
    case 2:
      case 3:
      case 4:
      case 5:
      case 6:
          card = count ++
    break
    case 10:
      case 'J':
      case 'Q':
      case 'K':
      case 'A':
      card = count --
    }
  if (count > 0){
    return `${count} Bet`
  } else {
    return `${count} Hold` 
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

/* Count Change	Cards
+1      	2, 3, 4, 5, 6
0       	7, 8, 9
-1      	10, 'J', 'Q', 'K'

Cards Sequence 2, 3, 4, 5, 6 should return 5 Bet

Cards Sequence 7, 8, 9 should return the string 0 Hold

Cards Sequence 10, J, Q, K, A should return the string -5 Hold

Cards Sequence 3, 7, Q, 8, A should return the string -1 Hold

Cards Sequence 2, J, 9, 2, 7 should return the string 1 Bet

Cards Sequence 2, 2, 10 should return the string 1 Bet

Cards Sequence 3, 2, A, 10, K should return the string -1 Hold */