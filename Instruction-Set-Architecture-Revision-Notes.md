# 🖥️ Instruction Set Architecture (ISA) — Revision Notes

---

## 📚 What is Instruction Set Architecture (ISA)?

- **Definition:**  
  ISA is the part of computer architecture that defines the set of instructions a CPU can execute, and how those instructions are formatted and used.
- **Role:**  
  Acts as a bridge between hardware (CPU) and software (programs), specifying how programs control the processor.

### 🏗️ Key Components of ISA

- **Instruction Set:**  
  The list of all operations a processor can perform (e.g., ADD, SUB, LOAD, STORE).
- **Instruction Format:**  
  The layout or structure of bits in an instruction (opcode, operands, etc.).
- **Data Types:**  
  Defines the types of data the CPU can handle (integers, floats, characters, etc.).
- **Registers:**  
  Small, fast storage locations inside the CPU, specified and managed by the ISA.
- **Addressing Modes:**  
  Ways in which operands (data) can be accessed or specified in instructions.

---

## 🔑 Why is ISA Important?

- **Compatibility:**  
  Software written for a specific ISA will only run on CPUs that implement that ISA.
- **Performance:**  
  The design of the ISA impacts how efficiently a CPU can execute programs.
- **Portability:**  
  Programs can be ported across different hardware that shares the same ISA.

---

## 🏷️ Examples of Popular ISAs

- **x86:** Used in most desktop and laptop computers.
- **ARM:** Common in smartphones, tablets, and embedded systems.
- **RISC-V:** An open-source, modern ISA used in research and some commercial devices.

---

## 🧩 Types of Instructions (in an ISA)

1. **Data Movement:** Move data between registers, memory, or I/O (e.g., `MOV`, `LOAD`, `STORE`).
2. **Arithmetic/Logic:** Perform calculations or logical operations (e.g., `ADD`, `SUB`, `AND`).
3. **Control:** Change the sequence of execution (e.g., `JUMP`, `CALL`, `RETURN`).

---

## 📝 Quick Comparison Table

| Feature             | Example (x86)   | Example (ARM)    |
|---------------------|-----------------|------------------|
| Data Movement       | MOV EAX, EBX    | LDR R0, [R1]     |
| Arithmetic/Logic    | ADD EAX, 2      | ADD R0, R1, #2   |
| Control             | JMP 0x200       | B 0x200          |

---

## 💡 Key Takeaways

- ISA defines **what** a CPU can do and **how** it does it.
- It is crucial for software compatibility and system performance.
- Knowing the ISA helps understand how computers execute programs at the lowest level.

---