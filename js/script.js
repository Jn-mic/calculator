let dayOfWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleName= ["Kwasi","Kwadwo","Kwebena","Kwaku","Yau","Yau","Kofi","Kwame"];
let femaleName=["Akosua","Adwa","Abena", "Akua","Yaa" ,"Afua","Ama"];

let cc,yy,dd,d,dayvalue;

function validate() {
let gender= document.getElementsByName("gender");
if (document.myForm.year.value=="" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100|| document.myForm.year.value<=1900) {
    alert("Kindly provide a valid year of birth!");
    document.myForm.year.focus()
    return false;
} else if (document.myForm.year.value =="" || isNaN (document.myForm.month.value)|| document.myForm.month.value.lenghth !=2||document.myForm.value.month >12 || document.myForm.value.month <0 ) {
    alert("Kindly provide a valid month of birth!");
}
    document.myForm.month.focus();

}
