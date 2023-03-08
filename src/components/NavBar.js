import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProgressBar from 'react-bootstrap/ProgressBar'
// import Image from '../images/static.svg'



const NavBar = ({ user, dayTotals }) => {


    if (user) {
   
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container className='navbar-container' >
                <Navbar.Brand href="/">{user.name}, Welcome to macrOS</Navbar.Brand>
                {/* <img src={Image} alt="" width='30' height='24'/> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/journal">Journal</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/">Calories
                            <ProgressBar striped animated min={0} max={user.caloriesGoal} now={dayTotals.calories} label={`${dayTotals.calories}kcal / ${user.caloriesGoal}kcal`} />
                        </Nav.Link>
                        <Nav.Link href="/">Protein
                            <ProgressBar striped animated variant="success" max={user.proteinGoal}  now={dayTotals.protein} label={`${dayTotals.protein}g / ${user.proteinGoal}g`} />
                        </Nav.Link>
                        <Nav.Link href="/">Carbs
                        <ProgressBar striped animated variant="warning" max={user.carbsGoal}  now={dayTotals.carbs} label={`${dayTotals.carbs}g / ${user.carbsGoal}g`}/>
                        </Nav.Link>
                        <Nav.Link href="/">Fat
                        <ProgressBar striped animated variant="danger" max={user.fatGoal}  now={dayTotals.fat} label={`${dayTotals.fat}g / ${user.fatGoal}g`} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    ) 

} else {
    return (
        <Navbar bg="light" expand="lg" sticky="top"  >
            <Container>
                <Navbar.Brand href="/" id="onb-nav-title">macrOS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Container>
        </Navbar>
    ) 
}}

    

export default NavBar;