// Boolzapp 

// Milestone 1
// ● Replica della grafica con l a possibilità di avere messaggi scritti dall’utente(verdi) e;
// dall’interlocutore(bianco) assegnando due classi CSS diverse
// ● Visualizzazione dinamica della l ista contatti: t ramite l a direttiva v -for, visualizzare
// nome e i mmagine di ogni contatto

// Milestone 2
// ● Visualizzazione dinamica dei messaggi: t ramite l a direttiva v -for, visualizzare t utti i
// messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ● Click sul contatto mostra l a conversazione del contatto cliccato

// Milestone 3
// ● Aggiunta di un messaggio: l ’utente scrive un t esto nella parte bassa e digitando
// “enter” i l t esto viene aggiunto al t hread sopra, come messaggio verde
// ● Risposta dell'interlocutore: ad ogni i nserimento di un messaggio, l ’utente riceverà;
// un “ok” come risposta, che apparirà dopo 1 secondo.

//   Milestone 4
// ● Ricerca utente: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
// contatti i l cui nome contiene l e l ettere i nserite(es.Marco, Matteo Martina -> Scrivo
// “mar” rimangono solo Marco e Martina);

const app = new Vue({
  el: '#root',
  data: {
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [{
          date: '20/03/2020 16:30:00',
          message: 'Ciao come stai?',
          status: 'sent'
        },
        {
          date: '20/03/2020 16:30:55',
          message: 'Bene grazie! Stasera ci vediamo?',
          status: 'received'
        },
        {
          date: '20/03/2020 16:35:00',
          message: 'Mi piacerebbe ma devo andare a fare la spesa.',
          status: 'received'
        }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [{
          date: '28/03/2020 10:10:40',
          message: 'La Marianna va in campagna',
          status: 'received'
        },
        {
          date: '28/03/2020 10:20:10',
          message: 'Sicuro di non aver sbagliato chat?',
          status: 'sent'
        },
        {
          date: '28/03/2020 16:15:22',
          message: 'Ah scusa!',
          status: 'received'
        }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [{
          date: '10/01/2020 15:30:55',
          message: 'Lo sai che ha aperto una nuova pizzeria?',
          status: 'sent'
        },
        {
          date: '10/01/2020 15:50:00',
          message: 'Si, ma preferirei andare al cinema',
          status: 'received'
        }
        ],
      },
    ]
  },
  methods: {

  }
});