import NavBar from "../components/NavBar.js";
import BrazoCard from "../components/cards/BrazoCard";
import PechoCard from "../components/cards/PechoCard";
import AbdominalCard from "../components/cards/AbdominalCard";
import Footer from "../components/Footer";
import PiernaCard from "../components/cards/PiernaCard";
import EspaldaCard from "../components/cards/EspaldaCard";


const divider = <div style={{paddingTop: '50px', backgroundColor:'#1b263b'}}/>

function Home(){
    return(
        <div style={{backgroundColor:'#212529'}}>
            <NavBar/>
            {divider}
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
                <BrazoCard/>
                <PechoCard/>
                <PiernaCard/>
                <AbdominalCard/>
                <EspaldaCard/>
            </div>
            {divider}
            <Footer/>
        </div>
    )
}

export default Home;