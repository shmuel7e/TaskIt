const initialState = {
  board: null,
  currTask: null,
  currTopic: null
};


export default function (state = initialState, action = {}) {
  switch (action.type) {

    case 'BOARD_SET':
      return { ...state, board: { ...action.board } };

    case 'BOARD_COVER_SET':
      return { ...state, board: { ...state.board, cover: action.imgName } }

    case 'CURRENT_TOPIC_SET':
      const currTopic = state.board.topics.find(topic => topic.id === action.topicId);
      return { ...state, currTopic: currTopic };
    case 'TOPIC_REMOVE':
      const filteredTopics = state.board.topics.filter(topic => topic.id !== action.topicId);
      return { ...state, board: { ...state.board, topics: filteredTopics } };
    case 'TOPIC_ADD':
      return {...state,board:{...state.board,topics:[...state.board.topics,action.newTopic]}}
    case 'TASK_ADD':
      const topics = state.board.topics.map(topic => {
        if (topic.id === action.topicId) {
          topic.tasks.push({ ...action.newTask })
        }
        return topic
      })
      return { ...state, board: { ...state.board, topics: topics } };


    case 'CURRENT_TASK_SET':
      const currTask = state.currTopic.tasks.find(task => task.id === action.taskId);
      return { ...state, currTask: currTask };


    default:
      return state;
  }
}