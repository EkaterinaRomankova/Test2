let turkey = 'turkey';
let salmon = 'salmon';
let pepperoni = 'epperoni';
let topping
let sandwich

let turkeySand = 'sandwich with turkey';
let salmonSand = 'sandwich with salmon';
let pepperoniSand = 'sandwich with pepperoni';

let ask = prompt('What do you like to order?');
while(ask != 'yes'){
    ask = prompt('What do you like to order?');
}
let askTopping = prompt('Choose from bellow topping ; </br> salmon - 1; turkey - 2; pepperoni - 3');
if(askTopping == 1){
    topping = salmon;
    sandwich = salmonSand
}else if(askTopping == 2) {
    topping = turkey;
    sandwich = turkeySand;
}else{
    topping = pepperoni;
    sandwich = pepperoniSand;

}