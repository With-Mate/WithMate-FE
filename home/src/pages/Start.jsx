import {Link } from 'react-router-dom';
import Nav from '../components/Nav'

const Start= ()=>{
    return (
        <>
        <header>
        <Nav/>
        </header>
        <Link to="/mate">mate match </Link>
        
        </>
    )
}
export default Start;
