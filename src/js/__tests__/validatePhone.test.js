import validatePhone from "../validatePhone.js";

describe("validatePhone", () => {
  it("validate russian phone without plus", () => {
    const expected = "+79270000000";

    const received = validatePhone("8 (927) 000-00-00");

    expect(received).toBe(expected);
  });

  it("validate russian phone wit plus", () => {
    const expected = "+79600000000";

    const received = validatePhone("+7 960 000 00 00");

    expect(received).toBe(expected);
  });

  it("validate chinese phone", () => {
    const expected = "+860000000000";

    const received = validatePhone("+86 000 000 0000");

    expect(received).toBe(expected);
  });
});
