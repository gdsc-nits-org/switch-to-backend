import prisma from "../prisma/index.js"

export const postAdd = async (req,res) => {
    const post = await prisma.post.create({
        data: {
            title: req.body.title,
            likes: req.body.likes
        }
    })

    res.status(201).json({post: post});
}