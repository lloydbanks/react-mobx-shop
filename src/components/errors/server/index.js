import React from 'react'
import {Link} from 'react-router-dom'
import {routesMap} from '@/routes'

export default function() {
    return (
        <>
            <h1 className="text-danger">Server is down</h1>
            <div className="alert alert-danger">
                <h3>Install JSON Server</h3>
                <code>npm install -g json-server</code>

                <h3>Start JSON Server</h3>
                <code>npm run server</code>

                <p>More info: <a target="_blank" href="https://github.com/typicode/json-server">
                        https://github.com/typicode/json-server
                    </a>
                </p>
            </div>
        </>
    )
}