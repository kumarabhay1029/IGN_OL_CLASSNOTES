
# 📘 MCS-202 Notes: Error Detection and Correction

## 📑 Table of Contents
1. [❓ What is an Error](#-what-is-an-error)
2. [🛡️ Error Detection](#-error-detection)
3. [⚖️ Parity Bit](#-parity-bit)
   - [🟦 Even Parity Bit](#-even-parity-bit)
   - [🟥 Odd Parity Bit](#-odd-parity-bit)
4. [🧠 Hamming Code (4-bit Data)](#-hamming-code-4-bit-data)
5. [🧮 Hamming Code (More than 4-bit Data)](#-hamming-code-more-than-4-bit-data)

---

## ❓ What is an Error

An **error** means mis-introduced data during transmission.  
When the original data changes during transmission, we call it an **error**.

📌 Example:  
```
Original: 101 ➡️ Received: 100  
Original: 5   ➡️ Received: 4
```
➡️ This change in the value or data is called **error**.

---

## 🛡️ Error Detection

If we consider the rightmost `1` in `101` as an **error bit**, then it is possible to correct it.

✅ Why?
Because we can identify the error, and correct data becomes `100`.

🧍 Real-Life Analogy:  
Just like we use **guards** for protection,  
➡️ In digital data, we use **parity bits** (guard bits) for error protection.

---

## ⚖️ Parity Bit

A **parity bit** is a safety guard added to the data to nullify the chances of error.

### Types of Parity Bit:
1. **Even Parity (EV)**
2. **Odd Parity (OP)**

These bits work as guard bits.

---

### 🟦 Even Parity Bit

📌 Example 1:
```
Data: 101011
Step 1: Number of 1s = 4 (Even)
Step 2: Add 0 to keep it even
➡️ Even Parity Bit = 0
```

📌 Example 2:
```
Data: 111011
Step 1: Number of 1s = 5 (Odd)
Step 2: Add 1 to make it even ➡️ 6
➡️ Even Parity Bit = 1
```

📋 Table:

| EP | Data    |
|----|---------|
| 0  | 101011  |
| 1  | 111011  |

---

### 🟥 Odd Parity Bit

📌 Example 1:
```
Data: 101010
Step 1: Number of 1s = 3 (Odd)
Step 2: Add 0 ➡️ Already Odd
➡️ Odd Parity Bit = 0
```

📌 Example 2:
```
Data: 111010
Step 1: Number of 1s = 4 (Even)
Step 2: Add 1 to make it Odd ➡️ 5
➡️ Odd Parity Bit = 1
```

---

## 🧠 Hamming Code (4-bit Data)

A method for **error detection and correction** using 4-bit data.

### Example:

- Source Data = `1010`  
- Received Data = `1011`

Step-by-step:

1. Arrange bits in a **Venn diagram** using 3 intersecting circles.
2. Use **even or odd parity** as guard bits in each circle (not at intersections).
3. Count 1s in each circle and assign 0 or 1 accordingly.
4. If a parity bit is `0`, it’s not protecting. If `1`, it is.
5. The bit in the overlapping area of wrongly protected circles is the **error bit**.

🎯 Corrected data = `1010`

📷 [See image](https://drive.google.com/uc?export=view&id=1G_TcSpjDK015QYrdLQCSxz6FMC1rtEWU)

---

### ✏️ Exercise

- Source Data: `0110`
- Receiver Data: `1110`

✅ Arrange in Venn diagram, apply parity rules, detect error, and solve:

🎯 Corrected data = `0110`

📷 [See image](https://drive.google.com/uc?export=view&id=1e6NV7vXNfqNarz7fxsuOsFIUhjW_E5_o)

---

## 🧮 Hamming Code (More than 4-bit Data)

📌 Example:
- Source Data = `10101001`
- Received Data = `10001001`

---

### Step-by-Step Guide

#### Step 1: Calculate Length
- N = 8
- Find `i` using:  
  `2^i - 1 >= N + i`

✔️ i = 4 satisfies `2^4 - 1 = 15 >= 8 + 4`

So, **4 parity bits** required ➡️ Total length = `8 + 4 = 12`

📷 [See image](https://drive.google.com/uc?export=view&id=1FQzxkbvaWvLkmmGNcc6aH68MY1yYi0e0)

---

### Step 2: Arrange Bits (Bit Map Table)

```
Positions: 12 11 10 9  8   7 6 5  4   3   2  1
Bits:      1  0  1 0  pt4 1 0 0 pt3  1  pt2 pt1
```

Use positions of 2^i to place parity bits: 1, 2, 4, 8

---

### Step 3: Calculate Parity Bits

- `pt1` = EP of positions 3, 5, 7, 9, 11 = EP(1, 0, 1, 0, 0) = 0  
- `pt2` = EP of 3, 6, 7, 10, 11 = EP(1, 0, 1, 1, 0) = 1  
- `pt3` = EP of 5, 6, 7, 12 = EP(0, 0, 1, 1) = 0  
- `pt4` = EP of 9, 10, 11, 12 = EP(0, 1, 0, 1) = 0

✅ Final encoded data = `101001000110`

📷 [See image](https://drive.google.com/uc?export=view&id=1VeP_WsEmZbgP61ATrf0zpRTSDrYKEKfy)

---

### Step 4: Detect Error in Received Data

Receiver data:
```
12 11 10 9  8   7 6 5  4   3   2  1
1  0  0  0  pt4 1 0 0 pt3  1  pt2 pt1
```

Recalculate parity bits:

- pt1 = EP(1, 0, 1, 0, 0) = 0  
- pt2 = EP(1, 0, 1, 0, 0) = 0  
- pt3 = EP(0, 0, 1, 1) = 0  
- pt4 = EP(0, 0, 0, 1) = 1

Syndrome = XOR(Source, Receiver) = `0010 ⊕ 1000 = 1010`

🔢 Decimal value of `1010` = 10  
📍 Error at position **10**

✅ Corrected Data = `101001000110`  
✅ Final Correct Data = `10101001`

📷 [See image](https://drive.google.com/uc?export=view&id=1E9_wjqnW2taHQIUE2Yqv8cvGZlyKl517)

---
