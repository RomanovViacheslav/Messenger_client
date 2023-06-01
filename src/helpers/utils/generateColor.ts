export const generateColor = (str: string) => {
  const colors = ['#FF5733', '#FFC300', '#C70039', '#909C3F', '#581845'];

  const hash = str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const colorIndex = hash % 5;
  return colors[colorIndex];
};
