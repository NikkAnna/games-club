export const randomInvitations = [
  'Рандомная фраза 1',
  'Рандомная фраза 2',
  'Рандомная фраза 3',
  'Рандомная фраза 4',
  'Рандомная фраза 5'
];

export const getRandomInvitation = () => {
  const index = Math.floor(Math.random() * randomInvitations.length);
  return randomInvitations[index];
};
