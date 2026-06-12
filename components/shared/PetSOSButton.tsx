"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const PHONE = "554184158693";

interface PetSOSButtonProps {
  variant?: "danger" | "primary";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export function PetSOSButton({
  variant = "danger",
  size = "lg",
  className = "",
  children = "🆘 Acionar Pet SOS agora",
}: PetSOSButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSOS = () => {
    setLoading(true);
    setError(false);

    const baseUrl = `https://wa.me/${PHONE}?text=`;
    const fallbackMsg = "🆘 URGÊNCIA! Meu pet precisa de atendimento veterinário IMEDIATO!";

    const openWhatsApp = (msg: string) => {
      window.open(baseUrl + encodeURIComponent(msg), "_blank");
      setLoading(false);
    };

    if (!navigator.geolocation) {
      openWhatsApp(fallbackMsg);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const mapsUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
        const msg = `🆘 URGÊNCIA! Meu pet precisa de atendimento veterinário IMEDIATO!\n📍 Localização: ${mapsUrl}`;
        openWhatsApp(msg);
      },
      () => {
        openWhatsApp(fallbackMsg);
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      loading={loading}
      error={error}
      onClick={handleSOS}
    >
      {children}
    </Button>
  );
}
