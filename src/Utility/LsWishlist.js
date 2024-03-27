const getWishBooks = () => {
  const storedWishBooks = localStorage.getItem(`wish_books`);
  if (storedWishBooks) {
    return JSON.parse(storedWishBooks);
  } else {
    return [];
  }
};

const saveWishBooks = (id) => {
  const storedWishedBooks = getWishBooks();
  const exist = storedWishedBooks.find((bookId) => bookId === id);
  if (!exist) {
    storedWishedBooks.push(id);
    localStorage.setItem(`wish_books`, JSON.stringify(storedWishedBooks));
  }
};

export { getWishBooks, saveWishBooks };
