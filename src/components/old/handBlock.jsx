
import smartHome from '../../assets/image/smart-home.png'
import hand from '../../assets/image/hand-with-smartphone.png'
import logoAyla from '../../assets/image/logoAyla.png'

const HandBlock = () => {
  return (
    <div className="hand-container">
      <img src={smartHome} alt="smartHome" className="filter-gray hand-block-1"/>
      <div className="hand-block-2">
        <img src={logoAyla} alt="logoAyla" className="logo"/>
      </div>
      <div className="hand-block-3"></div>
      <img src={hand} alt="hand" className="hand"/>
    </div>
  )
}

export default HandBlock