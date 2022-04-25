export default {
    increment(state){
        console.log('Mutation..');
        state.counter+=1;
    },
    increase(state,payload){
        console.log('Mutation with payload');
        state.counter+=payload.value;
    }
}