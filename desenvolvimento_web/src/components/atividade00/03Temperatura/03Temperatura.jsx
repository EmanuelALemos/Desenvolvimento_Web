import { Text } from "./styles";

export const Temperatura = ({temperatura}) => {
    
    function celsiusParaFahrenheit(c){
        return (c * 9/5) + 32;
    }

    function fahrenheitParaCelsius(f){
        return (f - 32) * 5/9;
    }
    
    function kelvin(k) {
        const celsius = k - 273.15;
        const fahrenheit = (celsius * 9/5) + 32;
        return {
            celsius,
            fahrenheit
        };
    }
    
    return(
        <div>
            <Text>{temperatura}°C em Fahrenheit é {celsiusParaFahrenheit(temperatura).toFixed(1)}°F</Text>
            <Text>{temperatura}°F em Celsius é {fahrenheitParaCelsius(temperatura).toFixed(1)}°C</Text>
            <Text>
                {temperatura}K em Fahrenheit é {kelvin(temperatura).fahrenheit.toFixed(1)}°F 
                e em Celsius é {kelvin(temperatura).celsius.toFixed(1)}°C
            </Text>
        </div>    
    );
}