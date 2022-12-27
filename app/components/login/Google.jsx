import {useEffect} from "react";

const Google = () => {

    function handleCredentialResponse(response) {
        localStorage.setItem('auth_token', response.credential);
    }

    function showLogin() {
        // update some client side state to say it is now safe to render the client-side only component
        google.accounts.id.initialize({
            client_id: "3867183320-1luhi7mausdj5p4frmat4cnqsmic3s8i.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            {theme: "outline", size: "large"}  // customization attributes
        );
        google.accounts.id.prompt(); // also display the One Tap dialog
    }

    useEffect(() => {
        showLogin();
    }, []);

    return (<div>
        <div id="buttonDiv"></div>
    </div>);


}

export default Google;