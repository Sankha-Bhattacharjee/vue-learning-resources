const app=Vue.createApp({
    data(){
        return{
            output:'',
            outputEnter:'',
        }
    },
    methods:{
        showAlert(){
            alert("This is an alert message");
        },
        showOutput(event){
            this.output = event.target.value;
        },
        showOutputEnter(event){
            this.outputEnter = event.target.value;
        }
    }
})

app.mount('#assignment')