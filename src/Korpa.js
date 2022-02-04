import React from "react";
import { useHistory } from "react-router";
import Proizvod from "./Proizvod";
import "./Korpa..css";
import Button from "./Button";

function Korpa({ korpa }) {
  const history = useHistory();

  return (
    <div>
      <div className="naslovKorpe">Korpa:</div>
      <div className="proizvodiNaKasi">
        {korpa.map((item) => (
          <Proizvod skloniIzmenuKolicine={true} proizvod={item} />
        ))}
      </div>
      <div>
        <div className="brojProizvoda">
          Proizvoda: {korpa.reduce((prev, current) => prev + Number.parseInt(current.kolicina), 0)}
        </div>
        <div className="ukupnaCena">
          Cena:
          {korpa.reduce((acc, current) => {
            return acc + current.cena * current.kolicina;
          }, 0)}
          RSD
        </div>
      </div>
      <Button
        label="Poruci"
        className="poruciDugme"
        onClick={() => {
          alert("Uspesno ste porucili");
          history.push("");
        }}
      />
    </div>
  );
}

export default Korpa;
