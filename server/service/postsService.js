const postsData = require('../data/postsData')

exports.getPosts = function () {
    return postsData.getPosts();
}

exports.getPost = async function (id) {
    const [RowDataPacket] = await postsData.getPost(id);
    if (RowDataPacket.length==0) throw new Error('Post not found')
    return RowDataPacket
}

exports.savePost = async function (post) {
    const [RowDataPacket] = await postsData.getPostByTitle(post.title)
    if (RowDataPacket.length!==0) throw new Error('Post already exists')
    return postsData.savePost(post)
}

exports.deletePost = function (id) {
    return postsData.deletePost(id)
}

exports.updatePost = async function (id, post) {
    await exports.getPost(id)
    return postsData.updatePost(id, post)
}