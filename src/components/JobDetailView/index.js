import Header from '../Header'

import './index.css'

const JobDetailView = props => {
  const {match} = props
  const {params} = match
  const {id} = params
  console.log(id)

  return (
    <>
      <Header />
      <div className="jbv-main-div">
        <h1 className="jbv-h1">Job Detail View</h1>
      </div>
    </>
  )
}

export default JobDetailView
