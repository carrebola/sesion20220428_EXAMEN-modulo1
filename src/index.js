const fichas = ()=>{
    var html=''
    bd.forEach(element => {
        var titulo = element.titulo;
        var imagen = element.imagen;
        var escritor = element.escritor;
        html+=`
        <div class="col-12 col-sm-4 col-xl-2 mb-4">
            <div class="card text-center shadow h-100">
                <img
                    class="card-img-top"
                    src="${imagen}"
                    alt=""
                />
                <div class="card-body">
                    <h4 class="card-title">${titulo}</h4>
                    <p class="card-text">${escritor}</p>
                </div>
            </div>
		</div>
        `
    });
    return html
}
