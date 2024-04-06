import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import QRCode from "qrcode";

export const qrRouter = createTRPCRouter({
  getQR: publicProcedure.query(async ({ ctx }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const jsonData = {
      id: 1,
      packageId: 123,
      qrCode: "ABC123DEF456",
      qrStatus: true,
      scanNumber: 5,
      senderId: "dhanush123",
      receiverId: "receiver456",
      fromAddress: "123 Main St, City",
      toAddress: "456 Elm St, Town",
      createdAt: "2024-04-06T12:30:45Z",
      updatedAt: "2024-04-06T12:30:45Z",
      qrstatus: "Deactivated",
    };
    const jsonStringData = JSON.stringify(jsonData);
    console.log(jsonData);
    const qr = QRCode.toDataURL(jsonStringData);

    return qr;
  }),
});
