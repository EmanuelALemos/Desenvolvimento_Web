import { ReactChildren } from "react";



const Hero = ({name, img}) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={name} width={200}/>
    </div>
  );
}

const Enemy = ({name, img}) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={name} width={200}/>
    </div>
  );
}

const Arena = () => {
  return (
    <div>
      <Hero name = 'Spider-Man' img = 'http://hdqwalls.com/wallpapers/spiderman-ps4-game-artwork-vp.jpg'/>
      <Enemy name = 'Abutre' img='https://tse2.mm.bing.net/th?id=OIP.zrLlNn5FDeh_J-NySZwSMAHaEK&pid=Api&P=0&h=180'/>
    </div>
  );
}


const World = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
}


export { Arena, World };