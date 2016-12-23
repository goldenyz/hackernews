export const getJSON = (url, mode, headers) => {
  return fetch(url, {
    method: 'GET',
    mode,
    headers,
  }).then(resp => resp.json());
};

export const getText = (url, mode, headers) => {
  return fetch(url, {
    method: 'GET',
    mode,
    headers,
  }).then(resp => resp.text());
};

export const post = (url, mode, headers, body) => {
  return fetch(url, {
    method: 'POST',
    mode,
    headers,
    body,
  }).then(resp => resp.json());
}
