import React from "react";

const DescriptionAnytownRealEstate = () => {
  return (
    <p style={{textAlign:"start"}}>
      Głównym celem projektu jest umożliwienie użytkownikom przeglądania ofert
      nieruchomości według różnych kryteriów, takich jak lokalizacja, metraż,
      liczba pokoi itp. Strona oferuje także możliwość filtrowania i sortowania
      wyników, co pozwala na łatwe znalezienie ofert dopasowanych do
      indywidualnych potrzeb użytkowników. <br></br>W ramach projektu
      wykorzystane zostały różne technologie, takie jak React, TypeScript, CSS
      oraz Firebase. Dzięki temu strona jest łatwa w obsłudze i responsywna na
      różnych urządzeniach.<br></br> Dodatkowo, strona umożliwia dodawanie
      nowych ofert przez zalogowanych użytkowników oraz komunikację z agentem
      nieruchomości poprzez formularz kontaktowy. Wszystkie oferty oraz
      informacje o użytkownikach są przechowywane w bazie danych Firebase, co
      zapewnia bezpieczeństwo i skalowalność projektu.
    </p>
  );
};

const DescriptionSelf=()=>{
  <p>Co doceniają we mnie inni ludzie?</p>;
}

export default DescriptionAnytownRealEstate;
