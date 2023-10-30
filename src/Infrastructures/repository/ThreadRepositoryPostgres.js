const ThreadReporsitory = require("../../Domains/thread/ThreadRepository");

class ThreadRepositoryPG extends ThreadReporsitory{
    constructor(pool,idGenerator){
        super();
        this._pool=pool
        this._idGenerator=idGenerator
    }
    async addThread(input){
        const {title,body,user} = input
        const id=`td-${this._idGenerator}`
        const query={
            text:'INSERT INTO threads Values($1,$2,$3)',
            values:[id,title,body,user]
        }
        const result = await this._pool(query)
        return result
    }
}

module.exports = ThreadRepositoryPG