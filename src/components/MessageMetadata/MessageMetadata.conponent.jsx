import "./MessageMetadata.styles.scss";

export function MessageMetadata (props) {
    return (
        <span className="message-metadata" >
            <span className="message-data__display-name" >{props.displayName}</span>
            <span className="message-data__display-time" >{props.time}</span>
        </span>
    );
}