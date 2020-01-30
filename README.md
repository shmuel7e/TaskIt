# Trello

Hello everyone.
This is our version of Trello ----- TaskIt ---- 

This project was created from scratch with the newest technologies such as Node.js, React.js and Redux.js.
We support sockets and drag and drop, the app has a fully functioning data base that was created with Mongo.Db.
In this project we demonstrate our knowledge of JavaScript using React.js.


App structure:

frontend:
views: 
TopicPage: the main TaskIt Board showing all the topics.
TaskDetails: inside a single task. 
HomePage: This is our home page.
BoardPage: this is the page that includes all of the user's boards.
AuthPage: sign in, sign up etc..

Cmps: 
Auth: SignIn, SignUp.
BoarHeader: Filter,SearchUser,UserPreview,BoardMemberPreview,UserList.
Footer: footer cmp.
Header: HeaderCmp, NavBar.
SideMenu: ActivityList,ActivityPreview,BgColorPreview,BgGalleryList,BgImagePreview,SideMenu.
Task: AddTask,TaskList,TaskPreview,TaskModal.
Topic: AddTopic,TopicList,TopicPreview,MsgModal.
reducers: BoardReducer,index,ReviewReducer,SystemReducer,SystemReducer,UserRedcuer.
services: BoardService,EventBusService,HttpService,ImageService,SocketService,StorageService,TemplateService,UserService,UtilsService.
Actions :BoardActions,ReviewActions,ReviewActions,SystemActions,UserActions.
Assets: Sass,Images,Fonts.

Backend:
API: 
auth: auth.controller,auth.routes,auth.service.
board: board.controller,board.routes,board.service,board.utils.
socket:socket.routes.
user: user.controller,user.routes,user.service.


The app supports all the newest technologies such as React.js,Node.js Express.js (sessions, cookies etc...), Redux,
socket.io,drag and drop. MongoDb DataBase and user Auth (sign in, sign up etc..).





