import '../styles/Home.css';
import '../styles/App.css';
export function Home(){
    return (
        <div className='homePage'>
            <div className="homePageContent">
                <div className='textOnHomeTitle'>Strona do Zabawy</div>
                <div className='textOnHome'> jak widać strona zawiera:</div>
                <ul className='ulHome'>
                    <li>koty</li>
                    <li>psy</li>
                    <li>memy</li>
                </ul>
                <div className='textOnHome'> Miłej zabawy</div>
                <div className='textOnHomePs'> *tylko koty działają</div>
            </div>
        </div>
    )
}