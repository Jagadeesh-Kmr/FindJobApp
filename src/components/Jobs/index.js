import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import JobsView from '../JobsView'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const Products = () => {
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  })

  const getJobsData = async () => {
    setApiResponse({
      status: apiStatusConstants.inProgress,
      data: null,
      errorMsg: null,
    })

    const url = 'https://testapi.getlokalapp.com/common/jobs?page=1'

    const response = await fetch(url)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const {results} = fetchedData
      const updatedData = {
        id: results.id,
        title: results.title,
      }
      console.log(updatedData)
      setApiResponse(prevApiDetails => ({
        ...prevApiDetails,
        status: apiStatusConstants.success,
        data: results,
      }))
    } else {
      setApiResponse(prevApiDetails => ({
        ...prevApiDetails,
        status: apiStatusConstants.failure,
        errorMsg: 'We cannot find any jobs',
      }))
    }
  }

  const renderSuccessView = () => {
    const {data} = apiResponse
    return (
      <>
        <ul>
          {data.map(eachData => (
            <JobsView key={eachData.id} jobsData={eachData} />
          ))}
        </ul>
      </>
    )
  }

  useEffect(() => {
    getJobsData()
  }, [])

  const renderFailureView = () => {
    const {errorMsg} = apiResponse
    return <p>{errorMsg}</p>
  }

  const renderLoadingView = () => (
    <div className="loading-div">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />{' '}
    </div>
  )

  const renderProducts = () => {
    const {status} = apiResponse

    switch (status) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <div className="jobs-main-div">{renderProducts()}</div>
    </>
  )
}

export default Products
