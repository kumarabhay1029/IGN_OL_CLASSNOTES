# MCS-202: Computer Organization  
## Unit: Number System

---

### 1. Decimal Number System

- **Symbols Used**: `{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}`
- **Number of Symbols**: 10  
- **Base/Radix**: 10  

> **Why do we use base 10 (₁₀)?**  
Imagine a class where all students are from Delhi. You wouldn’t need to mention your origin because everyone already knows it. But if students come from different countries, you'd need a way to identify each person's origin. Similarly, we write the base (like ₁₀) to indicate that the number belongs to the decimal system.

> **What happens if we don’t write the base?**  
Without specifying the base, it becomes unclear which number system the number belongs to. That’s why we use subscripts like ₁₀.

**Example**:  
`(257)₁₀` → Decimal representation

---

### 2. Binary Number System

- **Symbols Used**: `{0, 1}`
- **Number of Symbols**: 2  
- **Base/Radix**: 2  

**Example**:  
`(1010)₂`

---

### 3. Octal Number System

- **Symbols Used**: `{0, 1, 2, 3, 4, 5, 6, 7}`
- **Number of Symbols**: 8  
- **Base/Radix**: 8  

**Example**:  
`(257)₈`

---

### 4. Hexadecimal Number System

- **Symbols Used**: `{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}`  
- **Number of Symbols**: 16  
- **Base/Radix**: 16 (also written as H or ⋌)

**Example**:  
`(2A6)₁₆ = (2A6)H = (2A6)⋌`

> **Note**: In calculations, the numerical equivalents of letters are used:  
`A = 10`, `B = 11`, `C = 12`, `D = 13`, `E = 14`, `F = 15`

**Example**:  
`(2A5)₁₆`  
→ `A = 10`  
→ `5 * A = 5 * 10 = 50`

---

## Relationship Between Number Systems

### 1. Any Base to Decimal

**Common Rule** (Binary, Octal, Hex → Decimal):  
Start from right to left, multiply each digit by base^position, and sum the results.

#### Decimal Example  
`(25)₁₀ = 2 * 10¹ + 5 * 10⁰ = 20 + 5 = 25`

#### Binary to Decimal  
`(101)₂ = 1 * 2² + 0 * 2¹ + 1 * 2⁰ = 4 + 0 + 1 = 5`

#### Octal to Decimal  
`(128)₈ = 1 * 8² + 2 * 8¹ + 8 * 8⁰ = 64 + 16 + 5 = 85`

#### Hexadecimal to Decimal  
`(2A4.8)₁₆ = 2 * 16² + A * 16¹ + 4 * 16⁰ + 8 * 16⁻¹`  
`= 2 * 256 + 10 * 16 + 4 + 0.5 = 512 + 160 + 4 + 0.5 = 676.5`

---

### Deep Dive: Why Do We Multiply Digits by Base^Power?

Every digit's value is determined by its position in the number. The rightmost digit is the least significant (base⁰), and as we move left, the power of the base increases. This rule applies to all number systems.

---

### 2. Decimal to Binary

**Step 1**: Convert the integer part using division and remainders.  
**Step 2**: Convert the fractional part using multiplication.

#### Integer Part Example:  
Convert `(25)₁₀` to binary:  
```

25 / 2 = 12 remainder 1
12 / 2 = 6  remainder 0
6 / 2  = 3  remainder 0
3 / 2  = 1  remainder 1
1 / 2  = 0  remainder 1
Binary = 11001₂

```

#### Fractional Part Example:  
Convert `.35` to binary:  
```

.35 \* 2 = 0.70 → 0
.70 \* 2 = 1.40 → 1
.40 \* 2 = 0.80 → 0
.80 \* 2 = 1.60 → 1
.60 \* 2 = 1.20 → 1
.20 \* 2 = 0.40 → 0
(Repeats from here...)

Binary ≈ .010110… (Repeating)

```

**Exercise**: Convert `.135` to binary.

---

### 3. Binary to Octal

- Group **3 bits** from **right to left** (for integers) and **left to right** (for fractions).

**Example**:  
`(10101101)₂ = 010 101 101` → `(255)₈`

**With Fraction**:  
`(10101101.100)₂` → Group:
- Integer: `010 101 101` → `255`
- Fraction: `100` → `4`  
Result: `(255.4)₈`

---

### 4. Octal to Binary

- Reverse the process: convert each digit to **3-bit binary**.

**Example**:  
`(255.4)₈ = (010101101.100)₂`

---

### 5. Binary to Hexadecimal

- Group **4 bits** for conversion.

**Example**:  
`(10101111.110101)₂`  
Group:  
- `1010 = A`, `1111 = F`  
- Fraction: `1101 = D`, `0100 = 4`  
Result: `(AF.D4)₁₆`

---

### Conversion Graph (Universal Rule)

```

\[ANY BASE] ↔ \[BINARY] ↔ \[ANY BASE]

```

- Decimal to Binary → Divide by 2  
- Octal to Binary → Convert each digit to 3 bits  
- Hexadecimal to Binary → Convert each digit to 4 bits

---

### Shortcut Tricks

#### Binary to Decimal

**Example**:  
`(101)₂`  
```

1 0 1
↓ ↓ ↓
4 2 1 → Total = 5

```

Only add positions with 1’s.

#### Decimal to Binary

Visualize with place values:  
```

64 32 16 8 4 2 1
→ 25 = 16 + 8 + 1 → 1 1 0 0 1 = (11001)₂

```

Another Example:  
`(47)₁₀ = (101111)₂`

---

> ⚠️ Note: All rules are consistent for conversions between Binary, Octal, Decimal, and Hexadecimal.

---

**End of Class Notes**
```

---
