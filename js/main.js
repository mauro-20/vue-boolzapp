// Boolzapp 

// Milestone 1
// ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente(verdi) e;
// dall’interlocutore(bianco) assegnando due classi CSS diverse
// ● Visualizzazione dinamica della lista contatti: tramite la direttiva v -for, visualizzare
// nome e immagine di ogni contatto

// Milestone 2
// ● Visualizzazione dinamica dei messaggi: tramite la direttiva v -for, visualizzare tutti i
// messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ● Click sul contatto mostra la conversazione del contatto cliccato

// Milestone 3
// ● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
// “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// ● Risposta dell'interlocutore: ad ogni inserimento di un messaggio, l ’utente riceverà;
// un “ok” come risposta, che apparirà dopo 1 secondo.

//   Milestone 4
// ● Ricerca utente: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
// contatti il cui nome contiene le lettere inserite(es.Marco, Matteo Martina -> Scrivo
// “mar” rimangono solo Marco e Martina);

// Milestone bonus:
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

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
        avatar: '_6',
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
    ],
    activeContact: 0,
    userMessage: '',
    search: ''
  },
  methods: {
    setActive: function (index) {
      this.activeContact = index;
    },
    isActive: function (index) {
      if (index == this.activeContact) {
        return true;
      }
    },
    getDate: function () {
      const date = new dayjs().format('DD/MM/YYYY H:mm:ss');
      return date;
    },
    replyOk: function () {
      this.contacts[this.activeContact].messages.push(
        {
          date: this.getDate(),
          message: 'ok',
          status: 'received'
        }
      );
    },
    sendMessage: function () {
      this.contacts[this.activeContact].messages.push(
        {
          date: this.getDate(),
          message: this.userMessage,
          status: 'sent'
        }
      );
      this.userMessage = '';
      setTimeout(this.replyOk, 1000);
    },
    filterContacts: function () {
      this.contacts.forEach(contact => {
        const name = contact.name.toLowerCase();
        if (!name.includes(this.search)) {
          contact.visible = false;
        } else {
          contact.visible = true;
        }
      });
    },
    renderInfoMsgBox: function () {

    }
  }
});