class AddedThread {
    constructor(payload) {
        this._verifyPayload(payload)
        const { body, title, owner } = payload
        this.body = body
        this.title = title
        this.owner = owner
    }
    async _verifyPayload({ body, title, owner }) {
        if (!body || !title || !owner) throw new Error('REGISTERED_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
        if (typeof body !== 'string' || typeof title !=='string' || typeof owner !=='title') throw new Error('REGISTERED_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
        if (title.length > 50) throw new Error('ADD_THREAD.TITLE_LIMIT_CHAR');
    }
    
}

module.exports = AddedThread;