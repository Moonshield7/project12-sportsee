import './style.css'

function TitleArea ({userName}) {
  return (
    <div className="title-area">
      <h1>Bonjour <span className='name-user'>{userName}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default TitleArea