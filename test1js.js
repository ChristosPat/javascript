let mathGrade =13;
let historyGrade = 7;
let readingGrade =5;
let absences=15;

let average=(mathGrade+historyGrade+readingGrade)/3;

console.log("Your average is:");
console.log(average);

if(absences<=50){
    if (average>=18){
        console.log("Excelent!!!");
    }else if (average>=14){
        console.log("Good!");
    }else if (average>=10){
        console.log("Base.");
    }else{
        console.log("You Failed...");
    }
}else{
    console.log("Failed, too many absences!!!!" )
}