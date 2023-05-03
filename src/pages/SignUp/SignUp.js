import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { SingUpContainer } from "./SignUpStyled";
import Context from "../../Context";

export default function SignUpPage() {

    const context = useContext(Context)
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: ""});
    const [disableButton, setDisableButton] = useState(true);
    const [sendSignUp, setSendSignUp] = useState(false);
    const navigate = useNavigate();

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if (form.name && form.email && form.password) {
            setDisableButton(false)
        } else {
            setDisableButton(true)
        }
    }, [form])

    function submitSignUp(e){
        e.preventDefault();
        setSendSignUp(true);
        if(form.password !== form.confirmPassword){
            alert("Senha diferente da senha de confirmação")
            setDisableButton(true);
            setSendSignUp(false);
        }else{
            const toSend = {
                name: form.name,
                email: form.email,
                password: form.password
            }

            axios.post(`${context.url}signUp`, toSend)
            .then((res) => {      
                setDisableButton(true);
                setSendSignUp(false);
                navigate("/");
            })
            .catch((err) => {
                alert(`${err.message}\n${err.request.statusText} ${err.request.status}`);
                setDisableButton(true);
                setSendSignUp(false);
            });
        }
    }

    return (
        <SingUpContainer>
            <form onSubmit={submitSignUp}>
                <h1>MyMarket</h1>
                <input
                    placeholder="Nome"
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                    required
                    disabled={sendSignUp}
                />
                <input
                    placeholder="E-mail"
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                    required
                    disabled={sendSignUp}
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
                    disabled={sendSignUp}
                />
                <input
                    placeholder="Confirme a senha"
                    type="password"
                    autoComplete="new-password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleForm}
                    required
                    disabled={sendSignUp}
                />
                <button disabled={disableButton||sendSignUp}>Cadastrar</button>
            </form>

            <p onClick={() => navigate("/")}>
                Já tem uma conta? Entre agora!
            </p>
        </SingUpContainer>
    )
}
