
import Navbar from '../common/header/navbar/Navbar';
import {Link} from 'react-router-dom';
import Footer from '../common/footer/Footer';
import logo from './../../assets/images/ajker-arban-1.png';

function Login(){
    return(
        <div className="page-wrapper">
            <Navbar />
            <div className="login-wrapper">
                <div className="login-wrapper__content">
                    <div className="login-wrapper__content--title">Login to <img src={logo} alt="Ajker Arban" /></div>
                    <form>
                        <div className="form-wrap">
                            <input type="email" name="email" placeholder="username or email" />
                        </div>
                        <div className="form-wrap">
                            <input type="password" name="password" placeholder="password" />
                        </div>
                        <div className="form-wrap">
                            <button type="submit" name="login">Login</button>
                            <div className="forget-box">Can't remember login credentials? <Link to="/">Reset password</Link></div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;