import { useEffect, useState } from 'react';
import './styles.css';


function Opinions() {
    const [loading, setLoading] = useState(true);
    const [names, setNames] = useState([]);
    const [opnions, setOpnions] = useState([]);

    useEffect(() => {
        fetch("https://apifjcdoces.onrender.com/opnion")
            .then((res) => res.json())
            .then((json) => {
                const allNames = json.map(it => it.name);
                const allOpnions = json.map(op => op.description);
                setNames(allNames);
                setOpnions(allOpnions);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Carregando...</p>;

    return (
        <div className='feedbacks'>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', height: '40px' }}>

                <h3>O que nossos cliente dizem: </h3>
            </div>
            <div className='opinions'>
                <span className='client-one'>
                    <p className='client-one-opinion'>{`"${opnions[1]}"`}</p>
                    <p className='client-one-name'>- {names[1]}</p>
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