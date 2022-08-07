import { URL } from 'url';

const dirName = new URL('.', import.meta.url).pathname;

export default dirName;