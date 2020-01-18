const initialState = {
  board: null
};


export default function (state = initialState, action = {}) {
  switch (action.type) {
    // case 'WEBSITE_ADD':
    //   return { ...state, websites: [...state.websites, action.website] };
    case 'BOARD_SET':
      return { ...state, board: { ...action.board } };
    // case 'WEBSITE_CLEAR':
    //   return { ...state, selectedWebsite: { ...state.selectedWebsite, cmps: [] } }
    default:
      return state;
  }
}