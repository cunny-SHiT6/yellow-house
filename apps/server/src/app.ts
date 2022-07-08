import type { Application } from 'express'
import fetch from "node-fetch";
// import axios from 'axios'
import express from 'express'
import cors from 'cors'

import { audit } from './lib'

const app: Application = express()

app.use(express.json())
app.use(cors({ origin: '*' }))

app.get('/aaa', async (req, res) => {
  try {
    const url: any = req.query.url

    if (!url) {
      return res.status(401).json({ ok: false, message: 'Url is required' })
    }

    console.log(url)

    const fetched = await fetch(url)
    const html = await fetched.text()
    // console.log(html)
    const result: any = audit(html, '')

    res.status(200).json({ ok: true, message: 'Successful', data: result })

  } catch (err) {
    console.log(err)
    res.status(500).json({ ok: false, message: 'Only absolute URL support ex.\"https://gusbell.tech\"' }) 
  }
  
})

export default app
