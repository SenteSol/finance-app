export const username = auth => {
  const { currentUser } = auth;
  return `${currentUser.firstName} ${currentUser.lastName}`;
};
