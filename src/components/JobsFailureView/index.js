import './index.css'

const JobsFailureView = props => {
  const {fetchAllJobs} = props
  const onRetryFetchingJobs = () => fetchAllJobs()
  return (
    <div className="jobs-failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="jobs-failure-view-img"
      />
      <h1 className="jobs-failure-view-heading">Oops! Something went wrong</h1>
      <p className="jobs-failure-view-info">
        We cannot seem to find the page <br />
        you are looking for.
      </p>
      <button
        type="button"
        className="jobs-failure-view-retry-btn"
        onClick={onRetryFetchingJobs}
      >
        Retry
      </button>
    </div>
  )
}

export default JobsFailureView
