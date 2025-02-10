import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa
 from './components/Pessoa';
function App() {

  const url = 'https://picsum.photos/200'
  const nome = "Pedro"
  return (
    //<></> Elementos dentro duma tag não nomeada também funciona.
    <div className="App">
      <HelloWorld/>
      <SayMyName nome="Augusto"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Augusto" idade="22" profissao="Dessenvolvedor" foto={url}/>
    </div>
  );
}

export default App;
