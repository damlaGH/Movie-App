function Storage(){

}
Storage.prototype.addFilmToStorage=function(newFilm){
    let films=this.getFilmsFromStorage();  //storageden tüm filmleri films adlı diziye ekledik
    films.push(newFilm); //diziye yeni bir film ekle
    localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.getFilmsFromStorage=function(){
    let films;
    if(localStorage.getItem("films")===null){
        films=[];
    }
    else{
        films=JSON.parse(localStorage.getItem("films"))
    }
    return films;
}

Storage.prototype.deleteFilmFromStorage=function(filmTitle){
    let films=this.getFilmsFromStorage();
    films.forEach(function(film,index){
        if(film.title===filmTitle){
            films.splice(index,1); //bize verilen filmin index in den başlayıp 1 elemanı sil demiş olduk.
        }
    });

    localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.clearAllFilmsFromStorage=function(){
    localStorage.removeItem("films");
}