import { ComponenteB } from "./ComponenteB";
import { ComponenteC } from "./ComponenteC";

import { Cores } from "./Cores";

export function ComponenteA() {

    const cores = {bkgA: 'green', bkgB: 'white', bkgC: 'yellow', bkgD: 'blue'}

    return (
         <Cores.Provider value={cores}>
            <ComponenteB />
            <ComponenteC />
         </Cores.Provider>
    )
}