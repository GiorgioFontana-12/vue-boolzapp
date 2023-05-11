const { createApp } = Vue

createApp({
    data() {
        return{
            chats: [
                {name: "michele", lastAccess: "x:x", img:"./img/avatar_1.jpg"},
                {name: "michele", lastAccess: "x:x", img:"./img/avatar_2.jpg"},
                {name: "michele", lastAccess: "x:x", img:"./img/avatar_3.jpg"},
                {name: "michele", lastAccess: "x:x", img:"./img/avatar_4.jpg"},
                {name: "michele", lastAccess: "x:x", img:"./img/avatar_5.jpg"},
                {name: "michele", lastAccess: "x:x", img:"./img/avatar_6.jpg"},
                {name: "michele", lastAccess: "x:x", img:"./img/avatar_7.jpg"},
                {name: "michele", lastAccess: "x:x", img:"./img/avatar_8.jpg"},
            ]
        }
    },

    methods: {

    },

    mounted() {

    },
}).mount('#app')