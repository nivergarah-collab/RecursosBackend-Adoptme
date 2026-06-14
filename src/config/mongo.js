import dns from 'dns';
import mongoose from 'mongoose';

const DEFAULT_DNS_SERVERS = ['1.1.1.1', '8.8.8.8'];

function configureDns() {
  const servers = (process.env.DNS_SERVERS || DEFAULT_DNS_SERVERS.join(','))
    .split(',')
    .map((server) => server.trim())
    .filter(Boolean);

  if (servers.length > 0) {
    dns.setServers(servers);
  }
}

export async function connectMongoDB() {
  const mongoURI = process.env.MONGO_URL;

  if (!mongoURI) {
    throw new Error('La variable de entorno MONGO_URL esta vacia o no definida.');
  }

  configureDns();
  mongoose.set('strictQuery', false);

  await mongoose.connect(mongoURI);
}

export default mongoose;
