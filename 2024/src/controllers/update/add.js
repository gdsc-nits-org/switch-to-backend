const prisma = require("../../../prisma");

const createUpdate = async (req,res,next) => {
    const postId = req.params.id;

    const update = await prisma.update.create({
        data: {
            post: {
                connect: {
                    id: postId,
                }
            }
        }
    })

    res.status(201).json({update});
}

module.exports = createUpdate;