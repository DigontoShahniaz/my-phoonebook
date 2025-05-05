// eslint-disable-next-line react/prop-types
const Filter = ({filter, handleFilterChange}) => {
  return (
    <div>
      filter shown with <input value={filter} onChange={handleFilterChange} />
    </div>
  )
}

export default Filter