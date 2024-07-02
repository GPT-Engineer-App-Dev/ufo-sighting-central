import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Sightings = () => {
  const [search, setSearch] = useState("");

  const sightings = [
    { id: 1, title: "Sighting 1", date: "2023-01-01", description: "Description 1" },
    { id: 2, title: "Sighting 2", date: "2023-02-01", description: "Description 2" },
    { id: 3, title: "Sighting 3", date: "2023-03-01", description: "Description 3" },
  ];

  const filteredSightings = sightings.filter((sighting) =>
    sighting.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-3xl">UFO Sightings</h2>
        <Input
          placeholder="Search sightings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSightings.map((sighting) => (
          <Card key={sighting.id}>
            <CardHeader>
              <CardTitle>{sighting.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="./public/placeholder.svg" alt={sighting.title} className="w-full h-48 object-cover mb-4" />
              <p>{sighting.date}</p>
              <p>{sighting.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Sightings;