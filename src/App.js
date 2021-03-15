import "./App.css";
import ProfileComponent from "./profile/profileComponent";

function App() {
    const handleName = (name) => {
        alert(`My name is ${name}`);
    };

    return (
        <div className="App">
            <ProfileComponent
                fullName="Imen Hafdhi"
                bio="this is the shortest biography of an engineer"
                profession="Safety Engineer"
                handleName={handleName}
            >
                <img
                    style={{
                        borderRadius: "20px",
                        width: "200px",
                        height: "200px",
                        textAlign: "center",
                    }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1lYE-1-9DzPBN9iAfHPTxGfWEbVS0ddwvw&usqp=CAU"
                    alt="profil picture"
                />
            </ProfileComponent>
        </div>
    );
}

export default App;
