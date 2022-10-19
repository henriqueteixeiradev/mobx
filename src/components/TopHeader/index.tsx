import React from "react";
import Image from "next/image";

import * as S from "./styled";

export function TopHeader() {
  return (
    <S.Section>
      <S.Content>
        <S.LogoWrapper>
          <Image
            src="/img/logo.png"
            alt=""
            width={117}
            height={56}
            quality={100}
          />
        </S.LogoWrapper>

        <S.InfosWrapper>
          {[1, 2, 3].map((item) => (
            <S.InfosCard key={item}>
              <S.InfosCardIcon></S.InfosCardIcon>

              <S.InfosCardTexts>
                <b>Horário de Atendimento</b>
                <b>De Seg. a Sext das 9:00 às 18:00</b>
              </S.InfosCardTexts>
            </S.InfosCard>
          ))}
        </S.InfosWrapper>
      </S.Content>
    </S.Section>
  );
}
