function Validation(values){
    let error={}
    const username_pattern = /^[a-zA-Z0-9_.-]{3,}$/; 
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.username===""){
        error.username="Username can not be empty"
    }
    else if(!username_pattern.test(values.username)){
        error.username="username didn't match"
    }else{
        error.username=""
    }
    if(values.password===""){
        error.password="Password can not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password="password didn't match"
    }else{
        error.password=""
    }
    return error;
}

export default Validation; 