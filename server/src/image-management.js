import { readdirSync, rmSync } from 'node:fs';
import { getRelativePath } from './paths.js';

const IMAGE_FORMAT = "png";

const storeStudentAvatar = (username, avatar) => {
  const path = getRelativePath("../student_avatars");

  return avatar.mv(`${path}/${username}.${IMAGE_FORMAT}`);
};

const storeProductPictures = (product_id, pictures) => {
  const path = getRelativePath(`../product_pictures/${product_id}`);

  return Promise.all(pictures.map((picture, index) => {
    return picture.mv(`${path}/${index}.${IMAGE_FORMAT}`)
  }));
};

const deleteStudentAvatar = (username) => {
  rmSync(getRelativePath(`../student_avatars/${username}.png`));
};

const deleteProductPictures = (productIDs) => {
  for (const id of productIDs)
    rmSync(getRelativePath(`../product_pictures/${id}`), {
      recursive: true
    });
};

const countProductPictures = (product_id) => {
  const path = getRelativePath(`../product_pictures/${product_id}`);
  const files = readdirSync(path);

  return files.length;
};

export {
  storeProductPictures, storeStudentAvatar,
  countProductPictures, deleteStudentAvatar,
  deleteProductPictures
};