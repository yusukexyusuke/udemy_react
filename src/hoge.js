function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      console.info("++++nextFunction++++")
      return function (action) {
        console.info("++++actionFunction++++")
        if (typeof action === 'function') {
         console.info("action is function" + action)
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;

