var currentUser = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : []
//Lấy ra ID tài khoản người dùng đang đăng nhập
currentUserID = currentUser[currentUser.length-1].id
var cart = localStorage.getItem("cart")
? JSON.parse(localStorage.getItem("cart"))
: []

function checkForCart(productID){
    alert(productID)
    if(currentUser.length < 1){
        alert("Bạn cần đăng nhập để thêm giỏ hàng!")
        return 0
    }
    if (currentUserID > 0){ // Kiểm tra ID người dùng, giá trị có đúng không
        addToCart(currentUserID,productID)
    } else {
        alert("Tài khoản lỗi! Bạn cần đăng nhập lại để thêm giỏ hàng!")
    }
}

function addToCart(userID,productID){
    duplicate = 0
    if (cart.length < 1){
        cart.push({
            userID: userID,
            id: productID,
            quantity: 1
        })
    } else {
        for (let item of cart){
            if (productID === item.id && userID === item.userID){
                duplicate = 1
                break
            }
        }
        if (duplicate) {
            for (let item of cart){
                if (productID === item.id && userID === item.userID){
                    item.quantity += 1
                    alert("Sản phẩm đã có từ trước, đã tăng số lượng!")
                    break
                }
            }
        } else {
            cart.push({
                userID: userID,
                id: productID,
                quantity: 1
            })
            alert("Đã thêm giỏ hàng!")
        }
    }
    alert("id: " +productID)
    localStorage.setItem("cart",JSON.stringify(cart))
}
function cartShow(){
    for (let product of products){
        for (let item of cart){
            if (item.id == product.id && item.userID == currentUserID){
                let cart_item = `
                    <tr>
                        <td>${item.userID}</td>
                        <td>${item.id}</td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td><button onclick="update_cart(${item.userID},${item.id},-1)">-</button> ${item.quantity} <button onclick="update_cart(${item.userID},${item.id},1)">+</button></td>
                        <td><button onclick="delete_cart(${item.userID},${item.id})">Xoá</button></td>
                    </tr>
                `
                document.getElementById("tablebody").innerHTML += cart_item
            }
        }
    }
}
cartShow()
