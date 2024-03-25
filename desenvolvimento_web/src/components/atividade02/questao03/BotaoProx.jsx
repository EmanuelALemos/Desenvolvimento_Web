import { Id } from "./Id";
import { useContext } from "react";

export function BotaoProx() {

    const { setId } = useContext(Id);

    return (
        <button
            style={{
                backgroundColor: "#010B13",
                color: "white",
                padding: "10px",
                margin: "10px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem"
            }} 
            onClick={() => setId(id => id + 1)}>
            Próximo Pokemon
        </button>
    );
}