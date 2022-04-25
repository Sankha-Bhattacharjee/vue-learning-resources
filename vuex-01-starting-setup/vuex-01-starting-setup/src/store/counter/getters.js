export default {
    finalCounter(state){
        return state.counter * 2;
    },
    normalizedCounter(_,getters){
        const c = getters.finalCounter;
        if(c<0){
            return 0;
        }else if(c>100){
            return 100;
        }
        return c;
    },
}