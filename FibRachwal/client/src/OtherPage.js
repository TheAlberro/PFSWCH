import React from "react";

export default () => {
  return (
    <div>
     Aby uruchomic program w katalogu glownym wpisz w konsoli 
    <br />
    W wersji developerskiej
    <br/>
       "docker-compose -f docker-compose.dev.yml up --build"
       <br/>
       W wersji produkcyjnej
        <br />
         docker-compose up -d
           <br />
       Projekt powstal na podstawie plikow z lab9  <br />
      <br />
    </div>
  );
};
