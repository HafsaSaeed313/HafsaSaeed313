let a = 3;
let b = 5;
let sum = a + b
let sub = a - b
let mul = a * b
let div = a / b
let mod = a % b
document.write("=> Sum of 3 and 5 is ", sum,"<br>")
document.write(" => Subtract of 3 and 5 is ", sub,"<br>") 
document.write(" => Multiply of 3 and 5 is ", mul,"<br>")
document.write(" => Divide of 3 and 5 is ", div,"<br>")
document.write(" => Module of 3 and 5 is ", mod,"<br>")

// Question No 3

let X;
document.write(" => Value After Variable declaration is: ", X ,"<br>")
let x = 5;
document.write(" => Initial value: ",x,"<br>")
let y = x+1;
document.write(" => Value after increment is: ",y,"<br>")
let z = y+7;
document.write(" => Value after addition is: ", z,"<br>")
let dec = z-1;
document.write(" => Value after decrement is: ", dec,"<br>")
let rem = dec%3;
document.write(" => The reminder is: ", rem,"<br>")

// Question No 4

let Ticket = 600;
let buy = 5;
let Total = Ticket * buy;
document.write(" => Total Cost to buy 5 tickets to a movie is ", Total,"<br>","<br>")

// Question No 5
for(let i=1; i<=10; i++){
    document.write(" 4","*",i,"=",4*i,"<br>")
}

// Question No 6
let celsius = 35;
let fehrenheit = (celsius * 9/5)+32
document.write(celsius, " c", " is " , fehrenheit, " F","<br>","<br>")

// Question No 7

let item1 = 650;
let item2 = 100;
let order1 = 3;
let order2 = 7;
let shipping = 100;
document.write("price of item 1 is ", item1,"<br>","Quantity of item 1 is ", order1,"<br>","price of item 1 is ", item2,"<br>","Quantity of item 1 is ", order2,"<br>","Shipping Charges ",shipping,"<br>")
document.write("Total Cost of Your Order ",item1*order1+item2*order2+shipping,"<br>" ,"<br>" ,"<br>")

//Question No 8

let Tmarks = 1150;
let omarks = 870;
document.write("Total Marks ", Tmarks,"<br>","Obtain Marks ", omarks ,"<br>","Percentage ", Tmarks/omarks*100,"<br>","<br>") 

//Question No 11

let Cyear = 2023;
let Byear = 1997;
document.write("Current Year: ",Cyear, "<br>", "Birth Year: ", Byear,"<br>","Age ",Cyear-Byear,"<br>","<br>")

//Question No 12

let radius = 32;
let pi = 3.142;

let circumference = 2 * pi * radius;
let areaofCircle = pi * radius * radius;

document.write("The circumference is NN ",circumference,"<br>")
document.write("The area is NN ",areaofCircle,"<br>")

//Question No 13
 
let favSnack = " Wavy";
let MyAge = 25;
let max = 38;
let amount = 10000;
let eat = 150;

document.write("Favourite Snack ", favSnack,"<br>")
document.write("Current Age ", MyAge,"<br>")
document.write("Estimated Maximum ", max,"<br>")
document.write("Amount of snack per Day ", amount,"<br>")
document.write("You will need ", eat , favSnack," to last you until the ripe old age of ",max,"<br>","<br>","<br>")

//Question No 9
let Dollar = 104;
let Riyal = 28;
let Calculate = Dollar*10+Riyal*25 
document.write("Total Currency in PKR: ",Calculate)