const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions

console.log('initialState', store.getState());

const unsubscribe = store.subscribe(() => {
console.log('updated Store', store.getState());
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

unsubscribe()