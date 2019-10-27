import React from 'react'
import store from '@c/hocs/store'
import styles from './index.module.css'

class Notifications extends React.Component {
    render() {
        const model = this.props.stores.notifications
        const messages = model.list.map(item => {
            return <div
                    key={item.id}
                    className="alert alert-danger"
                    onDoubleClick={() => model.remove(item.id)}
            >{item.message}</div>
        })

        return (
            <div className={styles.box}>
                {messages}
            </div>
        )
    }
}

export default store(Notifications)