
import './Footer.scss';
import github from '../image/icon/github.svg'
import mail from '../image/icon/mail.svg'

function App() {
  return (
    <div className="footer">
      <div className="footer__wrap">
        <h2 className="footer__title">Connect</h2>
        <h3 className="footer__name">MAYU</h3>
        <p className='footer__mail'>aurakamura@gmai.com</p>
        <a className="footer__icon" href="mailto:aurakamura@gmai.com">
          <img src={mail} alt="mail" width={30} height={30} />
        </a>
        <a className="footer__icon" href="https://github.com/aura0223" target="_blank" rel="noopener">
          <img src={github} alt="git" width={30} height={29} />
        </a>
      </div>
      <div className="footer__label">&copy; MAYU</div>
    </div>
  );
}

export default App;
