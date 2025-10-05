import './styles.css';


function Opinions() {


    return (
        <div className='feedbacks'>
            <div style={{display: 'flex', width: '100%', justifyContent: 'center', height: '40px'}}>

            <h3>O que nossos cliente dizem: </h3>
            </div>
            <div className='opinions'>
                <span className='client-one'>
                    <p className='client-one-opinion'>"Nunca experimentei nada igual! Uma delícia!"</p>
                    <p className='client-one-name'>- Alex</p>
                </span>
                <span className='client-one'>
                    <p className='client-one-opinion'>"Nunca experimentei nada igual! Uma delícia!"</p>
                    <p className='client-one-name'>- Alex</p>
                </span>
                <span className='client-one'>
                    <p className='client-one-opinion'>"Nunca experimentei nada igual! Uma delícia!"</p>
                    <p className='client-one-name'>- Alex</p>
                </span>
            </div>
        </div>
    )
}

export default Opinions;