# 📚 MCS-202: Computer Organisation  
## 🏁 Chapter: Pipelining & Pipeline Hazards

---

## 🎯 Learning Objectives

- Understand the concept of pipelining in CPUs.
- Analyze pipeline performance and calculate speedup.
- Identify and explain different types of pipeline hazards.
- Explore solutions to pipeline hazards.

---

## ⚡ 1. What is Pipelining?

Pipelining is a technique in computer architecture where multiple instruction steps are overlapped in execution.  
Just like an assembly line in a factory, the CPU executes different stages of multiple instructions at the same time.

### 🏭 Analogy: Laundry Assembly Line

| Stage         | Laundry Example  | CPU Example          |
|---------------|------------------|----------------------|
| Stage 1       | Washing          | Instruction Fetch    |
| Stage 2       | Drying           | Instruction Decode   |
| Stage 3       | Folding          | Execute              |

- As soon as one load is washed, it moves to drying, and a new load starts washing.  
- In CPUs, as soon as one instruction moves from fetch to decode, another begins fetching.

---

## 🛠️ 2. Pipelining Stages (Classic 5-Stage Pipeline)

1. **IF (Instruction Fetch):** Retrieves instruction from memory.
2. **ID (Instruction Decode):** Decodes the instruction & reads registers.
3. **EX (Execute):** Performs operation (ALU).
4. **MEM (Memory Access):** Reads/Writes memory if needed.
5. **WB (Write Back):** Writes result back to register.

---

## ⏱️ 3. Pipelining vs. Non-Pipelining

| Concept        | Non-Pipelined            | Pipelined                         |
|----------------|--------------------------|-----------------------------------|
| Execution      | One instruction at a time | Multiple instructions in parallel |
| Throughput     | Slow                      | Fast                             |
| Resource Util. | Low                       | High                             |

### 🧮 Example

- 5-stage pipeline, each stage = 1 clock cycle
- Execute 4 instructions:

#### Non-Pipelined:
- Each instruction takes 5 cycles.
- Total = 4 × 5 = **20 cycles** ⏳

#### Pipelined:
- Fill pipeline: 5 cycles (for first instruction)
- Then, each new instruction finishes every cycle.
- Total = 5 + (4-1) = **8 cycles** 🚀

---

## 📈 4. Pipeline Performance Calculation

**Speedup Formula:**

\[
\text{Speedup} = \frac{\text{Non-pipelined time}}{\text{Pipelined time}}
\]

*Example:*  
\[
\text{Speedup} = \frac{20}{8} = 2.5 \times
\]

---

## 🚨 5. Pipeline Hazards

Pipeline hazards are problems that prevent the next instruction in the pipeline from executing during its designated clock cycle.

### 🧩 Types of Hazards

1. **Data Hazards**  
   - Occur when instructions depend on results of previous instructions.
   - **Example:**  
     ```
     LOAD R1, 0(R2)
     ADD  R3, R1, R4  // Needs R1 from previous instruction
     ```
   - 🛑 Solution: Forwarding, stalls, or hazard detection.

2. **Control Hazards**  
   - Occur due to branch instructions (jumps, conditional branches).
   - **Example:**  
     ```
     BEQ  R1, R2, LABEL
     ```
   - 🛑 Solution: Branch prediction, delayed branching.

3. **Structural Hazards**  
   - Occur when hardware resources are insufficient to handle all instructions in the pipeline.
   - **Example:** Both IF and MEM stages need memory access at the same time.
   - 🛑 Solution: Resource duplication, smart scheduling.

---

## 🏗️ 6. Data Hazard Example (With Stalls)

| Clock | LOAD (I1) | ADD (I2) | SUB (I3) |
|-------|-----------|----------|----------|
| 1     | IF        |          |          |
| 2     | ID        | IF       |          |
| 3     | EX        | ID       | IF       |
| 4     | MEM       | *STALL*  | ID       |
| 5     | WB        | *STALL*  | *STALL*  |
| 6     |           | ID       | *STALL*  |
| 7     |           | EX       | ID       |
| 8     |           | MEM      | EX       |
| 9     |           | WB       | MEM      |
|10     |           |          | WB       |

*Stalls are inserted to resolve data hazards (when ADD and SUB need the value loaded by LOAD).*

---

## ⏳ 7. Real-World Pipeline Timing Example

- 4-stage pipeline: IF (1ns), ID (1ns), EX (2ns), WB (1ns)
- Longest stage (EX) sets clock: 2ns per stage
- 8 instructions, no hazards

**Total time:**  
- Fill pipeline: 4 × 2ns = 8ns  
- Remaining 7 instructions: 7 × 2ns = 14ns  
- **Total = 22ns**

**Average per instruction:**  
\[
22\text{ns} / 8 = 2.75\text{ns}
\]

---

## 🧠 8. Key Takeaways

- Pipelining increases instruction throughput by overlapping stages.
- Hazards (data, control, structural) can disrupt pipeline flow.
- Solutions include forwarding, stalling, branch prediction, and resource duplication.
- Performance gain depends on how well hazards are managed.

---

## 💡 9. Tips & Tricks

- Visualize pipelines as assembly lines.
- Always check for dependencies between instructions.
- Understand how hazard solutions work (especially for exams!).

---

## 🎓 10. Practice & Revision

- Draw pipeline tables for given instruction sequences.
- Calculate speedup for different pipeline configurations.
- Identify hazards and suggest appropriate solutions.

---

## 🙋‍♂️ Questions? Doubts?  
Ask in your group 

---

*Keep practicing, and pipelining will become second nature! 🚀*
