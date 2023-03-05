import logo from '../images/logo.svg'

 function Navbar(){
    return(
        <div className="navbar">
            <img src={logo} alt="" />
            <h5 className='logo-text'>my travel journey</h5>
        </div>
    );
}

export default Navbar;
