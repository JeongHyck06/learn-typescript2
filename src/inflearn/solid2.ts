interface IUser {
    id: string;
    name: string;
}

interface IPost {
    id: number;
    title: string;
}

interface IRepository {
    findMany();
    findOne();
}

abstract class NewRepository<T> implements Omit<IRepository, 'findMany'> {
    abstract findOne(): T;
}

abstract class Repository<T> implements IRepository {
    abstract findMany(): T[];
    abstract findOne(): T;
}

class MongoRepository extends Repository<IUser> {
    findMany(): IUser[] {
        return [
            {
                id: 'objectId-1',
                name: 'yongsoo',
            },
            {
                id: 'objectId-2',
                name: 'inflearn',
            },
        ];
    }
    findOne(): IUser {
        return {
            id: 'objectId-1',
            name: 'yongsoo',
        };
    }
}

class MySQLRepository extends Repository<IPost> {
    findMany(): IPost[] {
        return [
            {
                id: 1,
                title: 'hello world',
            },
            {
                id: 2,
                title: 'asd',
            },
        ];
    }
    findOne(): IPost {
        return {
            id: 1,
            title: 'hello world',
        };
    }
}

const repo: Repository<IUser> = new MongoRepository();
