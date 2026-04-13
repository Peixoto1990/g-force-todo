import solarSystem from "../constants/solarSystem"

const getAstro = (g = 19.00) => {
    if (g <= 2.00) return solarSystem.pluto;    
    if (g <= 4.00) return solarSystem.europa;   
    if (g <= 5.50) return solarSystem.titan;    
    if (g <= 7.00) return solarSystem.ganymede; 
    if (g <= 8.50) return solarSystem.moon;     
    if (g <= 10.50) return solarSystem.mercury; 
    if (g <= 12.50) return solarSystem.mars;    
    if (g <= 14.50) return solarSystem.uranus;  
    if (g <= 16.50) return solarSystem.venus;   
    if (g <= 19.00) return solarSystem.earth;   
    if (g <= 21.50) return solarSystem.saturn;
    if (g <= 24.00) return solarSystem.neptune;
    if (g <= 26.50) return solarSystem.jupiter;

    return solarSystem.sun;
}

export { getAstro }