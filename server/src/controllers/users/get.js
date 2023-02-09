import prisma from "../../db/index.js";

const getAllUsers = async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      name: true,
    },
  });
  res.send(users);
};

export default getAllUsers;
