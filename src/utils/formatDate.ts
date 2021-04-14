const formatDate = (transactionDate: Date): string => {
  const date = new Date(transactionDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export default formatDate;
