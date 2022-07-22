import { useUser } from "./contexts/UserContext";
import { ChatPage } from "./pages/ChatPage";
import { JoinPage } from "./pages/JoinPage/JoinPage.component";

function App() {
  const { joined } = useUser();

  return (
    <div style={{ backgroundImage: "url(/catPawsSmall.jpg)" }}>
    {joined ? <ChatPage /> : <JoinPage />}
    </div>
  );
}

export default App;
