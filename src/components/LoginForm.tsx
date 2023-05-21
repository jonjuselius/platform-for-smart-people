import React, {useState} from 'react'
import {Button, FloatingLabel, Form} from 'react-bootstrap'

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: Add authentication logic here
    }

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group controlId="formBasicEmail" className={"my-3"}>
                <FloatingLabel controlId="floatingInput" label="E-postadress" className={email}>
                    <Form.Control type="email" placeholder="E-postadress" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FloatingLabel>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className={"my-3"}>
                <FloatingLabel controlId="floatingInput" label="Lösenord" className={password}>
                    <Form.Control type="password" placeholder="Lösenord" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FloatingLabel>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className={"my-3"}>
                <Form.Check type="checkbox" label="Kom ihåg mig" />
            </Form.Group>

            <Form.Group controlId="formBasicLogin" className={"my-3"}>
                <Button variant="primary" type="submit">Logga in</Button>
            </Form.Group>

            <Form.Group controlId="formBasicSignup" className={"my-3"}>
                <a href="#">Skapa konto</a>
            </Form.Group>

        </Form>
    );
}

export default LoginForm;
