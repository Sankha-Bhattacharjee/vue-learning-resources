const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name:'',
        confirmedName:'',
        lastName:'',
        //fullName:'',
      };
    },
    watch:{
        counter(value){
            const that=this;
            setTimeout(function(){
                if(value>50){
                    this.counter=0;
                }

            },2000)
        }
        // name(value){
        //     if(value===''){
        //         this.fullName= '';
        //     }else{
        //         this.fullName = value+ ' ' + this.lastName;

        //     }
        // },
        // lastName(value){
        //     this.fullName=this.name+' '+value;
        // }
    },
    computed:{
        fullName(){
            //console.log("1");
            if(this.name===''){
                return '';
            }else if(this.lastName===''){
                return this.name;
            }
            return this.name + ' ' + this.lastName;
        },
    },
    methods:{
        /* setName(event,lname){
            this.name = event.target.value;
        }, */
        outputFullName(){
            console.log("1");
            if(this.name===''){
                return '';
            }
            return this.name+' '+'Bhatt';
        },
        add(num){
            //console.log("2");
            this.counter+=num;
        },
        reduce(num){
            //console.log("3");
            this.counter-=num;
        },
        resetInput(){
            //console.log("4");
            this.name='';
        },
    }
  });
  
  app.mount('#events');
