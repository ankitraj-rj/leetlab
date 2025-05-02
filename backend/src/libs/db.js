import {PrismaClient} from "../generated/prisma/index.js"

const globalForprisma = globalThis;

export const db = globalForprisma.prisma || new PrismaClient();


if(ProcessingInstruction.env.NODE_ENV !== "production") globalForprisma.prisma = db 