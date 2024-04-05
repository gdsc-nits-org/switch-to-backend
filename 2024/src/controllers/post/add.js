const prisma = require("../../../prisma")

const addPost = async (req,res,next) => {
    const post = await prisma.post.create({
        data: {
            title: req.body.title,
            body: req.body.body,
        }
    })

    res.status(201).json({post: post});
}

module.exports = addPost;