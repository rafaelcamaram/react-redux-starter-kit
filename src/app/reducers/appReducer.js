const assign = (state, props) => Object.assign({}, state, props);

let initialState = {
  date: ''
};

export default (state = initialState, action) => {

  let newState = state;

  switch (action.type) {

    case 'GET_DATE':
      newState = assign(state, {
        date: new Date(),
      });
      break;

    case 'SET_DATE':
      newState = assign();
      break;

    default:
      newState = state;
      break;

  }

  return newState;
}
