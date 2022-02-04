import React from "react";
import { useHistory } from "react-router";
import Button from "./Button";
import "./Prodavnica.css";
import Proizvod from "./Proizvod";

const spisakProizvoda = [
  {
    ime: "Alfredo chicken",
    slika:
      "https://imageproxy.wolt.com/menu/menu-images/5f57436382d5eb606a6f4437/930ea442-f342-11ea-8a70-8e3cea876f0b_chicken_alfredo_1.jpeg",
    cena: 150,
  },
  {
    ime: "Pulled pork",
    slika:
      "https://imageproxy.wolt.com/menu/menu-images/5f57436382d5eb606a6f4437/6f464696-fc0c-11ea-a473-96e630aa6f85_pulled_pork_1.jpeg",
    cena: 250,
  },
  {
    ime: "Philly cheesesteak",
    slika:
      "https://imageproxy.wolt.com/menu/menu-images/5f57436382d5eb606a6f4437/e30f66f2-f342-11ea-abbe-aec317ff1136_philly_cheesesteak_2.jpeg",
    cena: 550,
  },
  {
    ime: "Komplet lepinja",
    slika:
      "https://imageproxy.wolt.com/menu/menu-images/6086755f765424a38c91f5a8/cf1e04d0-708e-11ec-89be-4a8ac2041884_08_nova_komplet_lepinja_img_3089.jpeg",
    cena: 210,
  },
  {
    ime: "Mezzaluna salata",
    slika:
      "https://imageproxy.wolt.com/menu/menu-images/6086755f765424a38c91f5a8/bab1f448-6486-11ec-b26f-8af737c0f68c_1640299553361.jpeg",
    cena: 570,
  },
  {
    ime: "Palačinka Delikata",
    slika:
      "https://imageproxy.wolt.com/menu/menu-images/6086755f765424a38c91f5a8/21b828c4-1b7b-11ec-a106-4ea690180d40_palacinka_slana_delikata_img_7770sr.jpeg",
    cena: 660,
  },
  {
    ime: "Engleski dorucak",
    slika:
      "https://imageproxy.wolt.com/menu/menu-images/5f9ebe0b388d448b470e7ac6/0eca41d8-1e98-11eb-9666-0a612f607ed5_engleski_dorucak_copy.jpeg",
    cena: 550,
  },
  {
    ime: "Mekenzi doručak 250g",
    slika:
      "https://imageproxy.wolt.com/menu/menu-images/5f9ebe0b388d448b470e7ac6/08e2e612-556b-11eb-811a-b2194b6bf480_mackenzie_breakfast.jpeg",
    cena: 950,
  },
  {
    ime: "Francis goujon (pileći štapići)",
    slika:
      "https://imageproxy.wolt.com/menu/menu-images/5f9ebe0b388d448b470e7ac6/c38cf79c-556a-11eb-b7bb-baa27781b4e3_francis_boujon.jpeg",
    cena: 1500,
  },
];

function Prodavnica({ dodajUKorpu, korpa }) {
  const history = useHistory();


  return (
    <div className="prodavnica">
      <div className="naslov">Restoran Beograd</div>
      <div className="listaProizvoda">
        {spisakProizvoda.map((proizvod) => (
          <Proizvod proizvod={proizvod} dodajUKorpu={dodajUKorpu} />
        ))}
      </div>

      <div className="korpa">
        <div className="naslov">Korpa</div>
        <div className="proizvodiUKorpi">
          {korpa.map((item) => (
            <div className="proizvodUKorpi">
              {item.kolicina}x {item.ime}
            </div>
          ))}
        </div>
        <Button label="Idi u korpu" onClick={() => history.push("/korpa")} className="korpaDugme" />
      </div>
    </div>
  );
}

export default Prodavnica;
