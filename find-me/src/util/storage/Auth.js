const userDataKey = "CurrentLoggedUser";

function setSession(email, token) {
    var data = {
        email: email,
        token: token
    };
    localStorage.setItem(userDataKey, JSON.stringify(data));
}

function clearSession() {
    localStorage.removeItem(userDataKey);
}

function getSession() {
    return localStorage.getItem(userDataKey);
}

export { setSession, clearSession, getSession };