# 🧭 Addressing Modes — Revision Notes

---

## 🔎 What Are Addressing Modes?

- **Definition:**  
  Addressing modes are techniques used in computer architecture to specify how and where the operands (data) for instructions are accessed or located.
- **Purpose:**  
  They provide flexibility and efficiency in programming by offering multiple ways to access data.

---

## 🏷️ Common Types of Addressing Modes

### 1️⃣ Immediate Addressing
- **Description:** The operand value is given directly in the instruction.
- **Example:** `MOV R1, #5` (Moves the value 5 into register R1)
- **Analogy:** Like a recipe that tells you to “add 2 teaspoons of sugar”—the value is right there.

---

### 2️⃣ Direct Addressing
- **Description:** The instruction specifies the exact memory address of the operand.
- **Example:** `LOAD R1, 1000` (Loads the value from memory address 1000 into R1)
- **Analogy:** “Go directly to house number 1000 to pick up the package.”

---

### 3️⃣ Indirect Addressing
- **Description:** The address of the operand is stored in a register or memory location.
- **Example:** `LOAD R1, (R2)` (R2 contains the address; load value from where R2 points)
- **Analogy:** “Ask your friend (R2) for the address, then go there.”

---

### 4️⃣ Register Addressing
- **Description:** The operand is located in a CPU register.
- **Example:** `ADD R1, R2, R3` (Adds values in R2 and R3, stores in R1)
- **Analogy:** “Use the ingredients already on your kitchen counter.”

---

### 5️⃣ Indexed Addressing
- **Description:** Combines a base address and an offset (useful for arrays).
- **Example:** `LOAD R1, 1000(R2)` (Final address = 1000 + contents of R2)
- **Analogy:** “Start at house 1000, then walk R2 houses down the street.”

---

## 📝 Quick Comparison Table

| Mode               | Example            | Description                             | Analogy                           |
|--------------------|-------------------|-----------------------------------------|-----------------------------------|
| Immediate          | MOV R1, #5        | Operand is in instruction               | Value is right there              |
| Direct             | LOAD R1, 1000     | Address given directly                  | Go to specific house              |
| Indirect           | LOAD R1, (R2)     | Address stored in register/memory       | Ask friend for address            |
| Register           | ADD R1, R2, R3    | Operand is in register                  | Use what’s on your counter        |
| Indexed            | LOAD R1, 1000(R2) | Base + offset for final address         | Start at place, move steps ahead  |

---

## 💡 Why Are Addressing Modes Important?

- **Flexibility:** Allows different ways to access and manipulate data.
- **Efficiency:** Optimizes program size and speed.
- **Power:** Supports advanced programming constructs (like loops, arrays, pointers).

---

## 🎯 Key Takeaways

- Addressing modes define how instructions access operands.
- They make programming more flexible and powerful.
- Understanding them is crucial for mastering computer organization and assembly language.

---