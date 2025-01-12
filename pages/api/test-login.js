import bcrypt from 'bcrypt';
import prisma from '@teko/libs/PrismaClient';

export default async function handler(req, res) {
    const {
        email,
        password,
    } = req.body;
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            res.status(200).send({ user });
            return;
        }
    }
    res.status(401).json({ message: 'You must be logged in.' });
}
