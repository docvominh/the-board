import {useEffect, useState} from "react";

const Google = () => {
    const [isAuth, setIsAuth] = useState(false);


    function handleCredentialResponse(response) {
        console.log(response)
        console.log(JSON.parse(atob(response.credential.split('.')[1])))
        localStorage.setItem('auth_token',response.credential);
    }

    function showLogin(){
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
        let token = localStorage.getItem('auth_token');
        if(token == null){
            setIsAuth(false)
            showLogin();
        }else {
            setIsAuth(true)
        }
    }, []);

    if(!isAuth) return (<div><div id="buttonDiv"></div></div>);

    return (
        <div></div>
    )


}

export default Google;