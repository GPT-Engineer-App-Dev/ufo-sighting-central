import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { newImage } from "@/utils/newImage";

const Index = () => {
  return (
    <div className="text-center space-y-8">
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${newImage("night-sky")})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl text-white">Welcome to UFO Sightings</h1>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-3xl">About Us</h2>
        <p>Welcome to UFO Sightings, your go-to source for the latest and most intriguing UFO sightings from around the world. Explore our collection of sightings, submit your own, and join a community of enthusiasts dedicated to uncovering the truth.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-3xl">Featured Sightings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardHeader>
                <CardTitle>Sighting {item}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="./public/placeholder.svg" alt={`Sighting ${item}`} className="w-full h-48 object-cover mb-4" />
                <p>Brief description of the sighting {item}.</p>
                <Button variant="link">Read more</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <footer className="space-y-4">
        <nav className="flex justify-center space-x-4">
          <a href="/about" className="text-muted-foreground hover:text-foreground">About</a>
          <a href="/contact" className="text-muted-foreground hover:text-foreground">Contact</a>
          <a href="/privacy-policy" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Index;