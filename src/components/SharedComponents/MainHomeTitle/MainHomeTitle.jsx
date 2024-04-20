import './MainHomeTitle.css'

const MainHomeTitle = ( { title, subtitle } ) => {
  return (
    <div className="main-home-title">
      <h1>{ title }</h1>
      {subtitle && <h2>{ subtitle }</h2>}
    </div>
  )
}

export default MainHomeTitle