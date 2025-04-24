import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      van: Model,
    },

    seeds(server) {
      server.create("van", {
        id: "1",
        name: "Camper Deluxe",
        price: 120,
        description: "A comfortable camper van for your adventures.",
        imageUrl: "/images/camper-deluxe.jpg",
      });
      server.create("van", {
        id: "2",
        name: "Explorer",
        price: 100,
        description: "Perfect for off-road trips and exploration.",
        imageUrl: "/images/explorer.jpg",
      });
      server.create("van", {
        id: "3",
        name: "Family Cruiser",
        price: 150,
        description: "Spacious van for family trips.",
        imageUrl: "/images/family-cruiser.jpg",
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/vans", (schema) => {
        return schema.vans.all();
      });

      this.get("/vans/:id", (schema, request) => {
        let id = request.params.id;
        return schema.vans.find(id);
      });
    },
  });

  return server;
}