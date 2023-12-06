import Button from "./Button"

function Home (){
    return (
        <div className='home_container'>
            <div className='home_container_game'>
                <h3>What should I do today?</h3>
                <Button text='Play'/>
            </div>

        </div>
    )
}

export default Home