const IMAGE_FORMAT = "png";

import path from 'path';
import { mkdir, readdir } from 'node:fs/promises';
import { readdirSync } from 'node:fs';

const DIRNAME = path.dirname(new URL(import.meta.url).pathname)

const storeStudentAvatar = (username, avatar) => {
  const path = `${DIRNAME}/../student_avatars`;

  return avatar.mv(`${path}/${username}.${IMAGE_FORMAT}`);
};

const storeProductPictures = (product_id, pictures) => {
  const path = `${DIRNAME}/../product_pictures/${product_id}`;

  return Promise.all(pictures.map((picture, index) => {
    return picture.mv(`${path}/${index}.${IMAGE_FORMAT}`)
  }));
};

const countProductPictures = (product_id) => {
  const path = `${DIRNAME}/../product_pictures/${product_id}`;
  const files = readdirSync(path);

  return files.length;
};

export {
  storeProductPictures, storeStudentAvatar,
  countProductPictures
};