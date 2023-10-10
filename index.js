const input=document.getElementById("input-data")
const image=document.getElementById("QR-img")
function showQR(){
    if(input.value===""){
        //alert("please write something")
        input.classList.add("error")
        setTimeout(()=>{
            input.classList.remove("error")
        },2000)
    }
    else{
        image.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value
    }


}