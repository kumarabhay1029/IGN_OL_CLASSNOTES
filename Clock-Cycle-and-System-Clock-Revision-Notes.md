# 🕰️ Clock Cycle & System Clock — Revision Notes

---

## ⏳ What is a Clock Cycle?

- **Definition:**  
  A clock cycle is a single tick of the system clock that marks the execution of one basic operation in the CPU.
- **Analogy:**  
  Like the “second hand” on a wall clock—each tick moves the system forward step by step.

### 🔄 How It Works
- Every action in a processor (fetch, decode, execute) is synchronized to these cycles.
- Each cycle allows the CPU to perform a small, specific task.
- Multiple cycles are needed for complex instructions.

### 🧠 Why is it Important?
- Determines how fast instructions are processed.
- The more cycles per second, the faster the CPU can work.

---

## ⏲️ What is the System Clock?

- **Definition:**  
  The system clock is a physical electronic component (oscillator) that generates a steady stream of pulses.
- **Role:**  
  It coordinates and synchronizes all activities inside the CPU and other components.

### 🛠️ Hardware, Not Software!
- The system clock is a **hardware** component (often a quartz crystal oscillator), **not software** or a design document.

### 🌎 Where is it Used?
- Found on the motherboard or inside the CPU.
- Controls timing for:
  - The Control Unit (CU)
  - Arithmetic Logic Unit (ALU)
  - Registers
  - Memory access
  - Input/Output operations

---

## ⚡️ Clock Speed

- **Measured in:**  
  Hertz (Hz), Megahertz (MHz), or Gigahertz (GHz)
- **Meaning:**  
  Number of cycles per second.
- **Example:**  
  3 GHz = 3,000,000,000 cycles per second

---

## 🏗️ Variation Across Architectures

- Different CPU architectures (Intel, ARM, etc.) have different clock speeds and efficiency.
- Some CPUs do more per cycle (efficient), some rely on higher speeds.
- Clock speed alone does not guarantee performance—architecture matters!

---

## 📝 Quick Summary Table

| Term          | What It Is                      | Hardware/Software | Example/Analogy             |
|---------------|---------------------------------|-------------------|-----------------------------|
| Clock Cycle   | One tick of the system clock    | Hardware-timed    | One second on a stopwatch   |
| System Clock  | Generates timing pulses         | Hardware          | Quartz watch in a computer  |

---

## 💡 Key Takeaways

- **Clock cycle** = smallest time unit for CPU actions.
- **System clock** = hardware timer controlling the rhythm of the computer.
- Both are essential for coordination and speed in computer systems.

---