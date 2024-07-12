function activeHome(){
    document.getElementById("homeOption").classList.add("active");
    document.getElementById("customerOption").classList.remove("active");
    document.getElementById("departmentOption").classList.remove("active");
    document.getElementById("mediaOption").classList.remove("active");
    document.getElementById("myAccounntOption").classList.remove("active");

}
function activeCustomer(){
    document.getElementById("homeOption").classList.remove("active");
    document.getElementById("customerOption").classList.add("active");
    document.getElementById("departmentOption").classList.remove("active");
    document.getElementById("mediaOption").classList.remove("active");
    document.getElementById("myAccounntOption").classList.remove("active");
    
}
function activeDepartment(){
    document.getElementById("homeOption").classList.remove("active");
    document.getElementById("customerOption").classList.remove("active");
    document.getElementById("departmentOption").classList.add("active");
    document.getElementById("mediaOption").classList.remove("active");
    document.getElementById("myAccounntOption").classList.remove("active");
    
}
function activeMedia(){
    document.getElementById("homeOption").classList.remove("active");
    document.getElementById("customerOption").classList.remove("active");
    document.getElementById("departmentOption").classList.remove("active");
    document.getElementById("mediaOption").classList.add("active");
    document.getElementById("myAccounntOption").classList.remove("active");
    
}
function activeMyAccount(){
    document.getElementById("homeOption").classList.remove("active");
    document.getElementById("customerOption").classList.remove("active");
    document.getElementById("departmentOption").classList.remove("active");
    document.getElementById("mediaOption").classList.remove("active");
    document.getElementById("myAccounntOption").classList.add("active");
    
}
function saveData(){
    // window.alert("Data Updated.");
    document.getElementById("responseLabel").textContent=`Data is Updated`;
}
function editField1(){
    document.getElementById("userName").removeAttribute('readonly');
    document.getElementById("userEmail").setAttribute('readonly',true);
    document.getElementById("phnNumber").setAttribute('readonly',true);
    document.getElementById("dob").setAttribute('readonly',true);
}
function editField2(){
    document.getElementById("userEmail").removeAttribute('readonly');
    document.getElementById("userName").setAttribute('readonly',true);
    document.getElementById("phnNumber").setAttribute('readonly',true);
    document.getElementById("dob").setAttribute('readonly',true);
}
function editField3(){
    document.getElementById("phnNumber").removeAttribute('readonly');
    document.getElementById("userEmail").setAttribute('readonly',true);
    document.getElementById("userName").setAttribute('readonly',true);
    document.getElementById("dob").setAttribute('readonly',true);
}
function editField4(){
    document.getElementById("dob").removeAttribute('readonly');
    document.getElementById("phnNumber").setAttribute('readonly',true);
    document.getElementById("userEmail").setAttribute('readonly',true);
    document.getElementById("userName").setAttribute('readonly',true);
}