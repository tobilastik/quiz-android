import { AsyncStorage } from "react-native";

export const HIGHT_SCORE_LIFE = "HIGHT_SCORE_LIFE";
export const HIGHT_SCORE_TIME = "HIGHT_SCORE_TIME";
export const RECORD_SCORE_LIFE = "RECORD_SCORE_LIFE";
export const RECORD_SCORE_TIME = "RECORD_SCORE_TIME";

export const highScoreLife = () => {
  return async dispatch => {
    try {
      const value = await AsyncStorage.getItem("highScoreLife");
      console.log("===============value=====================", value);

      if (value !== null) {
        console.log(value);
        dispatch({
          type: HIGHT_SCORE_LIFE,
          payload: value
        });
      }
    } catch (error) {
      console.log("==============error======================");
      console.log(error);
      console.log("====================================");
    }
  };
};

export const highScoreTime = () => {
  return async dispatch => {
    try {
      const value = await AsyncStorage.getItem("highScoreTime");
      console.log("===============value=====================", value);

      if (value !== null) {
        console.log(value);
        dispatch({
          type: HIGHT_SCORE_TIME,
          payload: value
        });
      }
    } catch (error) {
      console.log("==============error======================");
      console.log(error);
      console.log("====================================");
    }
  };
};
export const LifeUpdateScore = score => {
  return async dispatch => {
    try {
      await AsyncStorage.setItem("highScoreLife", score.toString());
      dispatch({
        type: RECORD_SCORE_LIFE,
        payload: score
      });
    } catch (error) {
      // Error saving data
      console.log("============error reord data=========");
      console.log(error);
      console.log("====================================");
    }
  };
};
export const timeUpdateScore = score => {
  console.log("========score action===============");
  console.log(score);
  console.log("====================================");
  return async dispatch => {
    try {
      await AsyncStorage.setItem("highScoreTime", score.toString());
      dispatch({
        type: RECORD_SCORE_TIME,
        payload: score
      });
    } catch (error) {
      // Error saving data
      console.log("============error reord data=========");
      console.log(error);
      console.log("====================================");
    }
  };
};
