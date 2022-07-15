import { JoinForm } from "../../components/JoinForm/JoinForm.component";
import "./JoinPage.styles.scss";



export function JoinPage (props) {
    return (
        <div className="join-page" >
            <div className="join-page__title" >Chat with friends</div>
            <div className="join-page__form">
                <JoinForm />
            </div>
        </div>
    );
}