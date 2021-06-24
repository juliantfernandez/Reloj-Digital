const mostrarReloj = () => {
    let fecha = new Date ();
    let hora =  formatoTime(fecha.getHours());
    let minutes =    formatoTime(fecha.getMinutes());
    let seconds =    formatoTime(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}:${minutes}:${seconds}`;
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Div'];

    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;
}



const formatoTime = (time) =>{
    if(time < 10)
    time = '0' + time;
    return time;
}

setInterval(mostrarReloj, 1000);