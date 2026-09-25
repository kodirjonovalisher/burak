import mongoose, { Schema } from 'mongoose';
import { MemberStatus, MemberType } from '../libs/enums/member.enum';

// Scheme firts and Code first

const memberScheme = new Schema({
    memberType: {
        type: String,
        enum: MemberType,
        default: MemberType.USER,
    },

    memberStatus: {
        type: String,
        enum: MemberStatus,
        default: MemberStatus.ACTIVE,
    },

    memberNick: {
        type: String,
        index: { unique: true, sparse: true },
        required: true,
    },

    memberPhone: {
        type: String,
        index: { unique: true, sparse: true },
        required: true,
    },

    memeberPassword: {
        type: String,
        select: false,
        required: true,
    },

    memeberAddress: {
        type: String,
    },

    memeberDesc: {
        type: String,
    },

    memeberImages: {
        type: String,
    },

    memeberPoints: {
        type: Number,
        default: 0,
    },
},
    { timestamps: true } // updateAt, createdAt
);

export default mongoose.model('Member', memberScheme);