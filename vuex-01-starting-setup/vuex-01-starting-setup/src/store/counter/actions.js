export default {
    increment(context){
        console.log('increment actions...');
        setTimeout(function(){
            context.commit('increment');
        },2000);
    },
    increase(context,payload){
        console.log('increase actions with payload');
        context.commit('increase',payload);
    },
}