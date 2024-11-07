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
  SAVE_ANSWER ="SAVE_ANSWERS",
}