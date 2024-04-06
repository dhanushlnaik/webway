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
export const deliveryRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(
      z.object({
        senderID: z.string(),
        receiverID: z.string(),
        fromPlace: z.string(),
        toPlace: z.string(),
        sphone: z.string().min(10).max(15),
        rphone: z.string().min(10).max(15),
        plan: z.enum([Plan.EXPRESS, Plan.STANDARD]),
        scanNumber: z.number().int(),
        status: z.enum([DeliveryStatus.DELIVERED, DeliveryStatus.PENDING]),
        items: z.number().int(),
        fromAddress: z.string().optional(),
        toAddress: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.delivery.create({
        data: {
          senderID: input.senderID,
          receiverID: input.receiverID,
          fromPlace: input.fromPlace,
          toPlace: input.toPlace,
          fromAddress: input.fromAddress,
          toAddress: input.toAddress,
          sphone: input.sphone,
          rphone: input.rphone,
          plan: input.plan,
          scanNumber: input.scanNumber,
          status: input.status,
          items: input.items,
        },
      });
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.delivery.findFirst({
      orderBy: { createdAt: "desc" },
      where: { sender: { id: ctx.session.user.id } },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),

  addBus: publicProcedure
    .input(
      z.object({
        numberPlate: z.string(),
        name: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return ctx.db.bus.create({
        data: {
          numberPlate: input.numberPlate,
          name: input.name,
        },
      });
    }),
});
