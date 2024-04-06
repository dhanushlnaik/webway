import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

enum Plan {
  STANDARD = "STANDARD",
  EXPRESS = "EXPRESS",
}

enum DeliveryStatus {
  PENDING = "PENDING",
  DELIVERED = "DELIVERED",
}

enum OrderStatus {
    ACCEPTED = "ACCEPTED",
    PENDING = "PENDING",
    DECLINED = "DECLINED"
  }

export const deliveryRouter = createTRPCRouter({
    addbusorder : publicProcedure
    .input(z.object({
        trackingID : z.string(),
        numberPlate : z.string(),
        Pickup: z.string(),
        Destination: z.string(),
        rid : z.string(),
        status : z.enum([OrderStatus.ACCEPTED, OrderStatus.DECLINED, OrderStatus.PENDING])
    }))
});

