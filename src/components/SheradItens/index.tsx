
import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { HomeContext } from "../../context/HomeContext";
import { StyledButtons } from "../../styles/Buttons";
import { StyledSheradItens } from "./style";

export function SheradItens() {
  const [focus, setFocus] = useState(false);
  const { register, handleSubmit } = useForm()
  const { sherad } = useContext(HomeContext)

  return (
    <StyledSheradItens onSubmit={handleSubmit(sherad)} focus={focus}  >
      <input
        required
        placeholder="Digitar Pesquisa"
        {...register("sherad")}
        onFocus={() => setFocus(!focus)}
        onBlur={() => setFocus(false)}
      />
      <StyledButtons type="submit" nameButtons="bntOne">
        Pesquisar
      </StyledButtons>
    </StyledSheradItens>
  );
}
