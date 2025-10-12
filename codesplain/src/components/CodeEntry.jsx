import React from 'react'
import Header from '../components/Header'
import CodeExplainForm from './forms/CodeExplainForm'
import './CodeEntry.css'

const CodeEntry = () => {
  return (
    <div className="code-entry">
      <Header />
      <CodeExplainForm />
    </div>
  )
}

export default CodeEntry
