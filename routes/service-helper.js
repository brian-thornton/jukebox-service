export const ok = (res, data) => {
  res.status(200).send(data);
};