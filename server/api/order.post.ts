type OrderItem = {
  id: number;
  article: string;
  title: string;
  price: number;
  quantity: number;
};

type OrderTotals = {
  itemsCount: number;
  totalPrice: number;
  installationSelected: boolean;
};

type OrderPayload = {
  items: OrderItem[];
  totals: OrderTotals;
};

export default defineEventHandler(async (event) => {
  const body = await readBody<OrderPayload>(event);

  if (!body || !Array.isArray(body.items) || body.items.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: "Order must include at least one item.",
    });
  }

  const isItemsValid = body.items.every(
    (item) =>
      Number.isFinite(item.id) &&
      typeof item.article === "string" &&
      typeof item.title === "string" &&
      Number.isFinite(item.price) &&
      Number.isFinite(item.quantity) &&
      item.quantity > 0,
  );

  if (!isItemsValid) {
    throw createError({
      statusCode: 400,
      statusMessage: "Order has invalid item data.",
    });
  }

  const calculatedItemsCount = body.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const calculatedTotalPrice = body.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const orderId = `NUXT-${Date.now()}`;

  console.info("New order accepted", {
    orderId,
    clientTotals: body.totals,
    calculatedTotals: {
      itemsCount: calculatedItemsCount,
      totalPrice: calculatedTotalPrice,
      installationSelected: Boolean(body.totals?.installationSelected),
    },
    items: body.items,
  });

  return {
    ok: true,
    orderId,
    message: "Заказ успешно отправлен",
  };
});
