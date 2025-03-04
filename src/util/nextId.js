/** @format */

export const getNextId = (data) => {
  const nextId = data.reduce((prev, current) =>
    prev && prev.id > current.id ? prev.id : current.id
  );
  return nextId + 1;
};
