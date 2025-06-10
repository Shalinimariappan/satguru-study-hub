// src/components/WhatsAppButton.tsx
import React from "react";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/7200015773" // 🔁 Replace with your number
      target="_blank"
      rel="noopener noreferrer"
      style={styles.whatsappButton}
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="Chat on WhatsApp"
        style={styles.icon}
      />
    </a>
  );
};

const styles = {
  whatsappButton: {
    position: "fixed" as const,
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
  },
  icon: {
    width: "50px",
    height: "50px",
    cursor: "pointer",
  },
};

export default WhatsAppButton;
