function Validation(values) {
    let error = {};
    const username_pattern = /^[a-zA-Z0-9_.-]{3,}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.username === "") {
        error.username = "Username cannot be empty.";
    } else if (!username_pattern.test(values.username)) {
        error.username = "Invalid username format.";
    }

    if (values.password === "") {
        error.password = "Password cannot be empty.";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Invalid password format.";
    }

    return error;
}

export default Validation;
