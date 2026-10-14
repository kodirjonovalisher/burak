console.log("Signup frontend javascript file");



$(function () { });

function validateSignupForm() {
    const memberNick = $(".member-nick").val();
    const memberPHone = $(".member-phone").val();
    const memberPassword = $(".member-password").val();
    const confirmPasswrod = $(".confirm-password").val();

    if (
        memberNick === "" ||
        memberPHone === "" ||
        memberPassword === "" ||
        confirmPasswrod === ""
    ) {
        alert("Please insert all required inputs!");
        return false;
    }

    if (memberPassword !== confirmPasswrod) {
        alert("Password differs, please check!");
        return false;
    }


}
