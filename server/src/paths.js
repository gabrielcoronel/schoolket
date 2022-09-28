import path from 'path';

export const isWindowsPath = (path) => {
  const identifier = path.slice(1, 3);

  return (identifier === "C:");
};

export const getRelativePath = (relativePath) => {
  const absolutePath = path.dirname(new URL(import.meta.url).pathname);
  const normalizedPath =
    isWindowsPath(absolutePath) ?
      absolutePath.slice(1) :
      absolutePath;

  return `${normalizedPath}/${relativePath}`;
};