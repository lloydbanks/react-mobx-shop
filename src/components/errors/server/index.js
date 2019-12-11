import React from 'react'

export default function() {
  return (
    <>
      <h1 className="text-danger">Server is down</h1>
      <div className="alert alert-danger">
        <p>To make it work please run:</p>
        <p><code>npm run server</code></p>
        <p>
          More info:{' '}
          <a target="_blank" href="https://github.com/typicode/json-server">
            https://github.com/typicode/json-server
          </a>
        </p>
      </div>
    </>
  )
}
