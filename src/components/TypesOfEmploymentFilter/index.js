import './index.css'

const TypesOfEmploymentFilter = props => {
  const {employmentTypesList, onClickEmploymentType} = props

  const onChangeEmploymentType = e => {
    onClickEmploymentType(e.target.value)
  }

  return (
    <>
      <h1 className="filters-heading">Types of Employment</h1>
      <ul className="filters-list">
        {employmentTypesList.map(each => (
          <li className="filter-list-item" key={each.employmentTypeId}>
            <input
              type="checkbox"
              id={each.employmentTypeId}
              name={each.label}
              onChange={onChangeEmploymentType}
              value={each.employmentTypeId}
            />
            <label htmlFor={each.employmentTypeId} name={each.label}>
              {each.label}
            </label>
          </li>
        ))}
      </ul>
      <hr className="breakline" />
    </>
  )
}

export default TypesOfEmploymentFilter
