import prisma from "../prisma/index.js"

export const updatePost = async (req,res,next) => {
    const id = req.params.id;
    const post = await prisma.post.update({
        where: {
            pId: id
        },
        data: {
            title: req.body.title,
            likes: req.body.likes,
        }
    });

    req.postId = post.pId;
    next();
}