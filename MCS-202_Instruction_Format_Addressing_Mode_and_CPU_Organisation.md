# 🖥️ MCS-202: Computer Organisation – Lecture Notes

## 📅 Session Summary (2025-06-07)

---

## 🎯 Learning Objectives
- Grasp the concept of instruction formats and addressing modes.
- Understand CPU organisation, its components, and the instruction cycle.
- Identify types of instructions and their roles.

---

## 1️⃣ Instruction Formats & Addressing Modes

### 🧩 What is an Instruction Format?
An instruction format defines how each machine instruction is structured so the CPU knows:
- **Opcode:** What action to perform.
- **Operands:** Where to get the data (registers, memory, immediate).
- **Other fields:** Like addressing mode or flags.

> **Analogy:** Like a recipe card specifying what to cook, ingredients, and steps.

#### 📝 Example:

```text
+--------+---------+----------+
| Opcode | Operand | Operand  |
+--------+---------+----------+
```

---

### 📌 Addressing Modes Explained

Addressing modes tell the CPU **where** or **how** to find data for instructions.

| Addressing Mode | Example         | Meaning                                    |
|-----------------|----------------|--------------------------------------------|
| Immediate       | `MOV A, #5`    | Use value 5 directly in instruction        |
| Direct          | `MOV A, [1000]`| Use value at memory address 1000           |
| Indirect        | `MOV A, [R2]`  | Use address stored in R2 to get the value  |
| Register        | `MOV A, R2`    | Use value from register R2                 |
| Indexed         | `MOV A, [R1+X]`| Use address R1 + X                         |

> **Diagram:**  
> ```
> +--------+------+-----+
> |  ADD   | R1   |  5  |
> +--------+------+-----+
> ```

---

## 2️⃣ CPU Organisation 🏛️

### 🏗️ Main Components

- **Arithmetic Logic Unit (ALU):** Performs calculations & logic.
- **Control Unit (CU):** Directs operations, interprets instructions.
- **Registers:** Superfast, tiny storage for temporary data.
- **Buses:** Highways for data, address, and control signals.

#### 📊 Diagram

```
+-----------------------+
|      Control Unit     |
+-----------------------+
          |
          v
+-------------------+   +-----------------+
|      ALU          |<->|    Registers    |
+-------------------+   +-----------------+
          ^
          |
+-------------------------+
|         Buses           |
+-------------------------+
```

---

### 🏷️ Types of Registers

- **Program Counter (PC):** Holds address of next instruction.
- **Instruction Register (IR):** Holds the current instruction.
- **Accumulator (ACC):** Stores intermediate results.
- **Memory Address Register (MAR):** Holds memory addresses.
- **Memory Buffer Register (MBR/MDR):** Temporarily holds data from/to memory.
- **Status/Flag Register:** Stores operation results (zero, carry, etc.).
- **General Purpose Registers:** Temporary data storage for programs.

---

## 3️⃣ The Instruction Cycle 🔄

### 🕹️ Steps

1. **Fetch:** Get the next instruction from memory (PC ➡️ IR).
2. **Decode:** CU interprets the instruction and identifies the operation.
3. **Execute:** ALU or CU performs the required operation.
4. **Store:** Result is written back to memory or register.

> **Analogy:**  
> - Fetch: Read the next recipe step.  
> - Decode: Understand what to do.  
> - Execute: Do the work (mix, cook).  
> - Store: Put the dish aside and repeat.

---

## 4️⃣ Types of Instructions 🏷️

| Type                      | Examples           | Purpose                                      |
|---------------------------|--------------------|----------------------------------------------|
| Data Transfer             | `MOV`, `LOAD`      | Move data between registers and memory       |
| Arithmetic                | `ADD`, `SUB`       | Perform calculations                         |
| Logical                   | `AND`, `OR`, `NOT` | Perform logical operations                   |
| Control Transfer          | `JMP`, `CALL`      | Change sequence of execution                 |
| Input/Output              | `IN`, `OUT`        | Handle external data transfer                |

---

## 🏁 Key Takeaways

- CPU instructions are structured (format) and use various ways to access data (addressing modes).
- The CPU has specialized components for different tasks; registers play a crucial role in speed.
- All instructions go through a cycle: fetch, decode, execute, and store.
- Different instruction types allow the CPU to control data, perform logic, calculate, and interact with the world.

---

## ✨ Keep Exploring & Ask Questions!

If you have doubts or want deeper examples, feel free to ask!  
Learning is a journey—mistakes and questions are part of it. 🚀
