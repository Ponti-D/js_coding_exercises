export const sumDigits = (n) => {
  if (n === undefined) throw new Error("n is required");

  const digits = n.toString();
  let sumOfDigits = 0;
  for (let i = 0; i < digits.length; i++) {
    sumOfDigits = parseInt(digits.charAt(i)) + sumOfDigits;
  }
  return sumOfDigits;
};


export const createRange = (start, end, step=1) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");

    const range = [];
    let number = 0;
  
    for (let i = start; i<=end; i=i+step){
      range[number] = i;
      number++;
    }
     
    return range;
};


export const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  const foundUsers = [];
  users.forEach(user => {
   const  screenTime = user.screenTime;
     let totalTime = 0;
     screenTime.forEach(day => {
       if (day.date === date){
         totalTime = day.usage.twitter + day.usage.instagram + day.usage.facebook;
       }
       if (totalTime>100) foundUsers.push(user.username);
     })
  });
  return foundUsers;

};

export const hexToRGB = (hexStr) => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  
  const hexColorPairs = hexStr.substring(1).match(/.{1,2}/g);
  return hexColorPairs.map(hexPair => parseInt(hexPair,16));

};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],git 
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
  if (board === undefined) throw new Error("board is required");

};
