
function generatePlan(){
const meals=[
"Monday: Pasta Night",
"Tuesday: Taco Night",
"Wednesday: Chicken & Veg",
"Thursday: Burger Night",
"Friday: Pizza Night",
"Saturday: Grill Night",
"Sunday: Family Roast"
];
let output="";
meals.forEach(m=>output+="<li>"+m+"</li>");
document.getElementById("planList").innerHTML=output;
}
