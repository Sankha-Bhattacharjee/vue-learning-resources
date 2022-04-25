const app =Vue.createApp({
    data(){
        return{
            taskInput:'',
            tasks:[],
            isShow:true,
            buttonText:'',
        };
    },
    computed:{
        showButtonText(){
            this.buttonText = this.isShow ? 'Hide Lists' : 'Show Lists';
            return this.buttonText;
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.taskInput);
            this.taskInput='';
        },
        hidsAndShow(){
            this.isShow=!this.isShow;
            
        },
        
    }
});

app.mount('#assignment');