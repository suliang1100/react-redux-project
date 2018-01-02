/*
 * Create by suliang on 2018.01.02
 * */
import {ADD} from '../common/actionTypes.js';

export default (state={},action) => {
    switch(action.type){
        case ADD: {
            return [
                {
                    id: action.id
                },
                ...state
            ]
        }
        default:{
            return state;
        }
    }
}