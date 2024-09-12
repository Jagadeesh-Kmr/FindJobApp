// import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const JobsView = props => {
  const {jobsData} = props
  const {title, type} = jobsData
  const jobItemDiv =
    type === 1040 ? 'job-empty-container' : 'job-item-container'
  return (
    <>
      <li className={jobItemDiv}>
        <div>
          <div className="img-title-container">
            <div className="title-rating-container">
              <h1 className="company-heading">companyName</h1>
              <div className="star-rating-container">
                <AiFillStar className="star-icon" />
                <p className="rating-text">rating</p>
              </div>
            </div>
          </div>
          <div className="location-package-container">
            <div className="location-icon-container">
              <MdLocationOn className="location-icon" />
              <p className="location">place</p>
            </div>
            <div className="job-type">
              <p>employmentType</p>
            </div>
            <div className="package">
              <p className="lpa">salary</p>
            </div>
          </div>
        </div>
        <hr className="item-hr-line" />
        <div className="second-part-container">
          <h1 className="description-heading">Job Description</h1>
          <p className="description-para">{title}</p>
        </div>
      </li>
    </>
  )
}

export default JobsView
