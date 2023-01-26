import express from 'express'

const app = express()

// Define the API routes
app.use('/api', require('./routes'))

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000')
})