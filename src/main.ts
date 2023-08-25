import { Server } from "./server";

async function main() {
  const server = new Server();
  server.start(3000);
}

main();
