//Logical operators perform logical operations using AND , OR , NOT . Let start learning (:
/*
AND --> the symbol is && Return TRUE if both the operands or else retun false.

OR --> Is denoted by || Return TRUE if either one operands is true or Evaluates to FALSE if both the operands are false.

NOT --> Is denoted by ! Return FALSE if the result is true and viceversa. 
*/

//AND logical operator 

const done = 500;
const work =600;
console.log(done < work && work > done ); //Here both return TRUE so output is true.

const rose =900;
const flower =901;
console.log(rose < flower && flower < rose); //Here both condition are not true so it return has false.

//OR Logical operator 

const tiger =1001;
const brid =999;
console.log(tiger > brid || brid < tiger); // Here both conditions are TRUR so result is true.

const tata =[1,2,3,4,5];
const airindia =[1,2,3,4,5,6,7];
console.log(tata < airindia || tata > airindia); //Here one true and other condition is false so result is false.

const audi =new Set(['a','b','c']);
const bmw =new Set([1,2,3,4,5,6]);
console.log(audi > bmw || bmw < audi); // Here both conditions are false so the result is false.

//NOT Logical operator

const redmi =true ; 
const vivo = false;
console.log(!redmi);    //Evaluates to true if the operand is false and vice-versa.
console.log(!vivo);

//Are you good to go next topic :) Thank you 