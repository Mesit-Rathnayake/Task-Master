function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation pattern
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/; // Password validation pattern

    if (values.username === "") {
        error.username = "Username cannot be empty";
    } else {
        error.username = "";
    }

    if (values.email === "") {
        error.email = "Email cannot be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email format is invalid";
    } else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Password cannot be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password must contain at least 8 characters, including uppercase, lowercase, and numbers";
    } else {
        error.password = "";
    }

    return error;
}

export default Validation;
