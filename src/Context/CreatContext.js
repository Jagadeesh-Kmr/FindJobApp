import React from 'react'

const Context = React.createContext({
  submit: true,
  toggleSubmit: () => {},
  jobsList: [],
  addJob: () => {},
  deleteJob: () => {},
})

export default Context
