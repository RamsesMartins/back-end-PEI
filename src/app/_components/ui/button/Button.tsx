import React from "react";
import "./button.css";
import { fontMain } from "~/app/fonts";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = true,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "button-style--primary" : "button-style--secondary";
  return (
    <button
      type="button"
      className={[
        "button",
        "bg-black",
        `button-size--${size} ${fontMain.className}`,
        mode,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
