export interface SetttingState {
  timeFormat: string;
  temperatureFormat: string;
}

const initialState: SetttingState = {
  temperatureFormat: '',
  timeFormat: '',
};

export type ActionsTypes = {
  type: 'UPDATE';
  payload: SetttingState;
};
export const settingReducer = (
  state: SetttingState = initialState,
  actions: ActionsTypes
) => {
  switch (actions.type) {
    case 'UPDATE':
      return {
        timeFormat: actions.payload.timeFormat,
        temperatureFormat: actions.payload.temperatureFormat,
      };
    default:
      return state;
  }
};
