import React, { useState } from "react";
import Button from "./Button";
import "./Proizvod.css";

function Proizvod({ proizvod, dodajUKorpu, skloniIzmenuKolicine }) {
  const [kolicina, setKolicina] = useState();

  return (
    <div className="proizvodWrap">
      <div className="ime">
        {proizvod.kolicina && `${proizvod.kolicina}x `}
        {proizvod.ime}
      </div>
      <div className="slika">
        <img height={150} src={proizvod.slika} />
      </div>
      <div className="cena">Cena: {proizvod.cena.toFixed(2)} Dinara</div>
      {!skloniIzmenuKolicine && (
        <>
          <input
            value={kolicina}
            className="kolicina"
            onChange={(e) => {
              const value = e.target.value;
              if (value < 0) {
                return;
              }
              setKolicina(value);
            }}
            type="number"
            placeholder="Kolicina"
          />
          <Button
            label="Dodaj u korpu"
            disabled={kolicina == 0}
            className="dodajUKorpu"
            onClick={() => {
              dodajUKorpu(proizvod, kolicina);
              setKolicina("");
            }}>
            Dodaj u korpu
          </Button>
        </>
      )}
    </div>
  );
}

export default Proizvod;
