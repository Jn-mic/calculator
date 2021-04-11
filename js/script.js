let dayOfWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleName= ["Kwasi","Kwadwo","Kwebena","Kwaku","Yau","Yau","Kofi","Kwame"];
let femaleName=["Akosua","Adwa","Abena", "Akua","Yaa" ,"Afua","Ama"];

let cc,yy,dd,d,dayvalue;

function validate() {
let gender= document.getElementsByName("gender");
if (document.myForm.year.value=="" || document.myForm.year.value.length !=4 || document.myForm.year.value >2000|| document.myForm.year.value<=1900) {
    alert("Kindly provide a valid year of birth!");
    document.myForm.year.focus()
    return false;
} else if (document.myForm.year.value =="" || isNaN (document.myForm.month.value)|| document.myForm.month.value.lenghth !=2||document.myForm.value.month >12 || document.myForm.value.month <0 ) {
    alert("Kindly provide a valid month of birth!");

    document.myForm.month.focus();
    return false;
};

 else if (gender [0].checked==false && gender[1].checked==false){
    alert ("Select either male or Female!");
    return false;
} else {
    return true;
}
function getGender() {
    let gender = document.getElementsByTagName("gender");
    if (gender[0].checked == true) {
        let gender = "male";
    }
    else if (gender[1].checked == true) {
        let gender = "female";
    }
    else  {
        return false;
    }
}

function calculateDayValue () {
    year = document.getElementById("year").value;
    cc= perseInt(year.subtring(0,2));
    yy= perseInt(year.substring(2,4));
    mm =perseInt(document.getElementById.("month").value);
    dd= perseInt(document.getElementById.("date").value);
    d=  (( (cc/4)
    -2*cc-1) +((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7;
    console.log(d);
    return (math.floor(d));
}
switch (gender) {
    case "male":
    if (dayValue==1) {
        alert ("You were born on " + dayName[0] + "and your akan name is "+maleName[0] +"is that ok?");
    }
    else if (dayvalue==2) {
        alert ("Your were born on " +dayName[1] +"adn your akan name is " +maleName[1] +"cool");
    }
    else if (dayvalue==3) {
        alert ("Your were born on " +dayName[2] +"adn your akan name is " +maleName[2] +"cool");
    }
    else if (dayvalue==4) {
        alert ("Your were born on " +dayName[3] +"adn your akan name is " +maleName[3] +"cool");
    }
    else if (dayvalue==5) {
        alert ("Your were born on " +dayName[4] +"adn your akan name is " +maleName[4] +"cool");
    }
    else if (dayvalue==6) {
        alert ("Your were born on " +dayName[5] +"adn your akan name is " +maleName[5] +"cool");
    }
    else if (dayvalue==-0) {
        alert ("Your were born on " +dayName[6] +"adn your akan name is " +maleName[6] +"cool");
    }
    break
    case "female":
    if (dayValue==1) {
        alert ("You were born on " + dayName[0] + "and your akan name is "+femaleName[0] +"is that ok?");
    }
    else if (dayvalue==2) {
        alert ("Your were born on " +dayName[1] +"adn your akan name is " +femaleName[1] +"cool");
    }
    else if (dayvalue==3) {
        alert ("Your were born on " +dayName[2] +"adn your akan name is " +femaleName[2] +"cool");
    }
    else if (dayvalue==4) {
        alert ("Your were born on " +dayName[3] +"adn your akan name is " +femaleName[3] +"cool");
    }
    else if (dayvalue==5) {
        alert ("Your were born on " +dayName[4] +"adn your akan name is " +femaleName[4] +"cool");
    }
    else if (dayvalue==6) {
        alert ("Your were born on " +dayName[5] +"adn your akan name is " +femaleName[5] +"cool");
    }
    else if (dayvalue==-0) {
        alert ("Your were born on " +dayName[6] +"adn your akan name is " +femaleName[6] +"cool");
    }
    break
    default:
}
function findName() {
    dayValue= calculateDayValue();
    getGender();
}
