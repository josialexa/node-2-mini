let books = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books);
    },

    create: (req, res) => {
        const {author, title} = req.body;
        const book = {
            id,
            author,
            title
        };

        books.push(book);
        id++;
        res.status(200).send(books)
    },

    update: (req, res) => {
        let bookIndex = books.findIndex(v => v.id == req.params.id);
        const {title, author} = req.body;

        if(bookIndex == -1) {
            res.status(500).send('Book not found');
        } else {
            if(title) books[bookIndex].title = title;
            if(author) books[bookIndex].author = author;
            res.status(200).send(books);
        }
    }
};