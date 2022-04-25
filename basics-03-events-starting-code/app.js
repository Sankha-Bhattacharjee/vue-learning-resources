const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name:'',
        confirmedName:'',
      };
    },
    methods:{
      confirmedInput(){
        this.confirmedName = this.name;
      },
        setName(event,lname){
            this.name = event.target.value+' ' + lname;
        },
        add(num){
            this.counter+=num;
        },
        reduce(num){
            this.counter-=num;
        },
        submitForm(){
          alert('Submitted!')
        }
    }
  });
  
  app.mount('#events');
  