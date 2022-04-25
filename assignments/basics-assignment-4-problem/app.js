const app = Vue.createApp({
    data(){
        return {
           input1:'', 
           isVisible:true,
           input2:'',
        };
    },
    computed:{
        inputBox1(){
            if(this.input1==='user1'){
                return {user1:true}
            }
            else if(this.input1==='user2'){
                return {user2:true}
            }
        },
        isVisibleParaComputed(){
            if(this.isVisible===true){
                return {visible:true}
            }else{
                return { hidden:true}
            }
        }
    },
    methods:{
        isVisiblePara(){
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount('#assignment');