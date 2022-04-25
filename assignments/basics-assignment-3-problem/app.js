const app = Vue.createApp({
    data(){
        return{
            counter:0,
        }
    },
    watch:{
        resultText(value){
            setTimeout(()=>{
                this.counter=0;
            },5000)
        }
    },
    computed:{
        resultText(){
            if(this.counter<37){
               // this.result='Not there yet'
               return 'Not there yet';
            }
            else if(this.counter>37){
                //this.result='Too much!'
                return 'Too much!';
            }
            else{
               // this.result='Reached!'
               return 'Reached!'
            }
        }
    },
    methods:{
        add(){
            //console.log("1")
            this.counter= this.counter+5;
        },
        subtract(){
            this.counter--;
        }
    }
})

app.mount('#assignment')