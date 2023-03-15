import React from "react";
import { render } from "@testing-library/react";
import { SpellInfo } from "./index";
import { ISpellInfoBlock } from "../../features/spell.types";

describe("SpellInfo component", () => {
  const spellInfoBlock: ISpellInfoBlock = {
    title: "Test Spell Title",
    text: "Test Spell Description",
  };

  it("renders the title and text props", () => {
    const { getByText } = render(<SpellInfo {...spellInfoBlock} />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(spellInfoBlock.title)).toBeInTheDocument();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(spellInfoBlock.text as string)).toBeInTheDocument();
  });
});
