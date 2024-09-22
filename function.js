let log_name = document.getElementById("log_name")
let log_psw = document.getElementById("log_psw")
let reg_name = document.getElementById("reg_name")
let reg_email = document.getElementById("reg_email")
let reg_psw = document.getElementById("reg_psw")
let reg_re_psw = document.getElementById("reg_re_psw")
let switch_btn = document.getElementById("switch_btn")
let switch_label = document.getElementById("switch_label")
let h2_login = document.getElementById("h2_login")
let form_log = document.getElementById("form_login")
let form_reg = document.getElementById("form_register")
function change_form() {
    if (h2_login.innerHTML == "Đăng nhập") {
        form_log.style.display = "none"
        form_reg.style.display = "block"
        h2_login.innerHTML = "Đăng ký"
        switch_label.innerHTML = "Đã có tài khoản?"
        switch_btn.innerHTML = "Đăng nhập"
    } else {
        form_log.style.display = "block"
        form_reg.style.display = "none"
        h2_login.innerHTML = "Đăng nhập"
        switch_label.innerHTML = "Chưa có tài khoản?"
        switch_btn.innerHTML = "Đăng ký"
    }
}

function register() {
    if (reg_name.value === "" || reg_psw.value === "" || reg_re_psw.value === "" || reg_email.value === "") {
        alert("Bạn cần điền đầy đủ các trường!")
        return 0
    }
    if (reg_psw.value < 6) {
        alert("Độ dài mật khẩu tối thiểu từ 6 kí tự!")
        return 0
    }
    if (reg_psw.value != reg_re_psw.value) {
        alert("Bạn cần nhập lại đúng mật khẩu!")
        return 0
    }
    let userList = localStorage.getItem("userList")
        ? JSON.parse(localStorage.getItem("userList"))
        : []
    error_check = 0
    if (userList.length == 0) {
        userList.push({
            id: 1,
            name: reg_name.value,
            psw: reg_psw.value
        })
    } else {
        for (i of userList) {
            if (reg_name.value === i.name) {
                error_check = 1
                break
            }
        }
        if (error_check == 1) {
            alert("Tên tài khoản này đã có người dùng!")
            return 0
        }
        userList.push({
            id: userList[userList.length - 1].id + 1,
            name: reg_name.value,
            psw: reg_psw.value
        })
    }
    localStorage.setItem("userList", JSON.stringify(userList))
    alert("Đăng ký thành công!")

}
function login() {
    existAcc = 0
    userID = null
    if (log_name.value === "" || log_psw.value === "") {
        alert("Bạn cần điền đầy đủ các trường!")
        return 0
    }
    let userList = localStorage.getItem("userList")
        ? JSON.parse(localStorage.getItem("userList"))
        : []
    if (userList.length <1){
        alert("Sai thông tin đăng nhập!")
        return 0
    }
    for (acc of userList){
        if (log_name.value === acc.name && log_psw.value === acc.psw){
            existAcc = 1
            userID = acc.id
            break
        }
    }
    if (existAcc) {
        alert("Đăng nhập thành công!")
        let currentUser = [{
            id: userID,
            name: log_name.value
        }]
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        window.location="b6.html"
        check_currentUser()
    } else {
        alert("Sai thông tin đăng nhập")
    }
}
function check_currentUser() {
    let currentUser = localStorage.getItem("currentUser")
        ? JSON.parse(localStorage.getItem("currentUser"))
        : []
    if (currentUser.length > 0){
        let user = document.getElementById("users")
        user.innerHTML = " " + currentUser[currentUser.length-1].name
        let logout = document.getElementById("btnLogout")
        logout.innerHTML = "Đăng xuất"
        document.getElementById("linkLogin").href = "#" // Sau này có thể xây dựng chức năng thông tin tài khoản, đổi mk...
    }
}
check_currentUser()
function logout() {
    localStorage.removeItem("currentUser")
    document.getElementById("btnLogout").innerHTML = ""
    location.reload()
}