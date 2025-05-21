import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { UserPage } from "./UserPage";
import { MemoryRouter } from "react-router-dom";

vi.mock("@/shared/components/header/Header", () => ({
  Header: () => <header data-testid="mock-header" />,
}));
vi.mock("@/shared/components/footer/Footer", () => ({
  Footer: () => <footer data-testid="mock-footer" />,
}));
vi.mock("@/features/users/components/UserForm", () => ({
  default: () => <form data-testid="mock-user-form">Mock Form</form>,
}));

describe("UserPage", () => {
  it("renders the user page correctly", () => {
    render(
      <MemoryRouter>
        <UserPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { level: 1, name: /creado para ti/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /tú eliges cuánto pagar/i,
      })
    ).toBeInTheDocument();

    const image = screen.getByAltText(/family/i);
    expect(image).toBeInTheDocument();
    expect(image.tagName).toBe("IMG");

    expect(screen.getByTestId("mock-header")).toBeInTheDocument();
    expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
    expect(screen.getByTestId("mock-user-form")).toBeInTheDocument();
  });
});
