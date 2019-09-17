import { EXAMPLE_CHANGE_TITLE } from '../types/example';

export default (state = {
    title: 'Hello World'
}, action) => {
    switch (action.type) {
        case EXAMPLE_CHANGE_TITLE:
            return {title: action.payload};
        default: return state;
    }
}