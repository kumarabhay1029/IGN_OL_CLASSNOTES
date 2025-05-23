
# 📘 MCS-202: Error Detection – Revision Notes

## 📑 Table of Contents
1. [Definition of Error](#definition-of-error)
2. [Error Detection Overview](#error-detection-overview)
3. [🔒 Parity Bit – The Guard Bit](#parity-bit--the-guard-bit)
   - [Even Parity Bit](#even-parity-bit)
   - [Odd Parity Bit](#odd-parity-bit)
4. [🔧 Hamming Code: Error Detection & Correction (4-bit Data)](#hamming-code-error-detection--correction-4-bit-data)
   - [Example: 4-bit Error Correction](#example-4-bit-error-correction)
5. [📊 Hamming Code for >4-bit Data](#hamming-code-for-more-than-4-bit-data)
   - [Step-by-Step Process](#step-by-step-process)
   - [Syndrome Calculation](#syndrome-calculation)
6. [📌 Summary](#summary)

---

## 📌 Definition of Error
🔺 **Error** is the unwanted change in data during transmission.  
Example:  
```
Original: 101 ➡️ Received: 100  
Original: 5   ➡️ Received: 4
```
📌 This indicates the data has been altered or corrupted.

---

## ✅ Error Detection Overview
🔍 Detecting errors helps us correct them.  
For example, if `101` was sent and `100` was received, we detect an error at the rightmost bit and can correct it.

---

## 🔒 Parity Bit – The Guard Bit
🛡 Just like a **guard protects**, parity bits protect data from errors.

### ✳️ Even Parity Bit
Ensures the total number of 1s in data is **even**.

Example 1:
```
Data: 101011  
Count of 1s = 4 (Even)  
Parity Bit = 0  
=> Final Data: 0 101011
```

Example 2:
```
Data: 111011  
Count of 1s = 5 (Odd)  
Need +1 to make even → Parity Bit = 1  
=> Final Data: 1 111011
```

### ✳️ Odd Parity Bit
Ensures the total number of 1s in data is **odd**.

Example 1:
```
Data: 101010  
Count of 1s = 3 (Odd)  
Parity Bit = 0  
=> Final Data: 0 101010
```

Example 2:
```
Data: 111010  
Count of 1s = 4 (Even)  
Need +1 to make it odd → Parity Bit = 1  
=> Final Data: 1 111010
```

---

## 🔧 Hamming Code: Error Detection & Correction (4-bit Data)

### 🧠 Concept
Use 3 intersecting circles (Venn diagram) to place data.  
Assign parity bits to each circle. Use **even parity** to determine each parity bit.

### Example: 4-bit Error Correction
- **Source Data**: 1010  
- **Received Data**: 1011  
- Calculate parity circles and detect the error.  
- 🔎 Error found at one bit → Corrected back to 1010.

Exercise:
- Source: `0110`  
- Received: `1110`  
- Correction gives: `0110`

---

## 📊 Hamming Code for More Than 4-bit Data

### Example:  
**Source Data**: 10101001  
**Received Data**: 10001001

### Step-by-Step Process
1. Length of data (N) = 8  
2. Calculate parity bits `i` using:  
   ```
   2^i - 1 >= N + i
   ```
   ✅ i = 4 works (2⁴ - 1 = 15 >= 12)

3. Total bits = N + i = 12  
4. Assign parity bits at positions: 1, 2, 4, 8  
5. Fill in remaining bits with source data.

### Final Arrangement:

| Position | Bit     |
|----------|---------|
| 12       | 1       |
| 11       | 0       |
| 10       | 1       |
| 9        | 0       |
| 8        | pt4     |
| 7        | 1       |
| 6        | 0       |
| 5        | 0       |
| 4        | pt3     |
| 3        | 1       |
| 2        | pt2     |
| 1        | pt1     |

#### Parity Bit Calculation (Even Parity)
- pt1 = EP(3, 5, 7, 9, 11) = 0  
- pt2 = EP(3, 6, 7, 10, 11) = 1  
- pt3 = EP(5, 6, 7, 12) = 0  
- pt4 = EP(9, 10, 11, 12) = 0  

✅ Final Hamming code = **101001000110**

### Syndrome Calculation (Error Position Detection)
Received Data = 100011000100  
Calculate parity bits again:  
- pt1 = 0  
- pt2 = 0  
- pt3 = 0  
- pt4 = 1  

Compare with source parity bits → **Syndrome = 1010** (Binary) = **10**  
✅ Error at position 10 → Corrected Data = **101001000110**

---

## 📌 Summary

| Key Concept     | Description                                        |
|-----------------|----------------------------------------------------|
| Error           | A change in data during transmission               |
| Parity Bit      | Extra bit used to detect (not correct) errors      |
| Even Parity     | Ensures even number of 1s                          |
| Odd Parity      | Ensures odd number of 1s                           |
| Hamming Code    | Detects and corrects single-bit errors             |
| Syndrome        | Identifies position of error in received data      |
