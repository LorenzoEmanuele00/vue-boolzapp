const{createApp} = Vue;
createApp({
    data() {
        return {
            // Start Contacts Array
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    time: '10/01/2020, 16:15',
                    preview: 'Tutto fatto!',
                    messages: [
                        {
                            date: '10/01/2020, 15:30',
                            hour: '15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020, 15:50',
                            hour: '15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020, 16:15',
                            hour: '16:15',
                            message: 'Tutto fatto!',
                            status: 'received'
                        } 
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    time: '20/03/2020, 16:30',
                    preview: 'Mi piacerebbe ma...',
                    messages: [
                        {
                            date: '20/03/2020, 16:30',
                            hour:'16:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020, 16:30',
                            hour:'16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020, 16:35',
                            hour:'16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        } 
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    time: '28/03/2020, 16:15',
                    preview: 'Ah scusa!',
                    messages: [
                        {
                            date: '28/03/2020, 10:10',
                            hour: '10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020, 10:20',
                            hour: '10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020, 16:15',
                            hour: '16:15',
                            message: 'Ah scusa!',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    time: '10/01/2020, 15:50', 
                    preview: 'Si, ma preferire...',
                    messages: [
                        {
                            date: '10/01/2020, 15:30',
                            hour: '15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        }, 
                        {
                            date: '10/01/2020, 15:50',
                            hour: '15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    time: '10/01/2020, 15:50',
                    preview: 'Va bene, stasera...',
                    messages: [
                        {
                            date: '10/01/2020, 15:30',
                            hour: '15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        }, 
                        {
                            date: '10/01/2020, 15:50',
                            hour: '15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    time: '10/01/2020, 15:50',
                    preview: 'Nessuna nuova, b...',
                    messages: [
                        {
                            date: '10/01/2020, 15:30',
                            hour: '15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        }, 
                        {
                            date: '10/01/2020, 15:50',
                            hour: '15:50',
                            message: 'Non ancora',
                            status: 'received'
                        }, {
                            date: '10/01/2020, 15:51',
                            hour: "15:51",
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }, 
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    time: '10/01/2020, 15:50',
                    preview: 'Grazie per averm...',
                    messages: [
                        {
                            date: '10/01/2020, 15:30',
                            hour: '15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        }, 
                        {
                            date: '10/01/2020, 15:50',
                            hour: '15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        } 
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    time: '10/01/2020, 15:51',
                    preview: 'OK!!',
                    messages: [
                        {
                            date: '10/01/2020, 15:30',
                            hour: '15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        }, 
                        {
                            date: '10/01/2020, 15:50',
                            hour: '15:50',
                            message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
                            status: 'sent'
                        }, 
                        {
                            date: '10/01/2020, 15:51',
                            hour: "15:51",
                            message: 'OK!!',
                            status: 'received'
                        },
                    ],
                },
            ],
            // End Contact Array
            activeIndex: 0,
            responseIndex: 0,
            searchLetter: "",
            flagInfo: false,
            newMessage: {
                date: '',
                hour: '',
                message: '',
                status: ''
            },
            newResponse: {
                date: '',
                hour: '',
                message: '',
                status: ''
            }
        }
    },
    methods: {
        changeChat: function(currIndex) {
            this.activeIndex = currIndex;
            this.scrollToBottom();
        },
        sendMessage: function() {
            this.newMessage.status = "sent";
            this.newMessage.hour = dt.now().setLocale('it').toLocaleString(dt.TIME_SIMPLE);
            this.newMessage.date = dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT);
            if(this.newMessage.message.trim() !== "") {
                this.contacts[this.activeIndex].messages.push({...this.newMessage});
                this.responseIndex = this.activeIndex;
                this.createPrev(this.newMessage.message);
                setTimeout(() => this.sendResponse(), 2000);
            }
            this.clearNewMess();
            this.scrollToBottom();
        },
        sendResponse: function() {
            this.newResponse.status = "received";
            let rnd = Math.floor(Math.random() * (4 - 0 + 1) ) + 0;
            const messageResponseArray = [
                "Ok",
                "Ciao",
                "Ho Freddo",
                "Come Stai?",
                "Scrivimi dopo, adesso ho da fare"
            ]
            this.newResponse.message = messageResponseArray[rnd] ;
            this.newResponse.hour = dt.now().setLocale('it').toLocaleString(dt.TIME_SIMPLE);
            this.newResponse.date = dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT);
            this.contacts[this.responseIndex].messages.push({...this.newResponse});
            this.updateLastAccess();
            this.createPrev(this.newResponse.message);
            this.clearNewRes();
            this.scrollToBottom();
        },
        clearNewMess: function() {
            this.newMessage.message = "";
            this.newMessage.status = "";
            this.newMessage.date = "";
        },
        clearNewRes: function() {
            this.newResponse.message = "";
            this.newResponse.status = "";
            this.newResponse.date = "";
        },
        searchControl: function() {      
            if(this.searchLetter === "") {
                for(let i = 0; i < this.searchLetter.length; i++){
                    this.contacts[i].visible = true
                }
            }
            for(let i = 0; i < this.contacts.length; i++){
                this.contacts[i].name.toLowerCase().includes(this.searchLetter.toLowerCase()) ? this.contacts[i].visible = true : this.contacts[i].visible = false
            }
        },
        cancelMessage: function(ind) {
            // this.contacts[this.activeIndex].messages.splice(ind, 1)
            this.contacts[this.activeIndex].messages[ind].message === "Questo messaggio è stato eliminato!" ? this.contacts[this.activeIndex].messages.splice(ind, 1) : this.contacts[this.activeIndex].messages[ind].message = "Questo messaggio è stato eliminato!"
            

        },
        updateLastAccess: function() {
            this.contacts[this.responseIndex].time = dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT);
        },
        createPrev: function(text) {
            let mess = [];
            if (text.length <= 19) {
                this.contacts[this.responseIndex].preview = text;
            } else {
                for(i=0; i <= 19; i++) {
                    i <= 16 ? mess[i] = text [i] : mess[i] = ".";
                }
                this.contacts[this.responseIndex].preview = mess.join("");
            }
            
        },
        showInfo: function() {
            this.flagInfo = !this.flagInfo
        },
        hideInfo: function() {
            this.flagInfo ? this.flagInfo = !this.flagInfo : this.flagInfo = false;
        },
        scroll: function() {
            //document.querySelector(".container-chat").scrollTo({ left: 0, top: (document.querySelector(".container-chat").scrollHeight), behavior: "smooth" });
        }
    }
}).mount("#app");
const dt = luxon.DateTime;