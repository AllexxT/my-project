const TEST = [
    {id:233, text: 'Full load', date: '2019'},
    {id:234, text: 'Not load', date: '2010'},
]

const test = (state = TEST, {type, id, text, date}) => {
    switch (type) {
        case 'ADD_TEST':
            return [
                ...state, {
                    id,
                    text,
                    date,
                }
            ];
        default:
            return state;
    }
}

export default test;