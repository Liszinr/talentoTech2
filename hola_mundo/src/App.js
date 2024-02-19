
import './App.css';
import Perfil from './componentes/Perfil';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>
          Mis desarrolladores favoritos son:
        </h1>
        <Perfil
          nombre='Brais Moure'
          pais='España'
          imagen='brais'
          cargo='Ingeniero de Software'
          empresa='MoureDev'
          perfil='Informático freelance emprendedor y amante de la tecnología. Sus principales competencias son la arquitectura de proyectos, la consultoría y el desarrollo de software centrado, sobre todo, en aplicaciones iOS, Android y web.
          Posee conocimientos sobre diseño gráfico y corporativo.'
          linkedin='https://www.linkedin.com/in/braismoure'
          youtube='https://www.youtube.com/@mouredev'
          twitter='https://twitter.com/MoureDev'
        />
        <Perfil
          nombre='Diego De Granda '
          pais='México'
          imagen='diego'
          cargo='Ingeniero de Software'
          empresa='Platzi'
          perfil='Además de su experiencia en el campo de la tecnología, Diego De Granda también ha creado comunidades durante más de 10 años y disfruta organizando eventos de emprendimiento y tecnología para la comunidad. Él cree firmemente que compartir es crecer.'
          linkedin='https://www.linkedin.com/in/diegodegranda'
          youtube='https://www.youtube.com/watch?v=A1HbVmCmrm4'
          twitter='https://twitter.com/degranda10?lang=es'
        />
        <Perfil
          nombre='Miguel Angel Durán'
          pais='México'
          imagen='midudev'
          cargo='Ingeniero de Software'
          empresa='miduDev'
          perfil='Además de su experiencia en el campo de la tecnología, Diego De Granda también ha creado comunidades durante más de 10 años y disfruta organizando eventos de emprendimiento y tecnología para la comunidad. Él cree firmemente que compartir es crecer.'
          linkedin='https://www.linkedin.com/company/midudev/about/'
          youtube='https://www.youtube.com/c/midudev'
          twitter='https://twitter.com/midudev?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
        />
      </div>
    </div>
  );
}

export default App;
