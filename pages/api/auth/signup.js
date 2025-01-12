import bcrypt from 'bcrypt';
import prisma from '@teko/libs/PrismaClient';

export default async function SignUpHandler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }
    if (!req.body) {
        res.status(400).json({ message: 'Bad request' });
        return;
    }
    const {
        name,
        password,
        email,
        role,
        adminPW,
    } = req.body;
    if (role === 'ADMIN') {
        if (adminPW !== process.env.ADMIN_PASSWORD) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
        res.status(200).json({ message: 'User created', user });
    } catch (error) {
        if (error.code === 'P2002') {
            res.status(409).json({ message: 'Email already in use' });
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
