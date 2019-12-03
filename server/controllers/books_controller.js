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
    }
};