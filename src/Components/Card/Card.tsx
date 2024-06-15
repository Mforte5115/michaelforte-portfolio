// Components/Card/Card.tsx
import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

interface CardProps {
  name: string;
  Icon: React.ElementType; // Accept the icon component as a prop
}

export function Card({ name, Icon }: CardProps) {
  return (
    <BootstrapCard className="text-center">
      <div className="p-4">
        <Icon size={50} style={{ color: '#333' }} />
      </div>
      <BootstrapCard.Body>
        <BootstrapCard.Title>{name}</BootstrapCard.Title>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}
