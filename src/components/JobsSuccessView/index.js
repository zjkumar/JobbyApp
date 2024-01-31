import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {
  faStar,
  faLocationDot,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons'

import './index.css'

const JobsSuccessView = props => {
  const {jobs} = props

  return (
    <ul className="job-cards-container">
      {jobs.map(each => (
        <li key={each.id} className="job-card">
          <div className="job-card-about-section">
            <div className="job-card-logo-title-rating-section">
              <img
                src={each.company_logo_url}
                alt={each.title}
                className="job-card-logo"
              />
              <div className="job-card-title-rating">
                <p>
                  {each.title}
                  <br />
                  <FontAwesomeIcon
                    className="job-card-rating-icon"
                    icon={faStar}
                  />
                  <span>{each.rating}</span>
                </p>
              </div>
            </div>
            <div className="job-card-location-type-lpa-section">
              <div className="job-card-location-type">
                <p className="job-card-location">
                  <FontAwesomeIcon
                    className="job-card-location-type-icon"
                    icon={faLocationDot}
                  />{' '}
                  {each.location}
                </p>
                <p className="job-card-employment-type">
                  <FontAwesomeIcon
                    className="job-card-location-type-icon"
                    icon={faBriefcase}
                  />{' '}
                  {each.employment_type}
                </p>
              </div>
              <p className="job-card-package">{each.package_per_annum}</p>
            </div>
          </div>
          <hr className="breakline" />
          <div className="job-card-description-section">
            <h3 className="heading">Description</h3>
            <p className="description">{each.job_description}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default JobsSuccessView
