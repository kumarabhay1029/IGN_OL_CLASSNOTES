# MCS-202 Computer Organisation: Assembly Language Core Concepts 🚀

---

## 📚 Learning Objectives

- Understand the basics of assembly language and its role in computer organisation.
- Identify and explain key instructions: `ADD`, `SUB`, `LOAD`, `STORE`, `BEQ`, `J`.
- Trace control flow and memory operations in sample programs.
- Build strong foundations for further study (like pipelining and hazards).

---

## 1️⃣ What is Assembly Language? 🖥️

- **Definition:**  
  Assembly language is a low-level programming language that closely mirrors the instructions executed by the CPU.
- **Purpose:**  
  - Enables direct control over hardware.
  - Essential for understanding how software interacts with hardware.
  - Used in systems programming, embedded systems, and performance-critical applications.

---

## 2️⃣ Register vs. Memory: The Basics 🧠

- **Registers:**  
  Small, fast storage locations inside the CPU. Used for calculations and temporary data.
- **Memory (RAM):**  
  Larger but slower; used for storing programs and data longer-term.
- **Why move data?**  
  The CPU can only operate on data in registers, so we use `LOAD` and `STORE` instructions to transfer data between memory and registers.

---

## 3️⃣ Key Assembly Instructions 🔑

| Instruction    | Description                                      | Example             |
|----------------|--------------------------------------------------|---------------------|
| `ADD`          | Add two registers, store result in a register     | `ADD R3, R1, R2`    |
| `SUB`          | Subtract one register from another                | `SUB R3, R1, R2`    |
| `LOAD`         | Load data from memory to register                 | `LOAD R1, 0(R2)`    |
| `STORE`        | Store data from register to memory                | `STORE R1, 4(R2)`   |
| `BEQ`          | Branch if two registers are equal                 | `BEQ R1, R2, LABEL` |
| `J`            | Unconditional jump to label                       | `J LABEL`           |

---

## 4️⃣ Detailed Concepts

### A. LOAD and STORE: Moving Data 🗄️

#### **LOAD**  
- **Syntax:** `LOAD reg, offset(baseReg)`
- **Action:** Copies data from memory address `(baseReg + offset)` to `reg`.
- **Example:**  
  ```
  LOAD R1, 0(R2)   # R1 gets value from address in R2
  ```

#### **STORE**  
- **Syntax:** `STORE reg, offset(baseReg)`
- **Action:** Copies data from `reg` to memory address `(baseReg + offset)`.
- **Example:**  
  ```
  STORE R1, 4(R2)  # Store R1's value into address (R2 + 4)
  ```

#### **Visual Analogy:**  
- Registers = Desk 🧑‍💻 | Memory = Filing Cabinet 🗄️  
  - **LOAD:** Take a file from the cabinet to your desk.
  - **STORE:** Put a file from your desk back in the cabinet.

#### **Arrays & Offsets:**  
- If R2 = 1000 (start of array), memory at 1000, 1004, 1008… holds array elements:
    - `LOAD R1, 0(R2)` → R1 = first element.
    - `LOAD R1, 4(R2)` → R1 = second element.

---

### B. Control Flow: BEQ and J 🚦

#### **BEQ (Branch if Equal)**  
- **Syntax:** `BEQ R1, R2, LABEL`
- **Action:** If `R1 == R2`, jump to `LABEL`; else, continue.
- **Example:**  
  ```
  BEQ R1, R2, MATCH
  ```

#### **J (Jump)**  
- **Syntax:** `J LABEL`
- **Action:** Unconditionally jump to the instruction labeled `LABEL`.
- **Example:**  
  ```
  J END
  ```

#### **Program Flow Example:**
```assembly
BEQ R5, R6, MATCH
ADD R7, R5, R6
J   END

MATCH:
SUB R7, R5, R6

END:
# (End of program)
```
**If R5 == R6:** `SUB` runs, R7 = R5 - R6  
**If R5 ≠ R6:** `ADD` runs, R7 = R5 + R6

---

## 5️⃣ Visual: Memory Addressing Example 🎨

```
Memory (Lockers):

Address:  1000      1004      1008      1012
         +-----+   +-----+   +-----+   +-----+
         |  10 |   |  20 |   |  30 |   |  40 |
         +-----+   +-----+   +-----+   +-----+
           ^         ^         ^         ^
         0(R2)     4(R2)     8(R2)    12(R2)
```

---

## 6️⃣ Practice Questions 💡

1. **What does this do if R2 = 200, Memory[204] = 17?**  
   ```assembly
   LOAD R3, 4(R2)
   ```
   **Answer:** Loads 17 into R3.

2. **If R1 = 5, R2 = 5, what happens here?**  
   ```assembly
   BEQ R1, R2, LABEL
   ADD R3, R1, R2
   LABEL:
   SUB R3, R1, R2
   ```
   **Answer:** `SUB` runs, R3 = 0; `ADD` is skipped.

3. **What does `STORE R4, 8(R5)` do?**  
   **Answer:** Stores value from R4 into memory at address (R5 + 8).

---

## 7️⃣ Quick Tips & Memory Aids 📝

- **Registers are like scratch paper 🗒️:** Fast, but limited.
- **Memory is like a filing cabinet 🗄️:** Lots of space, but slower.
- **Use LOAD/STORE to move data between them.**
- **Control flow (BEQ/J):** Like road signs telling your program where to go.

---

## ⭐ Summary

- Assembly language brings you closest to how computers “think.”
- **LOAD/STORE** move data; **BEQ/J** control the program’s path.
- Mastering these basics builds a strong foundation for understanding more complex computer architecture topics!

---

**Best of luck with your revision! You’re building real computer scientist skills—keep it up!** 🌟🧠✨