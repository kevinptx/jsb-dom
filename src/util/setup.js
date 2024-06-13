export const wrapPreventDefault = (fn) => (e) => {
  e.preventDefault();
  fn(e);
};
