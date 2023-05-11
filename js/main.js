const { createApp } = Vue

createApp({
    data() {
        return{
            chats: [
                {name: "Michele", lastAccess: "x:x", img:"./img/avatar_1.jpg"},
                {name: "Fabio", lastAccess: "x:x", img:"./img/avatar_2.jpg"},
                {name: "Samuele", lastAccess: "x:x", img:"./img/avatar_3.jpg"},
                {name: "Alessanfro B.", lastAccess: "x:x", img:"./img/avatar_4.jpg"},
                {name: "Alessandro L.", lastAccess: "x:x", img:"./img/avatar_5.jpg"},
                {name: "Claudia", lastAccess: "x:x", img:"./img/avatar_6.jpg"},
                {name: "Federico", lastAccess: "x:x", img:"./img/avatar_7.jpg"},
                {name: "Davide", lastAccess: "x:x", img:"./img/avatar_8.jpg"},
            ]
        }
    },

    methods: {

    },

    mounted() {

    },
}).mount('#app')