export enum RabbitMQ{
  QuestionsQueue = 'question',
  
}

export enum QuestionsMSG {
  CREATE = 'CREATE_SERVICES',
  FIND_ALL =  'FIND_SERVICES',
  FIND_ONE = 'FIND_SERVICE',
  UPDATE = 'UPDATE_SERVICE',
  DELETE = 'DELETE_SERVICE',
  FIND_BY_USER = "FIND_SERVICES_USER",
  GET_AVAILABLE_HOURS = 'GET_AVAILABLE_HOURS',
  FIND_TOP_REQUESTED = 'FIND_TOP_REQUESTED',
  GET_TOTAL_SALES = 'GET_TOTAL_SALES',
  GET_MONTHLY_SALES = 'GET_MONTHLY_SALES',
  GET_ANNUAL_SALES = 'GET_ANNUAL_SALES',
  GET_TOP_SERVICES = 'GET_TOP_SERVICES',
   ADD_REVIEW = 'ADD_REVIEW_SERVICES',
   GET_REVIEWS = 'GET_REVIEWS',
   ADD_CHAT_MESSAGE = 'ADD_CHAT_SERVICE',
   GET_CHATS = " GET_CHATS",
   UPDATE_CHAT = 'UPDATE_CHAT',
}