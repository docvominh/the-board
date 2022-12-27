import {useEffect, useState} from "react";
import Google from "./Google";
import Github from "./Github";

const LoginDialog = (props) => {

    const close = () => {
        props.setLoginVisible(false);
    };

    const active = props.visible ? 'is-active' : '';
    return (
        <div id="loginDialog" className={`modal ${active}`}>
            <div className="modal-background"/>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Login</p>
                    <button
                        onClick={close}
                        className="delete"
                        aria-label="close"
                    />
                </header>
                <section className="modal-card-body">
                    <div className="field">
                        <Google />
                    </div>

                    <div className="field">
                        <Github/>
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success">Save changes</button>
                    <button onClick={close} className="button">
                        Cancel
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default LoginDialog;