const initialState ={
    counter: 10
}
const scoreTracker = (state = initialState, action) =>{
    switch(action.type){
        case 'INCREASE_COUNTER':  
            return {counter: state.counter + 1}

        case 'DECREASE_COUNTER':
            return{counter: state.counter - 1}
    }
    return state
}

export default scoreTracker
