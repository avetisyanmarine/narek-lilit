import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import SvgChurch from "../../assets/vectors/church.png";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restoran.jpg";
import Photo2 from "../../assets/image/photo2.jpg";
import SvgRing from "../../assets/vectors/ring.png";
import SvgCouple from "../../assets/vectors/cup.png";
import { ForthPagePartContext, ForthPagePart } from "../forth-page/styled";
import { ForthPageBlock } from "../forth-page/fortg-page-block";
import { ThirdPageBlock } from "./third-page-block";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2>Ծրագիր</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            className="uniqueone"
            ImageSrc={SvgRing}
            number={"10:30"}
            bigText="ՓԵՍԱՅԻ ՏՈՒՆ"
          />
          <ThirdPageBlock
            // className="uniqueone"
            ImageSrc={SvgRing}
            number={"12:30"}
            bigText="ՀԱՐՍԻ ՏՈՒՆ"
          />
          <ThirdPageBlock
            ImageSrc={SvgChurch}
            number={"14:00"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Սուրբ Հովհաննես եկեղեցի"
          />
          <ThirdPageBlock
            className="secondBlock"
            line={true}
            ImageSrc={SvgCouple}
            number={"17:00"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Morena White"
          />
        </ThirdPagePartContext>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սուրբ Հովհաննես եկեղեցի"}
            mapSrc={"https://maps.app.goo.gl/8Y1xDKHex5U2G44q6"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Morena White Ռեստորան"}
            mapSrc={"https://maps.app.goo.gl/i7niD5n9aQVM2zBX6"}
          />
        </ForthPagePartContext>
      </Container>
      <img src={Photo2} className="rounded-[15px]" alt="" />
      <Container>
        <ThirdPagePartMini>
          <h3 className="dzev">Սիրով սպասում ենք</h3>
          <hr />
          <h3 className="dzev">Պահպանիր Օրը</h3>
          <h3>Հունիս</h3>
        </ThirdPagePartMini>
        <ThirdPagePartCalendar>
          {[...Array(35)].map((_, i) =>
            i > -1 && i <= 29 ? (
              <div className={i - 1 == 2 ? "special" : ""}>{i + 1}</div>
            ) : (
              <div></div>
            ),
          )}
        </ThirdPagePartCalendar>
      </Container>
    </ThirdPagePart>
  );
};
