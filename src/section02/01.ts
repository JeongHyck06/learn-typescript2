// type TUser = {
//     id: number;
//     name: string;
// };

import { create } from 'ts-node';

// type TPost = {
//     name: string;
//     content: string;
// };

// type TUserWithPost = TUser & TPost;

// type TUserWithPostWithCreatedAt = TUserWithPost & {
//     createdAt: Date;
// };

// type TUserWithPostWithUpdatedAt = TUserWithPost & {
//     upadateAt: Date;
// };

// const temp2: TUserWithPost & {
//     updateAt: Date;
// } = { id: 1, name: 'inflearn', content: 'typescript', updateAt: new Date() };

// interface IUser {
//     id: number;
//     name: string;
// }

// interface IPost {
//     name: string;
//     content: string;
// }

// interface IUserWithPost extends IUser, IPost {}
// interface IUserWithPostWithCreatedAt extends IUserWithPost {
//     createdAt: Date;
// }

// interface IUserWithPostWitUpdateAt extends IUserWithPost {
//     updateAt: Date;
// }

const something2 = {
    id: 1,
    name: 'inflearn',
    detail: {
        isOpen: true,
        isClosed: false,
        createdAt: Date,
        description: 'typescript',
    },
} as const;

type ISomtiong = typeof something2;
