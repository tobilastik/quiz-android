import {
  HIGHT_SCORE_LIFE,
  HIGHT_SCORE_TIME,
  RECORD_SCORE_LIFE,
  RECORD_SCORE_TIME
} from "../actions";

const INITIAL_STATE = {
  highScoreLife: 0,
  highScoreTime: 0,
  loader: "new",
  statusTime: "not done",
  statusLife: "not done"
};

function scoreReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HIGHT_SCORE_LIFE:
      console.log("=============HIGHT_SCORE_LIFE=======================");
      console.log(action.payload);
      console.log("====================================");
      return {
        ...state,
        highScoreLife: action.payload,
        loader: new Date(),
        statusLife: "done"
      };
    case HIGHT_SCORE_TIME:
      return {
        ...state,
        highScoreTime: action.payload,
        loader: new Date(),
        statusTime: "done"
      };
    case RECORD_SCORE_LIFE:
      console.log("=============HIGHT_SCORE_TIME=======================");
      console.log(action.payload);
      console.log("====================================");
      return {
        ...state,
        highScoreLife: action.payload,
        loader: new Date(),
        statusLife: "done"
      };
    case RECORD_SCORE_TIME:
      console.log("=============HIGHT_SCORE_TIME=======================");
      console.log(action.payload);
      console.log("====================================");
      return {
        ...state,
        highScoreTime: action.payload,
        loader: new Date(),
        statusTime: "done"
      };
    default:
      return state;
  }
}

export default scoreReducer;
