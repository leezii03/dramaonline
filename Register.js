$(document).ready(function () {
  $("#signup-btn").click(function () {
    var username = $("input").eq(0).val();
    var password = $("input").eq(1).val();
    var conpassword = $("input").eq(2).val();

    // checking input field
    if (username == "" || password == "" || conpassword == "") {
      Swal.fire({
        position: "center-center",
        icon: "error",
        title: "Please Fill Data!",
        showConfirmButton: false,
        timer: 2000,
      });
    } else if (conpassword == password) {
      Swal.fire({
        position: "center-center",
        icon: "success",
        title: "Create Account Successfully!",
        showConfirmButton: false,
        timer: 2000,
      }).then(function () {
        window.location.href = "./HomeScreen.html";
      });
    } else {
      Swal.fire({
        position: "center-center",
        icon: "error",
        title: "Check Password Again!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  });
});

$(document).ready(function () {
  $("#signin-btn").click(function () {
    var username = $("#username-txt").val();
    var password = $("#password-txt").val();

    if (username === "Heng" && password === "123") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sign in Successfully",
        showConfirmButton: false,
        timer: 2000,
      }).then(function () {
        window.location.href = "./HomeScreen.html";
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Wrong Username or Password",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  });
});
