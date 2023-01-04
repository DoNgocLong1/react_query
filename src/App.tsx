import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import api from './helper/api'
import { useQuery, useMutation } from 'react-query'
import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const fetchAPI = async () => {
    const res = await axios.get(URL)
    return res.data
  }
  const { data, isLoading } = useQuery(
    ['listPost'],
     () =>
     fetchAPI()
     .then(res => res)
  )

  return (
    <div className="App">
      {/* <button onClick={() => getUserInfo()} >get userInfo</button>
      <div>page</div>
      <input
        value={page}
        onChange={(e: any) => setPage(Number(e.target.value))}
        type="number"
      />
      <div>per page</div>
      <input
        value={perPage}
        onChange={(e: any) => setPerPage(Number(e.target.value))}
        type="number"
      />
      {renderListExample()} */}
      <div style = {{display: 'flex', flexDirection: 'column', gap: '2em' }}>
        {data?.map((item: any, index: number) => (
          <div style = {{display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
            <label key={index} style = {{fontWeight: 'bold' }}>
              {item.title}
            </label>
            <label key={index} >
              {item.body}
            </label>
          </div>
        ))}    
      </div>
    </div>
  )
}

export default App
