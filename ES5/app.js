const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const urlElement=document.querySelector("#url");
const directorElement=document.getElementById("director");
const cardBody=document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");


//UI objectten instance oluşturdum
const ui=new UI();

//Storage objectten instance oluşturdum
const storage=new Storage();

eventListener();

function eventListener(){
    form.addEventListener("submit",addFilm);
    cardBody.addEventListener("click",deleteFilm);
}
function addFilm(e){
    e.preventDefault();     //postback i engellemek için prevent default dedim
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;

    if(title===""|| director===""|| url===""){
    ui.displayMessage("Tüm alanları doldurduğunuzdan emin olun", "danger");
    }else{
        const newFilm=new Film(title,director,url); //yeni film oluştur
        ui.addFilmToUI(newFilm); //yeni filmi UI a ekle
        storage.addFilmToStorage(newFilm); //filmi storage e ekle
        ui.displayMessage("Film ekleme başarılı","success");
    }

    ui.clearInputs();  // Inputu temizlemek için
    
}

function deleteFilm(e){
e.preventDefault();
if(e.target.className==="btn btn-danger")
console.log("sil butonu döndü")
}