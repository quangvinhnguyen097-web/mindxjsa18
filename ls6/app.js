// function tinhDientich(width, height) {
//     return width * height
// }
// //Giá trị trả về từ hàm , có thể đượ gán vào biến hoặc sử dụng trong các biểu thức khã 
// let area = tinhDientich(5, 10)
// console.log("Diện tích của hình chữ nhật:", area)

// //hàm ko có gtri trả về( ko có retunrn)

// const sayhello = function() {
//      console.log("Hello all ")
// }
// sayhello()

// Hàm mũi tên
// const sayhello = () => {
//     console.log(" hello all")
// }
// sayhello()

//Lắng nghe sự kiện gửi frrom với addlisstener
//preventDefault :ngăn trình duyệt tải lại trang khi gửi frrom
// document.getElementById("userFrom").addEventListener("submit", function(event){
//     event.preventDefault()
//lấy dữ liệu từ from
// const name = document.getElementById("username").value
// const age = document.getElementById("age").value

// console.log("Tên : name")
// console.log("Tuổi : age")

//Hiển thị dữ liệu lên trên trang web
document
.getElementById("userForm")
.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    // Lưu trữ dữ liệu vào localstorage
    localStorage.setItem("username","Nguyễn A") 
    localStorage.setItem("age","18")  
    // Lấy dữ liệu từ localstorage
    let username =JSON.parse localStorage.getItem("username")
    console.log(username)
    //Xoad dữ liệu từ lcstr
    //xóa 1 mục cụ thể 
    localStorage.removeItem("username")
    //xóa hết 
    localStorage.stringfyItem("Username")
    document.body.innerHTML += `<p>Chào ${name}, bạn ${age} tuổi </p>`
}) ;