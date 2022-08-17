const getQueryFromProps = (props) => {
  const mappedProps = {};
  Object.keys({ ...props }).forEach((key) => {
    mappedProps[`${key}_like`] = props[key];
  });
  return `?${new URLSearchParams(mappedProps).toString()}`;
};
export default getQueryFromProps;
