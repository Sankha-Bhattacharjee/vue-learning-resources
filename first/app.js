// const inputElement = document.querySelector('input');
// const buttonElement = document.querySelector('button');
// const listElement =  document.querySelector('ul');

// function addGoal(){
//     console.log("Inside");
//     const inputValue = inputElement.value;
//     const listChildElement = document.createElement('li');
//     listChildElement.textContent = inputValue;
//     listElement.appendChild(listChildElement);
//     inputElement.value='';
// }

// buttonElement.addEventListener('click',addGoal);

Vue.createApp({
    data() {
        return {
            goals: [],
            inputValue: '',

        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.inputValue)
            this.inputValue = ''
        }
    }
}).mount("#app")