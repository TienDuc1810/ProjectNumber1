const initState = {
    users: [
      { id: 1, name: 'Duc' },
      { id: 2, name: 'Minh' },
      { id: 3, name: 'Tien' }
    ],
    posts: []
  };
  
  const rootReducer = (state = initState, action) => {
    switch (action.type) {
      case 'deleteUser':
        const updatedUsers = state.users.filter(item => item.id !== action.payload.id);
        return {
          ...state,
          users: updatedUsers
        };
      case 'newUser':
        const newRandomUser = {
          id: Math.floor(Math.random() * 1000000),
          name: 'random'
        };
        return {
          ...state,
          users: [...state.users, newRandomUser]
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  