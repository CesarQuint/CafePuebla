import { TiSocialTwitterCircular as Twitter,TiSocialLinkedinCircular as LinkEdIn ,TiSocialGithubCircular as GitHub} from "react-icons/ti";
import NavBar from './navBar'

function Footer() {
  return (
    <footer>
        <NavBar/>
        <section id='redes'>
            <a className='a-2' target='_blank' href='https://twitter.com/Cesar_Quint_'><Twitter/></a>
            <a className='a-2' href='https://www.linkedin.com/in/cesar-quintero-267764209/'><LinkEdIn/></a>
            <a className='a-2' href='https://github.com/CesarQuint'><GitHub/></a>
        </section>
    </footer>
  )
}

export default Footer