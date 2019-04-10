var RNFS = require('react-native-fs');
var path = RNFS.DocumentDirectoryPath +'/log.txt'

const initialState ={
    counter: 0,
    highscore:0
}
const scoreTracker = (state = initialState, action) =>{
    switch(action.type){
        case 'INCREASE_COUNTER':  
            return {counter: state.counter + 1}

        case 'DECREASE_COUNTER':
            return{counter: state.counter - 1}
    }
    RNFS.writeFile(path,state.counter,'utf8')
    .then((success)=>{
        console.log('File Written');
    }

    ).catch((err) =>{
        console.log(err.message);
    }

    )
    return state
}

export default scoreTracker
