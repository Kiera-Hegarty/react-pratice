import Button from "./Button";
import EmailForm from "./EmailForm";
import MessageForm from "./MessageForm";
import NameForm from "./NameForm";

const ContactBody = () => {
    return (  
        <div>
            <p> Please enter information to Contact us</p>
            <NameForm />
            <EmailForm />
            <MessageForm />
            <Button />
        </div>
    );
}
 
export default ContactBody;