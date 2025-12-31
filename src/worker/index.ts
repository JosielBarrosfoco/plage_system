import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

// Get all products or filter by limit
app.get("/api/products", async (c) => {
  const limit = c.req.query("limit");
  
  let query = "SELECT * FROM products ORDER BY created_at DESC";
  if (limit) {
    query += ` LIMIT ${parseInt(limit)}`;
  }
  
  const result = await c.env.DB.prepare(query).all();
  
  return c.json({ products: result.results });
});

// Get product by slug
app.get("/api/products/:slug", async (c) => {
  const slug = c.req.param("slug");
  
  const result = await c.env.DB.prepare(
    "SELECT * FROM products WHERE slug = ?"
  ).bind(slug).first();
  
  if (!result) {
    return c.json({ error: "Product not found" }, 404);
  }
  
  return c.json({ product: result });
});

// Get all testimonials
app.get("/api/testimonials", async (c) => {
  const result = await c.env.DB.prepare(
    "SELECT * FROM testimonials ORDER BY created_at DESC"
  ).all();
  
  return c.json({ testimonials: result.results });
});

// Submit contact form
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service_type: z.string().optional(),
  message: z.string().min(10),
});

app.post("/api/contact", zValidator("json", contactSchema), async (c) => {
  const data = c.req.valid("json");
  
  await c.env.DB.prepare(
    "INSERT INTO contact_requests (name, email, phone, service_type, message) VALUES (?, ?, ?, ?, ?)"
  ).bind(
    data.name,
    data.email,
    data.phone || null,
    data.service_type || null,
    data.message
  ).run();
  
  return c.json({ success: true });
});

export default app;
