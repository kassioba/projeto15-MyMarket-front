import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../UserContext";
import { SingInContainer } from "./SignInStyles";

export default function SignInPage() {
    const [form, setForm] = useState({ email: "", password: "" })
    const [disableButton, setDisableButton] = useState(true);
    const [sendSignIn, setSendSignIn] = useState(false);
    const navigate = useNavigate();

    const { setToken } = useContext(UserContext);

    useEffect(() => {
        if (form.email && form.password) {
            setDisableButton(false)
        } else {
            setDisableButton(true)
        }
    }, [form])

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function submitSignIn(e) {
        e.preventDefault();
        setSendSignIn(true);
        axios.post("https://mymarket.onrender.com/signIn", form)
            .then((res) => {
                setSendSignIn(false)
                setToken(res.data);
                setDisableButton(true);
                setSendSignIn(false);
                navigate("/");
            })
            .catch((err) => {
                alert(`${err.message}\n${err.request.statusText} ${err.request.status}`);
                setDisableButton(true);
                setSendSignIn(false);
            });
    }
    return (
        <SingInContainer>
            <form onSubmit={submitSignIn}>
                <h1>MyMarket</h1>
                <input
                    placeholder="E-mail"
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                    required
                    disabled={sendSignIn}
                />
                <input
                    placeholder="Senha"
                    type="password"
                    autoComplete="new-password"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                    required
                    disabled={sendSignIn}
                />
                <button disabled={disableButton || sendSignIn}>Entrar</button>
            </form>

            <Link to={"/cadastro"} >
                Primeira vez? Cadastre-se!
            </Link>
        </SingInContainer>
    )
}

