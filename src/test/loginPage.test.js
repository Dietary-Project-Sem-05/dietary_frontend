import React from "react";
import { act } from "react-dom/test-utils";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginPage from "../pages/LoginPage";

describe("Login render Page", () => {
  it("renders the Login page", () => {
    const { getByText } = render(<LoginPage />);
    expect(getByText(/login/i)).toBeInTheDocument();
  });

  it("render 2 input components", () => {
    const { getByLabelText } = render(<LoginPage />);
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    const { getByText } = render(<LoginPage />);
    expect(getByText("LOGIN")).toBeInTheDocument();
  });
});

describe("Form behaviour", () => {
  it("validate user inputs, and provide error messages", async () => {
    const { getByTestId, getByText } = render(<LoginPage />);

    await act(async () => {
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: "" },
      });

      fireEvent.change(screen.getByLabelText(/password/i), {
        target: { value: "" },
      });
    });

    await act(async () => {
      fireEvent.submit(getByTestId("form"));
    });

    expect(getByText("Email is required")).toBeInTheDocument();
    expect(getByText("Password is required")).toBeInTheDocument();
  });

  it("should submit when form inputs contain text", async () => {
    const { getByTestId, queryByText } = render(<LoginPage />);

    await act(async () => {
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: "test" },
      });

      fireEvent.change(screen.getByLabelText(/password/i), {
        target: { value: "testPassword" },
      });
    });

    await act(async () => {
      fireEvent.submit(getByTestId("form"));
    });

    expect(() => getByText("Email is required")).toThrow();
    expect(() => getByText("Password is required")).toThrow();
    // expect(queryByText("Email is required")).not.toBeInTheDocument();
    // expect(queryByText("Password is required")).not.toBeInTheDocument();
  });
});
