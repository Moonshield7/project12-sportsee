import './style.css';

function Loader() {
return <div className='loader-container'>
  <h1> Chargement des données en cours</h1>
  <div className='spinning-loader'></div>
</div>;
}

export default Loader;