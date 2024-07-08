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

