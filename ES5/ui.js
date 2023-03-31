function UI(){

}

UI.prototype.addFilmToUI=function(newFilm){
    const filmList=document.getElementById("films");

    filmList.innerHTML += `
    <tr>
        <td><img src="${newFilm.url}" style="width:230px" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" class="btn btn-danger">Filmi Sil</a></td>
    </tr>`;
}


UI.prototype.clearInputs=function(){
    for(let i=0; i<arguments.length; i++)
    arguments[i].value="";
}    

UI.prototype.displayMessage=function(message,type){ 
    const div=document.createElement("div");      //alert divi oluşturuyoruz
    div.className='alert alert-${type}';
    div.textContent=message;

    const cardBody=document.querySelector(".card-body");
    cardBody.appendChild(div);


      //set timeout ile de bu divi 2 sn sonra sileceğiz.  2000 ms
      setTimeout(function(){
        div.remove();
      },2000);
}

UI.prototype.deleteFilmFromUI=function(element){
    element.remove();
}

UI.prototype.clearAllFilmsFromUI=function(){
    const filmList=document.getElementById("films");
    filmList.innerHTML="";
}

UI.prototype.loadAllFilms = function (films) {
    const filmList = document.getElementById("films");

    films.forEach(function (film) {

        filmList.innerHTML += `
            <tr>
            <td><img src="${film.url}" style="width:230px" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" class="btn btn-danger">Filmi Sil</a></td>
            </tr>`;
    });
}
