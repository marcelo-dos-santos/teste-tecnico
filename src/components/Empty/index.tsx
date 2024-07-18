import { Button } from "../Button";
import { TypeEmpity, optionsEmpty } from "./options";
import emptyImg from "../../../public/empity.svg";
import * as S from "./style";

type EmptyProps = {
  type: TypeEmpity;
  onClick: () => void;
};

export const Empty = ({ onClick, type }: EmptyProps) => {
  const option = optionsEmpty[type];

  if (!option) {
    return (
      <S.NotItens>
        <S.TextMessage>Parece que não há nada por aqui :(</S.TextMessage>
        <img src={emptyImg} alt="Nada por aqui" />
        <S.ContainerButton>
          <Button onClick={onClick}>Recarregar página</Button>
        </S.ContainerButton>
      </S.NotItens>
    );
  }

  const { img, textButton, title } = option;

  return (
    <S.NotItens>
      <S.TextMessage>{title}</S.TextMessage>
      <img src={img} alt={title} />
      <S.ContainerButton>
        <Button onClick={onClick}>{textButton}</Button>
      </S.ContainerButton>
    </S.NotItens>
  );
};
