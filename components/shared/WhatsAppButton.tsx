"use client";

interface WhatsAppButtonProps {
  phone?: string;
  message?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  position?: "bottom-right" | "bottom-left";
}

const defaultPhone = "554184158693";
const defaultMessage = "Olá! Gostaria de mais informações sobre o VetMóvel.";

function WhatsAppButton({
  phone = defaultPhone,
  message = defaultMessage,
  size = "md",
  position = "bottom-right",
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const sizeClasses = {
    sm: "w-12 h-12 text-lg",
    md: "w-14 h-14 text-xl",
    lg: "w-16 h-16 text-2xl",
  };

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed ${positionClasses[position]} ${sizeClasses[size]} z-50 bg-success text-white rounded-full shadow-lg flex items-center justify-center hover:brightness-110 hover:scale-105 transition-all duration-150`}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <span role="img" aria-hidden="true">💬</span>
    </a>
  );
}

export { WhatsAppButton };
export type { WhatsAppButtonProps };
