import {useEffect, useState} from "react";

const GoogleLogin = () => {
    const [isClient, setIsClient] = useState(false)


    function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
    }

    useEffect(() => {
        // update some client side state to say it is now safe to render the client-side only component
        setIsClient(true);
        google.accounts.id.initialize({
            client_id: "3867183320-1luhi7mausdj5p4frmat4cnqsmic3s8i.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            {theme: "outline", size: "large"}  // customization attributes
        );
        google.accounts.id.prompt(); // also display the One Tap dialog
    }, []);

    return (
        <div>
            <div id="buttonDiv"></div>
            {/*<div id="g_id_onload"*/}
            {/*     data-client_id="3867183320-1luhi7mausdj5p4frmat4cnqsmic3s8i.apps.googleusercontent.com"*/}
            {/*     data-login_uri="localhost:3000"*/}
            {/*     data-auto_prompt="false">*/}
            {/*</div>*/}
            {/*<div className="g_id_signin"*/}
            {/*     data-type="standard"*/}
            {/*     data-size="large"*/}
            {/*     data-theme="outline"*/}
            {/*     data-text="sign_in_with"*/}
            {/*     data-shape="rectangular"*/}
            {/*     data-logo_alignment="left">*/}
            {/*</div>*/}
        </div>
    )


}

export default GoogleLogin;