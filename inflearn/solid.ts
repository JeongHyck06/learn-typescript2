//바로 구현해서 씀...
class DatabaseConnection {
    constructor(private readonly IP?, private readonly PORT?, private readonly ID?, private readonly PW?) {}
    connect() {
        console.log('연결');

        return '연결 후 객체';
    }
    disconnect() {
        console.log('연결');
    }
}

interface IRepository {
    save();

    findMany();

    findOneById();

    update();

    delete();
}

interface IQureyRepository extends IRepository {
    findManyByQuery(query);
}

//데이터 베이스 관련 로직
class MongoRepository implements IRepository {
    constructor(private readonly connection: DatabaseConnection) {}
    //CRUD
    save() {
        console.log('mongo 저장');
    }
    findMany() {
        console.log('mongo 데이터 전체 불러오기');
    }

    findOneById() {
        console.log('mongo id로 하나의 데이터 찾기');
    }

    update() {
        console.log('mongo 데이터 정보 업데이트');
    }

    delete() {
        console.log('mongo 데이터 삭제');
    }
}

class MySQLRepository implements IRepository {
    constructor(private readonly connection: DatabaseConnection) {}
    save() {
        console.log('저장');
    }
    findMany() {
        console.log(' mySQL데이터 전체 불러오기');
    }

    findOneById() {
        console.log(' mySQLid로 하나의 데이터 찾기');
    }

    update() {
        console.log(' mySQL데이터 정보 업데이트');
    }

    delete() {
        console.log(' mySQL데이터 삭제');
    }
}

class MySQLQueryRepository extends MySQLRepository implements IQureyRepository {
    findManyByQuery(query) {
        console.log('query로 찾기');
    }
}
const repo: IQureyRepository = new MySQLQueryRepository(new DatabaseConnection());
