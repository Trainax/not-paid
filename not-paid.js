(function() {

  /* Cambia queste variabili a tuo piacimento */

  var due_date = new Date('2030-12-31'); //Data della scadenza per effettuare il pagamento. Formato YYYY-MM-DD
  var days_deadline = 30; //Giorni di tolleranza dopo la scandenza. Non impostare un valore negativo qui, altrimenti il sito verrà visualizzato anche dopo il periodo di tolleranza!

  /* Non cambiare da qui in poi */

  const monthNames = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]

  var current_date = new Date();
  var utc1 = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate());
  var utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
  var days_late = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));

  if (days_late > 0) {
    var days_until_darkness = days_deadline - days_late;
    var opacity = (days_until_darkness * 100 / days_deadline) / 100;
    if (opacity < 0) {
      opacity = 0;
    } else if (opacity > 1) {
      opacity = 1;
    }

    document.getElementsByTagName("BODY")[0].style.opacity = opacity;

    if (days_until_darkness > 1) {
      alert("Messaggio per il proprietario di questo sito web. Il termine per effettuare il pagamento del compenso per la realizzazione di questo sito web, il quale era fissato per il " + due_date.getDate() + " " + monthNames[due_date.getMonth()] + " " + due_date.getFullYear() + ", è scaduto. Questo sito web diventerà sempre più opaco e tra poco non sarà più possibile vederlo. Si hanno ancora " + days_until_darkness + " giorni di tempo per poter effettuare il pagamento prima che questo sito web diventi totalmente illeggibile");
    } else if (days_until_darkness == 1) {
      alert("Messaggio per il proprietario di questo sito web. Il termine per effettuare il pagamento del compenso per la realizzazione di questo sito web, il quale era fissato per il " + due_date.getDate() + " " + monthNames[due_date.getMonth()] + " " + due_date.getFullYear() + ", è scaduto. Questo sito web diventerà sempre più opaco e tra un giorno non sarà più possibile vederlo. Si ha ancora un giorno di tempo per poter effettuare il pagamento prima che questo sito web diventi totalmente illeggibile");
    } else {
      alert("Messaggio per il proprietario di questo sito web. Tempo scaduto! Il pagamento per la realizzazione di questo sito web non è stato effettuato nei tempi previsti ed ora il sito web non è più visibile. La scadenza era fissata per il " + due_date.getDate() + " " + monthNames[due_date.getMonth()] + " " + due_date.getFullYear() + " ed erano stati dati " + days_deadline + " giorni dopo tale data per poter saldare il pagamento");
    }

  }

})()
