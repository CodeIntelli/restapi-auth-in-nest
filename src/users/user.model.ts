import * as mongoose from "mongoose";
import * as bcrypt from 'bcrypt';

enum Role {
    CEO = 'CEO', MANAGER = 'MANAGER', HR = 'HR', OTHER = 'OTHER'
}
export const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: Role.CEO,
            enum: Role,
        }
    },
    { timestamps: true }
)

// @ts-ignore
UserSchema.pre('save', async function (next: mongoose.HookNextFunction) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const hashed = await bcrypt.hash(this['password'], 10);
        this['password'] = hashed;
        return next();
    } catch (err) {
        return next(err);
    }
});
