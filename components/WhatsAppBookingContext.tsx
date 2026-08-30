"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface WhatsAppBookingContextType {
  isOpen: boolean;
  prefillService: string;
  openBookingModal: (service?: string) => void;
  closeBookingModal: () => void;
}

const WhatsAppBookingContext = createContext<WhatsAppBookingContextType | undefined>(undefined);

export function WhatsAppBookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefillService, setPrefillService] = useState("");

  const openBookingModal = (service: string = "") => {
    setPrefillService(service);
    setIsOpen(true);
  };

  const closeBookingModal = () => {
    setIsOpen(false);
  };

  return (
    <WhatsAppBookingContext.Provider
      value={{ isOpen, prefillService, openBookingModal, closeBookingModal }}
    >
      {children}
    </WhatsAppBookingContext.Provider>
  );
}

export function useWhatsAppBooking() {
  const context = useContext(WhatsAppBookingContext);
  if (!context) {
    throw new Error("useWhatsAppBooking must be used within a WhatsAppBookingProvider");
  }
  return context;
}
