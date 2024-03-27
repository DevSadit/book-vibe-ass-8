const getReadBooks =()=> {
    const storedReadBooks = localStorage.getItem(`read_books`);
    if(storedReadBooks){
        return JSON.parse(storedReadBooks);
    }
    else{
        return [];
    }
}

const saveReadBooks = (id)=>{
    const storedReadBooks = getReadBooks();
    const exist = storedReadBooks.find(bookId => bookId === id);
    if(!exist){
        storedReadBooks.push(id);
        localStorage.setItem(`read_books`, JSON.stringify(storedReadBooks));
    }
}

export {getReadBooks, saveReadBooks}