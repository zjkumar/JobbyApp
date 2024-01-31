import Loader from 'react-loader-spinner'

import JobsSuccessView from '../JobsSuccessView'

import JobsNotFoundView from '../JobsNotFoundView'

import JobsFailureView from '../JobsFailureView'

import './index.css'

const JobsResults = props => {
  const {jobs, jobsFetchingStatus, fetchAllJobs} = props
  console.log(jobs)
  if (jobsFetchingStatus === 'pending') {
    return (
      <div className="loader-container">
        <Loader width={50} height={50} />
      </div>
    )
  }
  if (jobsFetchingStatus === 'success') {
    return <JobsSuccessView jobs={jobs} />
  }
  if (jobsFetchingStatus === 'noJobs') {
    return <JobsNotFoundView />
  }
  return <JobsFailureView fetchAllJobs={fetchAllJobs} />
}

export default JobsResults
