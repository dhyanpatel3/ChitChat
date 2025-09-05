// import jwt from 'jsonwebtoken';

// export const generateToken = (user) => {
//     const token = jwt.sign({userId}, process.env.JWT_SECRET);
//     return token;
// }
import jwt from 'jsonwebtoken';

export const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
}