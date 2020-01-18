const initialState = {
  board: null
};


export default function (state = initialState, action = {}) {
  switch (action.type) {
     case 'TASK_ADD':
     const topics= state.board.topics.map(topic=>{
       if(topic.id===action.topicId){
         topic.tasks.push({...action.newTask})
       }
        return topic
      })
      console.log(topics)
       return { ...state,board:{...state.board,topics:topics} };
    case 'BOARD_SET':
      return { ...state, board: { ...action.board } };
    // case 'WEBSITE_CLEAR':
    //   return { ...state, selectedWebsite: { ...state.selectedWebsite, cmps: [] } }
    case 'BOARD_COVER_SET':
      return { ...state, board: { ...state.board, cover: action.imgName } }
    default:
      return state;
  }
}