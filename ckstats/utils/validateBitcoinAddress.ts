/**
 * DigiByte Address Validator (replaces BTC/BCH validator)
 * Supports:
 *  - Legacy Base58 (D..., S...)
 *  - Bech32 (dgb1...)
 */

import bs58check from "bs58check";
import { bech32 } from "bech32";

export function validateBitcoinAddress(address: string): boolean {
  if (!address || typeof address !== "string") return false;

  address = address.trim();

  // -----------------------------
  // 1. Bech32 (dgb1...)
  // -----------------------------
  if (address.toLowerCase().startsWith("dgb1")) {
    try {
      const decoded = bech32.decode(address);
      return decoded.prefix === "dgb";
    } catch {
      return false;
    }
  }

  // -----------------------------
  // 2. Base58Check (D..., S...)
  // -----------------------------
  const first = address[0];
  const validPrefixes = ["D", "S"];

  if (validPrefixes.includes(first)) {
    try {
      const payload = bs58check.decode(address);
      return payload.length === 21; // 1 prefix + 20 hash
    } catch {
      return false;
    }
  }

  return false;
}
