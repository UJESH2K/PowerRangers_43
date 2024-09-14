const z = require("zod");

const signUp = z.object({
  userName: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
});

const signIn = z.object({
  userName: z.string().email(),
  password: z.string(),
});

const updateWare = z.object({
  password: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

module.exports = {
  signUp,
  signIn,
  updateWare,
};
