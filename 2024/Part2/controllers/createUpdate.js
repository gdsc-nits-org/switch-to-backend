import prisma from "../prisma/index.js";

export const createUpdate = async (req, res) => {
    const update = await prisma.update.create({ 
        data: {
            post: {
                connect: {
                    pId: req.postId
                }
            }
        } 
    });

    res.status(201).json({message: "updated"});
};
