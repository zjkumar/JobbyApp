import './index.css'

const JobsNotFoundView = () => (
  <div className="no-jobs-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
      alt="no jobs"
      className="no-jobs-img"
    />
    <h1 className="no-jobs-heading">No Jobs Found</h1>
    <p className="no-jobs-instruction">
      We could not find any jobs. Try <br /> other filters.
    </p>
  </div>
)

export default JobsNotFoundView
