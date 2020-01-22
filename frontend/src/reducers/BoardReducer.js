const initialState = {
  boards:null,
  board: null,
  currTask: null,
  currTopic: null
};


export default function (state = initialState, action = {}) {
  switch (action.type) {
    case 'BOARDS_SET':
      return { ...state, boards: [...action.boards]   }
    case 'BOARD_SET':
      console.log(action.board)
      return { ...state, board: { ...action.board } };

    case 'BOARD_COVER_SET':
      return { ...state, board: { ...state.board, cover: action.imgName } }

    case 'CURRENT_TOPIC_SET':
      const currTopic = state.board.topics.find(topic => topic.id === action.topicId);
      return { ...state, currTopic: currTopic };

    case 'TOPIC_UPDATE':
      let updatedTopics = state.board.topics.map(topic =>
        topic.id === action.topic.id ? action.topic : topic)
      return { ...state, board: { ...state.board, topics: updatedTopics } };

    case 'TOPIC_REMOVE':
      const filteredTopics = state.board.topics.filter(topic => topic.id !== action.topicId);
      return { ...state, board: { ...state.board, topics: filteredTopics } };

    case 'TOPIC_ADD':
      return { ...state, board: { ...state.board, topics: [...state.board.topics, action.newTopic] } }

    case 'TASK_REMOVE':
      const filteredTasks = state.currTopic.tasks.filter(task => task.id !== action.taskId);
      state.currTopic = { ...state.currTopic, tasks: filteredTasks };
      state.board.topics = state.board.topics.map(topic =>
        topic.id === state.currTopic.id ? state.currTopic : topic)
      return { ...state, board: { ...state.board, topics: state.board.topics } };

    case 'TASK_UPDATE':
      const updatedTopic = action.topic.tasks.map(task =>
        task.id === action.task.id ? action.task : task);
      const Topics = state.board.topics.map(topic =>
        topic.id === updatedTopic.id ? updatedTopic : topic)
      return { ...state, board: { ...state.board, topics: Topics } };

    case 'TASK_ADD':
      const topics = state.board.topics.map(topic => {
        if (topic.id === action.topicId) {
          topic.tasks.push({ ...action.newTask })
        }
        return topic
      })
      return { ...state, board: { ...state.board, topics: topics } };

    case 'TASK_CLONE':
      state.board.topics = state.board.topics.map(topic => {
        if (topic.id === action.topicId) {
          topic.tasks.push({ ...action.task })
        }
        return topic
      })
      return { ...state, board: { ...state.board, topics: state.board.topics } };

    case 'CURRENT_TASK_SET':
      const currTask = state.currTopic.tasks.find(task => task.id === action.taskId);
      return { ...state, currTask: currTask };

    case 'TASK_HAPPEND':
      const { droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        typeToDrop
      } = action
      const newState = { ...state }
      if(typeToDrop=== "list"){
        const topics=newState.board.topics.splice(droppableIndexStart,1)
        newState.board.topics.splice(droppableIndexEnd,0,...topics)
        return {...newState}
      }

      if (droppableIdStart === droppableIdEnd) {
        const topic = state.board.topics.find(topic => droppableIdStart === topic.id)
        const task = topic.tasks.splice(droppableIndexStart, 1)
        topic.tasks.splice(droppableIndexEnd, 0, ...task)
      }
      if (droppableIdStart !== droppableIdEnd) {
        const topic = state.board.topics.find(topic => droppableIdStart === topic.id)
        const task = topic.tasks.splice(droppableIndexStart, 1)
        const topicEnd = state.board.topics.find(topic => droppableIdEnd === topic.id)
        topicEnd.tasks.splice(droppableIndexEnd, 0, ...task)
      }
      return { ...newState };

    default:
      return state;
  }
}