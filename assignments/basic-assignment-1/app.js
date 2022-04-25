const app = Vue.createApp({
    data(){
        return{
            name:'Sankha Bhattacharjee',
            age: 22,
            url:'https://avatars.githubusercontent.com/u/6128107?s=280&v=4',
            inputValue:'Assignment'
        }
    },
    methods:{
        favNum(){
            return (r=Math.random())
        }
    }
})

app.mount('#assignment')