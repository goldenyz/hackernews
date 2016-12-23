import { getJSON } from '../../util/request';
import config from '../../config';

export const getItem = (id) => {
  const url = `${config.hacker_news_host}/v0/item/${id}.json`;

  return getJSON(url, 'cors');
}

export const getNew = () => {
  const url = `${config.hacker_news_host}/v0/newstories.json`;

  return getJSON(url, 'cors');
}
