export const allow = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
};

export const Authorization = {
  Authorization: `token ${localStorage.getItem("pbird_token")}`,
};

export const headers = {
  headers: {
    Authorization: `token ${localStorage.getItem("pbird_token")}`,
  },
};
