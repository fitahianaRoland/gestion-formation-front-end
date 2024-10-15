import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

async function sendData(data, navigate, setError) {
    try {
        const response = await axios.post('https://localhost:7008/api/Auth/login', null, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            params: {
                nom: data.nom,
                password: data.password,
            },
        });

        const resultText = response.data;

        console.log('Réponse de l\'API:', resultText);

        if (!resultText.token) { 
            setError('Identifiants incorrects. Veuillez réessayer.'); 
            return false;
        } else {
            sessionStorage.setItem('token', resultText.token); 
            navigate('/Acceuil'); 
            return true;
        }
    } catch (error) {
        console.error('Erreur lors de la requête:', error.response ? error.response.data : error.message);
        
        if (error.response && error.response.data && error.response.data.message) {
            setError(error.response.data.message); 
        } else {
            setError('Erreur lors de la connexion. Veuillez réessayer.'); 
        }
        return false;
    }
}

function Login() {
    const [formData, setFormData] = useState({
        nom: '',
        password: '',
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const success = await sendData(formData, navigate, setError);

            if (!success) {
                setError('Identifiants incorrects. Veuillez réessayer.');
            }
        } catch (error) {
            console.error('Erreur inattendue:', error);
            setError('Erreur inattendue. Veuillez réessayer.');
        }
    };
    

    return (
        
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth update-login">
                    <div className="row flex-grow">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left p-5">
                                <div className="brand-logo">
                                    <h1 style={{ color: 'black' }}>Login</h1>
                                </div>
                                <form className="pt-3" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="nom"
                                            className="form-control form-control-lg"
                                            id="exampleInputNom1"  
                                            placeholder="Nom" 
                                            value={formData.nom}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control form-control-lg"
                                            id="exampleInputPassword1"
                                            placeholder="Password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <button
                                            type="submit"
                                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn "
                                        >
                                            SIGN IN
                                        </button>
                                    </div>
                                    {error && <div className="text-danger mt-3">{error}</div>}
                                    <div className="text-center mt-4 font-weight-light">
                                        Don't have an account?{' '}
                                        <a href="register.html" className="text-primary">
                                            Create
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;
