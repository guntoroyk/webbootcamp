//ubah judul menjadi Basic Form
var judul = document.querySelector('#judul')
judul.innerText = "Basic Form";



function getFullName() {
    //semua yang ada di dalam function akan dijalankan saat klik button
    
    //kalkulasi fullname, tampilan pada saat klik button
    var firstName = document.querySelector("#firstNameInput").value;
    var lastName = document.querySelector("#lastNameInput").value;
    var fullName = firstName + " " + lastName;
    
    var result = document.querySelector("#result");
    
    //fullname max 20 karakter, kalau ngga ubah namanya jadi TOO LONG berwarna merah
    
    var fullNameLength = fullName.length

    if(fullNameLength < 20){
        //hapus merah
        result.classList.remove('text-danger')
        result.innerText = fullname
    } else{
        //jadi merah
        result.classList.add('text-danger')
        result.innerText = 'TOO LONG'
    }
}


