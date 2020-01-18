const initialState = {
  websites: [],
  selectedWebsite: null
};


export default function (state = initialState, action = {}) {
  switch (action.type) {
    case 'WEBSITE_ADD':
      return { ...state, websites: [...state.websites, action.website] };
    case 'WEBSITE_SET':
      return { ...state, selectedWebsite: { ...action.website } };
    case 'WEBSITE_CLEAR':
      return { ...state, selectedWebsite: { ...state.selectedWebsite, cmps: [] } }
    default:
      return state;
  }
}