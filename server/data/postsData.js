const database = require('../infra/database')

exports.getPosts = async function () {
    return database.query('select * from u819601105_finan.post')
}

exports.getPost = async function (id) {
    return database.query('select * from u819601105_finan.post where id = ?', [id])
}

exports.getPostByTitle = async function (title) {
    return database.query('select * from u819601105_finan.post where title = ?', [title])
}

exports.savePost = async function (post) {
    const result = await database.query('insert into u819601105_finan.post(title, content) values(?, ?)',[post.title, post.content])
    const insertId = result[0].insertId
    const newPost = {
        id: insertId,
        title: post.title,
        content: post.content
    }
    return newPost
}

exports.updatePost = async function (id, post) {
    const result = await database.query('update u819601105_finan.post set title = ?, content = ? where id = ?',[post.title, post.content, id])
    return result
}

exports.deletePost = async function (id) {
    return database.query('delete from u819601105_finan.post where id = ?', [id])
}