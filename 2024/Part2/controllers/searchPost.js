import prisma from "../prisma/index.js";

export const searchPost = async (req,res) => {
    const id = req.params.id;

    const post = await prisma.post.findFirst({where: {
        pId: id
    }});

    res.status(201).json({post: post});
}
