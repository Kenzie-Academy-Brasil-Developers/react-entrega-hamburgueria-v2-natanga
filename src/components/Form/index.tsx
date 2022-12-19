import { useState } from "react";
import { StyledButtons } from "../../../Styles/Buttons";
import { StyledForm } from "./style.ts";

export function Form({ products, setFilteredProducts }) {
  const [sheradText, setSheradText] = useState(false);
  const [focus, setFocus] = useState(false);

  function sherad(event) {
    event.preventDefault();
    const sheradTextToLower = sheradText.toLowerCase();
    const sheradProdct = products.filter(
      (element) =>
        element.name.toLowerCase().includes(sheradTextToLower) ||
        element.category.toLowerCase().includes(sheradTextToLower) ||
        element.price.toLocaleString().includes(sheradTextToLower)
    );
    setFilteredProducts(sheradProdct);
  }
  return (
    <StyledForm
      onSubmit={(e) => {
        sherad(e);
      }}
      focus={focus}
    >
      <input
        required
        placeholder="Digitar Pesquisa"
        onChange={(e) => {
          setSheradText(e.target.value);
        }}
        onFocus={() => setFocus(!focus)}
        onBlur={() => setFocus(false)}
      />
      <StyledButtons type="submit" nameButtons="bntOne">
        Pesquisar
      </StyledButtons>
    </StyledForm>
  );
}
