const IMAGE_FORMAT = "png";

import { mkdir, readdir } from 'node:fs/promises';

const storeStudentAvatar = (username, avatar) => {
  const path = `../student_avatars`;

  return avatar.mv(`${path}/${username}.${IMAGE_FORMAT}`);
};

const storeProductPictures = (product_id, pictures) => {
  const path = `../product_pictures/${product_id}`;
  const movePromises = pictures.map((picture, index) => {
    return picture.mv(`${path}/${index}.${IMAGE_FORMAT}`);
  });

  return Promise.all([
    mkdir(path),
    ...movePromises
  ]);
};

const countProductPictures = async (product_id) => {
  const path = `../product_pictures/${product_id}`;
  const files = await readdir(path);

  return files.length;
};

export {
  storeProductPictures, storeStudentAvatar,
  countProductPictures
};