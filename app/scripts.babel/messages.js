export const GET_TAGS = 'GET_TAGS';

export const getActionMessage = action => ({
  action
});

export const getActionResponse = (action, payload) => ({
  actionResponse: action,
  payload
});

export const isAction = (action, message) => message.action === action;
export const getPayloadFromResponse = response => response.payload;