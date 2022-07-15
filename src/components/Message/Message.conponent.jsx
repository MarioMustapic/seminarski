import { Avatar } from "../Avatar/Avatar.conponent";
import { MessageText } from "../MessageText/MessageText.conponent";
import "./Message.styles.scss";

export function Message (props) {
    return (
        <div className="message" >
            <div className="message__avatar" >
                <Avatar
                backgroundColor={props.avatarBackgroundColor}
                text={props.avatarText}
                />
            </div>
            <div className="message__text" >
                <MessageText
                    displayName={props.displayName}
                    time={props.time}
                >
                    {props.children}
                </MessageText>
            </div>
        </div>
    );
}