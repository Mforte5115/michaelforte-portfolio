import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

interface CardProps {
  name: string;
  Icon: React.ElementType; // Accept the icon component as a prop
}

export function Card({ name, Icon }: CardProps) {
  return (
    <BootstrapCard className="text-center h-full flex flex-col items-center bg-white shadow-md rounded-lg">
      <div className="p-4">
        <Icon size={50} className="text-gray-800" />
      </div>
      <BootstrapCard.Body className="flex-1 flex flex-col justify-center">
        <BootstrapCard.Title className="text-lg font-semibold">{name}</BootstrapCard.Title>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}
