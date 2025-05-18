# Interrupts in Computer Systems

## Table of Contents

1. [What is an Interrupt?](#what-is-an-interrupt)
2. [Why are Interrupts Important?](#why-are-interrupts-important)
3. [Causes of Interrupts](#causes-of-interrupts)
4. [Interrupt Processing (Handling)](#interrupt-processing-handling)
5. [Important Points about Interrupts](#important-points-about-interrupts)
6. [Design Issues & Techniques for Interrupt Handling](#design-issues--techniques-for-interrupt-handling)
    - [Multiple Interrupt Lines](#multiple-interrupt-lines)
    - [Software Poll](#software-poll)
    - [Daisy Chain (Hardware Poll)](#daisy-chain-hardware-poll)
    - [Bus Arbitration](#bus-arbitration)
7. [Interrupts and I/O in 8086 Assembly](#interrupts-and-io-in-8086-assembly)
    - [How Software Interrupts Work (INT Instruction)](#how-software-interrupts-work-int-instruction)
    - [Common DOS Interrupt Functions (INT 21H)](#common-dos-interrupt-functions-int-21h)
8. [Role of the Control Unit](#role-of-the-control-unit)

---

## What is an Interrupt?

- **Interrupt:** A mechanism that temporarily halts the normal sequence of CPU execution to service an event (internal or external).
- When an interrupt occurs, the CPU finishes the current instruction, then pauses the ongoing process to handle the interrupt.

**In essence:**  
"Interrupt" means to stop ongoing activity. In computing, it means to pause instruction execution (after completing the current instruction) to address an important event.

---

## Why are Interrupts Important?

- **Efficiency:** Interrupts allow the CPU to respond immediately to important events, increasing efficiency.
- **Use Cases:**  
  - Input/Output (I/O) operations  
  - Error handling (e.g., division by zero)  
  - Handling important conditions or events during program execution

---

## Causes of Interrupts

Interrupts can be caused by:

- **Program Errors:** Division by zero, exceeding result limits, address space violations, security violations.
- **Clock Interrupts:** Expiry of a program's allowed time (timer/clock signal).
- **I/O Device Interrupts:** When I/O operations start/complete or errors occur.
- **Hardware Errors:** Memory errors, power failure, etc.

---

## Interrupt Processing (Handling)

**Steps for Handling an Interrupt:**

1. **Interrupt Signal:** An I/O device or other source sends an interrupt signal to the CPU.
2. **Complete Current Instruction:** The CPU finishes the current instruction.
3. **Acknowledge Interrupt:** The CPU checks, acknowledges, and prepares to process the interrupt.
4. **Acknowledge to Device:** CPU sends an acknowledgement signal to the device.
5. **Identify Source:** CPU identifies which device/source caused the interrupt.
6. **Save Context:** CPU saves the current context (Program Counter, Processor Status Word, and general-purpose registers) to the stack.
7. **Execute ISR:** CPU jumps to the Interrupt Service Routine (ISR) to handle the event.
8. **Program on Hold:** The interrupted program is paused.
9. **Restore Context:** After ISR execution, CPU restores the saved context from the stack.
10. **Resume Program:** CPU resumes the interrupted program from where it left off.

**Key Terms:**
- **ISR (Interrupt Service Routine):** Special routine to handle the interrupt event.
- **Context:** State of the CPU (registers, PC, PSW) before the interrupt.

---

## Important Points about Interrupts

- **Interrupts must be enabled** to be acknowledged by the CPU.
- The CPU can temporarily **disable interrupts** while executing critical instructions.
- The CPU checks for interrupts **after each instruction cycle** (this is called the "interrupt cycle").
- **Interrupt Cycle:** Point in the instruction cycle when the CPU can recognize and respond to an interrupt.

---

## Design Issues & Techniques for Interrupt Handling

### 1. Multiple Interrupt Lines

- Assign a separate line (wire) for each interrupt source, each with a priority.
- The CPU services the highest priority interrupt first.
- **Limitation:** Only practical for a small number of devices.

### 2. Software Poll

- CPU jumps to a generic ISR, then polls (checks) each device status register to find the source.
- **Disadvantage:** Can be time-consuming.

### 3. Daisy Chain (Hardware Poll)

- All devices share one interrupt line.
- CPU sends an acknowledgement signal down the chain; devices respond in sequence.
- **Priority:** Determined by the device's position in the chain (closer devices have higher priority).

### 4. Bus Arbitration

- Only one device (bus master) can control the bus at a time.
- After acknowledgment, the device sends an interrupt vector (number) to the CPU.
- The CPU uses the vector to find the correct ISR.

---

## Interrupts and I/O in 8086 Assembly

### How Software Interrupts Work (INT Instruction)

- **Software Interrupt:** A program-triggered interrupt, often used for I/O operations.
- **INT n:** Instruction that triggers the interrupt vector `n`.

#### 8086 Interrupt Vector Table (IVT):
- Located in the first 1 KB of memory (256 entries, 4 bytes each)
- Each entry holds the address (CS:IP) of the ISR for that interrupt

**Process:**
1. INT instruction multiplies the number by 4 to find the IVT entry.
2. CPU loads the ISR address from the IVT.
3. CPU saves current context, jumps to ISR.
4. ISR is executed.
5. IRET instruction restores context, resumes previous program.

---

### Common DOS Interrupt Functions (INT 21H)

- **INT 21H:** Used for DOS services (I/O, etc.)
- Function is selected by placing a value in the AH register before calling INT 21H.

| Function | Usage                                    |
|----------|------------------------------------------|
| 0AH      | Buffered keyboard input (`MOV AH, 0AH`)  |
| 4CH      | Exit to DOS (`MOV AH, 4CH`)              |
| 08H      | Single ASCII character input, no echo    |
| 01H      | Single digit input with display          |
| 02H      | Display character in DL on monitor       |
| 09H      | String output                            |

---

## Role of the Control Unit

- The **control unit** issues control signals for instruction execution and interrupt handling.
- Interrupt signals from external sources are received via the control bus.

---

## Quick Recap / Tips

- **Interrupts = Efficiency:** Let the CPU respond to urgent tasks without constant polling.
- **Context Saving:** Essential for resuming the interrupted program correctly.
- **ISRs:** Handle the specific event, then return control using instructions like IRET.
- **8086 IVT:** Makes interrupt handling flexible and programmable.
- **Design Techniques:** Multiple lines, polling (software/hardware), bus arbitration.

---

**End of Notes**