const { createApp } = Vue

createApp({
    data() {
        return{
            // chats: [
            //     {name: "Ludi", lastAccess: "x:x", img:"./img/avatar_6.jpg"},
            //     {name: "Michele", lastAccess: "x:x", img:"./img/avatar_1.jpg"},
            //     {name: "Fabio", lastAccess: "x:x", img:"./img/avatar_2.jpg"},
            //     {name: "Samuele", lastAccess: "x:x", img:"./img/avatar_3.jpg"},
            //     {name: "Alessanfro B.", lastAccess: "x:x", img:"./img/avatar_4.jpg"},
            //     {name: "Alessandro L.", lastAccess: "x:x", img:"./img/avatar_5.jpg"},
            //     {name: "Federico", lastAccess: "x:x", img:"./img/avatar_7.jpg"},
            //     {name: "Davide", lastAccess: "x:x", img:"./img/avatar_8.jpg"},
            // ],
            
            search: '',

            currentChat: 0,
            
            newMessage: "",

            botMessage: {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            },


            chats: [
                {
                    name: 'Michele',
                    img:"./img/avatar_1.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
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
                    img:"./img/avatar_2.jpg",
                    visible: true,
                    messages: [
                        {
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
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    img:"./img/avatar_3.jpg",
                    visible: true,
                    messages: [
                        {
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
                    name: 'Alessandro B.',
                    img:"./img/avatar_4.jpg",
                    visible: true,
                    messages: [
                        {
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
                {
                    name: 'Alessandro L.',
                    img:"./img/avatar_5.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    img:"./img/avatar_6.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    img:"./img/avatar_7.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    img:"./img/avatar_8.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
            
        }
    },

    methods: {
        
        openChat(i){
            this.currentChat = i
        },

        sendMessage(currentChat){
            sendNewMessage = {
                date: '10/01/2020 15:51:00',
                message: this.newMessage,
                status: 'sent'
            };
            this.chats[this.currentChat].messages.push(sendNewMessage);
            this.newMessage= '';
            setTimeout(() => {this.chats[this.currentChat].messages.push(this.botMessage)}, 1000);
        },

        searchChats(search){
            if (!this.chats.name.includes(search)) {
                this.chats.visible = false
                
            }
        }

    },


    mounted() {

    },
}).mount('#app')