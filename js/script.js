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
    dd= perseInt(document.getElementById.("day").value);
}