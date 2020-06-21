import React, { useState } from 'react';
import axios from 'axios'
import QRCode from 'qrcode.react'
import './App.css';
import Spinner from './Spinner'
function App() {
  const [url, setUrl] = useState('')
  const [shortUrl, setShort] = useState('')
  const [loading, setLoading] = useState(false)
  const submit = async (e) => {
    e.preventDefault()
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      setLoading(true)
      const res = await axios.post('/api/url/short', { url }, config)
      setLoading(false)
      setShort(res.data.shortUrl)
    } catch (err) {
      console.log(err.response.data.msg)
    }
  }
  return (
    <header id="showcase">
      <div className="container">
        <div className="showcase-container">
          <div className="showcase-content">
            <div className="display-1">Short Your URL</div>
            <div className="row">
              <div className="col-sm-8 offset-sm-2">
                <form onSubmit={submit}>
                  <input type="text" className='form-control my-4' value={url} onChange={(e) => { setUrl(e.target.value) }} />
                  <input type="submit" value="Shorten" className='btn btn-block btn-primary' />
                </form>
                {
                  <div className="my-4">
                    {loading ? <Spinner /> : null}
                  </div>
                }
                <div className="text-center">
                  <div className="my-4">
                    {
                      shortUrl && !loading ? <a className='text-white my-4' href={shortUrl}>{shortUrl}</a> : null
                    }
                  </div>
                  <div className="my-4">
                    {
                      shortUrl && !loading ? <QRCode value={shortUrl} size={256} /> : null
                    }
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
