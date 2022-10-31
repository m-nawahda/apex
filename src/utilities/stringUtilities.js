export const getPageName = (pathName) => {
  let pathNameParts = pathName.substring(1).split("-");
  const capitalizedPathName = [];
  let i = 0;
  while (i < pathNameParts.length) {
    capitalizedPathName.push(
      pathNameParts[i].charAt(0).toUpperCase() + pathNameParts[i++].slice(1)
    );
  }
  return capitalizedPathName.join(" ");
};
