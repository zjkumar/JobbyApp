import {withRouter} from 'react-router-dom'

import {useMediaQuery} from 'react-responsive'

import './index.css'

const HomeBody = props => {
  const handleFindJobs = () => {
    const {history} = props
    history.push('/jobs')
  }

  const isExsmallAndSmallDevice = useMediaQuery({query: '(max-width: 767px)'})
  return (
    <div
      className={
        isExsmallAndSmallDevice ? 'home-body-layout-sm' : 'home-body-layout-lg'
      }
    >
      {isExsmallAndSmallDevice ? (
        <h1 className="home-heading-sm">Find the job that fits your life</h1>
      ) : (
        <h1 className="home-heading-lg">
          Find The Job That <br /> Fits Your Life
        </h1>
      )}
      {isExsmallAndSmallDevice ? (
        <p className="home-description-sm">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
      ) : (
        <p className="home-description-lg">
          Millions of people are searching for jobs, salary <br /> information,
          company reviews. Find the job that fits your <br /> abilities and
          potential.
        </p>
      )}
      <button
        className={isExsmallAndSmallDevice ? 'btn-sm' : 'btn-lg'}
        type="button"
        onClick={handleFindJobs}
      >
        Find Jobs
      </button>
    </div>
  )
}

export default withRouter(HomeBody)
