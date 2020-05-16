export const CREATE_CHALLENGE = "CREATE_CHALLENGE";
export const TOGGLE_DAY = "TOGGLE_DAY";

export const toggleDay = (challengeId, day) => ({
  type: TOGGLE_DAY,
  payload: {challengeId, day}
})

export const createChallenge = (name) => ({ type: CREATE_CHALLENGE, payload: {name} })
