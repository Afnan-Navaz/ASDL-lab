function validate(){
    alert('Are you sure you want to proceed ?');
    var uname = document.getElementById('username');
    var pword = document.getElementById('password');
    if(uname.value.trim()==""){
        alert('Username cannot be blank');
        document.getElementById('unamevalid').style.visibility='visible';
        return false;
    }else if(pword.value.trim()==""){
        alert('Password cannot be blank');
        document.getElementById('pwordvalid').style.visibility='visible';
        return false;
    }else{
        return true;
    }
}