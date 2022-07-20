import "./JoinPage.styles.scss";

import { JoinForm } from "../../components/JoinForm";
import { useUser } from "../../contexts/UserContext";

export function JoinPage(props) {
  const { setUser } = useUser();

  const joinWithUser = (formState) => {
    setUser({ displayName: formState.displayName });
  }

  return (
    <div className="join-page">
      <div className="join-page__title">
         CHAT WITH CATS
         <img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/smiling-cat-with-heart-eyes_1f63b.png" alt="cat emoji" />
      </div>
      <div className="join-page__form">
        <JoinForm onJoin={joinWithUser} />
      </div>
    </div>
  );
}