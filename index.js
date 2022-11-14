const store = require("./app/store");
const { fetchUsers } = require("./features/user/userSlice");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/icecream/icecreamSlice").iceCreamActions;

console.log("initialState", store.getState());
const fetchUser = require('./features/user/userSlice').fetchUsers

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(fetchUser())

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(2));

// unsubscribe();
