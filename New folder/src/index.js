import ReactDOM from 'react-dom/client';
import { Cv } from './cv/Cv';
import { Event } from './Event';
import {Feedback} from './feedback-reactapp/Feedback';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
const root = ReactDOM.createRoot(document.getElementById('root'));
/* 
Alt+shift+A : commentaires multiple
Alt+shift+F : Formatage du code
ctrl+espace : auto-complete
*/

/* const title = "Bonjour"

const btn_primary = (text) => {
  return <button style={{ background: 'blue', color: 'white' }}>{text}</button>
} */
root.render(
  <>
    <Feedback />
  </>
);



