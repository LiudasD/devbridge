function validate() {
    let state = true;
    if (document.message.name.value == ""){
        alert("please enter name");
        state = false;
    }
    else if (document.message.surname.value == ""){
        alert("please enter last name");
        state = false;
    }
    else if (document.message.message.value == ""){
        alert("cannot send empty message");
        state = false;
    }
    return state;
}