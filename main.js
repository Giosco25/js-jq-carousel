// quando l'utente clicca, si deve spostare la classe visible all'img successiva

// cliccare sulla classe right
$('.right').click(
    function() {
        // aggiungo l'intervallo della funzione setTimeout
        next_image();
    // recupero l'img che ha la classe visible in questo momento
}
);

$('.left').click(
    function() {
    // recupero l'img che ha la classe visible in questo momento
    var  img_recuperata = $('img.visible')
    // console.log(img_recuperata);
    // recupero il pallino con la classe active
    var pallino_recuperato = $('.circle i.active');
    // tolgo la classe visible all'img corrente
    img_recuperata.removeClass('visible');
    // al pallino recuperato gli rimuoviamo la classe active
    pallino_recuperato.removeClass('active')
    // recupero l'immagine successiva
    var img_precedente = img_recuperata.prev('img')
    console.log(img_precedente);
    // recupero il pallino precedente usando prev
    var pallino_precedente = pallino_recuperato.prev('i')
    // verifico che esista un img successiva
    if (img_precedente.length !=0){
    // c'è un img successiva
    // metto la classe acrive all'img successiva (img right)
        img_precedente.addClass('visible');
    // se la candizione è vera aggiungo la calsse active al   pallino precedente
        pallino_precedente.addClass('active');
    } else{
    // non c'è un img successiva => riparto dall'inizio
        $('img:last-child').addClass('visible');
    	// img_precedente = $('img:last-child');
    	// img_precedente.addClass('visible');
    // se non c'è un pallino precedente => riparto dall'ultimo
        $('.circle i:last-child').addClass('active')
        // pallino_precedente = $('.circle i:last-child');
        // pallino_precedente.addClass('active');
    }
}
);


// fate sì che il carousel funzioni con l'autoplay, ossia che automaticamente ogni 3 secondi cambi slide e venga visualizzata l'immagine successiva.

// Inserisco un intervallo che permette di cambiare slide ogni 3 secondi
//setInterval(next_image,3000);
function next_image(){
    var  img_recuperata = $('img.visible');
    // console.log(img_recuperata);
    // recupero il pallino con la classe active
    var pallino_recuperato = $('.circle i.active');
    // tolgo la classe visible all'img corrente
    img_recuperata.removeClass('visible');
    // al pallino recuperato gli rimuoviamo la classe active
    pallino_recuperato.removeClass('active')
    // recupero l'immagine successiva usando next
    var img_successiva = img_recuperata.next('img')
    console.log(img_successiva);
    // recupero il pallino successivo usando next
    var pallino_successivo = pallino_recuperato.next('i')
    // verifico che esista un img successiva
    if (img_successiva.length !=0){
    // c'è un img successiva
    // metto la classe acrive all'img successiva (img right)
        img_successiva.addClass('visible');
    // se la candizione è vera aggiungo la calsse active al    pallino successivo
        pallino_successivo.addClass('active')
    } else{
    // non c'è un img successiva => riparto dall'inizio
        $('img:first-child').addClass('visible');
        // img_successiva = $('img:first-child');
        // img_successiva.addClass('visible');
    // se non c'è un pallino successivo => riparto dal primo
        $('.circle i:first-child').addClass('active');
        // pallino_successivo = $('.circle i:first-child');
        // pallino_successivo.addClass('active');
    }
}
// Dopo la creazione del pulsante play, bisogna far si che cliccando si attivi il timing
var clock;
$('#play').click(
    function() {
    clock = setInterval(next_image,3000);
}
);
// Dopo la creazione del pulsante pause, bisogna far si che cliccando si disattivi il timing
$('#pause').click(
    function(){
    clearInterval(clock);
}
);
