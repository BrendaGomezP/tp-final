import crypto from "node:crypto";

function createSaltAndHash(payload, salt) {
  const hash = crypto
    .createHash("sha256")
    .update(salt + payload)
    .digest("hex");
 
  return `${salt}:${hash}`;
}

function UUID() {
  return crypto.randomUUID();
}

export { createSaltAndHash, UUID };