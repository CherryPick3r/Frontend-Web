import axios from "axios";

const baseUrl = "/api/v1/game";

export function startGame({ userEmail, gameMode }) {
  return axios
    .post(baseUrl + "/start-game", null, {
      params: {
        userEmail: userEmail,
        gameMode: gameMode,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

export function swipeLeft({ gameId, shopId }) {
  return axios
    .post(baseUrl + "/swipe-left", null, {
      params: {
        gameId: gameId,
        shopId: shopId,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

export function swipeRight({ gameId, shopId }) {
  return axios
    .post(baseUrl + "/swipe-right", null, {
      params: {
        gameId: gameId,
        shopId: shopId,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}
