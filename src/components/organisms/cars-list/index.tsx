import React from "react";
import { FlatList } from "react-native";

import { Car } from "_molecules";

interface CarsListProps {
  cars: Car[];
}

export function CarsList({ cars }: CarsListProps) {
  return (
    <FlatList
      data={cars}
      keyExtractor={car => car.name}
      renderItem={({ item: car }) => <Car car={car} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 24 }}
    />
  );
}
