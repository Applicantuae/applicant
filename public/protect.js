function logout() {
    localStorage.clear()
    window.location.href = "../index.html"
}

if (!localStorage.getItem("User")) { //
    window.location.href = "/login"
} 