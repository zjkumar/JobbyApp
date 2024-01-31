import './index.css'

const SalaryRangeFilter = props => {
  const {salaryRangesList, onClickSalaryRange} = props

  const handleSalaryRange = e => {
    onClickSalaryRange(e.target.value)
  }

  return (
    <>
      <h1 className="filters-heading">Salary Range</h1>
      <ul className="filters-list">
        {salaryRangesList.map(each => (
          <li className="filter-list-item" key={each.salaryRangeId}>
            <input
              type="radio"
              name="salaryFilter"
              id={each.salaryRangeId}
              onChange={handleSalaryRange}
              value={each.salaryRangeId}
            />
            <label htmlFor={each.salaryRangeId} name={each.salaryRangeId}>
              {each.label}
            </label>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SalaryRangeFilter
