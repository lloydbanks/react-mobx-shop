import {observable, computed, action} from 'mobx'

export default class {
    @observable notifications = {}
    _i = 0

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @computed get list() {
        return Object.values(this.notifications)
    }

    @action add(message, type = 'error', hideTime = 5000) {
        this.notifications[++this._i] = {
            id: this._i,
            message,
            type
        }

        if(hideTime !== null) {
            const i = this._i

            setTimeout(() => {
                this.remove(i)
            }, hideTime)
        }
    }

    @action remove(id) {
        if(id in this.notifications) {
            delete this.notifications[id]
        }
    }
}