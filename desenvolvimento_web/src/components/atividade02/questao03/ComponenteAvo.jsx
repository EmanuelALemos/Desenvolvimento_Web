import { BotaoAnte } from "./BotaoAnte";
import { BotaoProx } from "./BotaoProx";

import { ComponenteFilho } from "./ComponenteFilho";
import { Id } from "./Id";
import { useState } from "react";

export function ComponenteAvo() {

    const [id, setId] = useState(1);

    return (
        <>
            <Id.Provider value={{ id, setId }}>
                <img
                    src={"http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"}
                    alt="Pokemon"
                    width={200}
                />
                <ComponenteFilho />
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: "20px"

                }}>
                    <BotaoAnte />
                    <BotaoProx />
                </div>
            </Id.Provider>
        </>
    );
}