# 🌟 Introduction to C++

## 😃 Overview
C++ is a **high-level, general-purpose programming language** developed by **Bjarne Stroustrup** at Bell Labs in 1979. It is an **extension of the C programming language**, adding features that support **object-oriented programming (OOP)**, **generic programming**, and **low-level memory manipulation**.

C++ is widely used in developing:
- 🖥️ Operating Systems (Windows, macOS parts)
- 🎮 Games and graphics engines
- 💾 Database systems
- 🚀 High-performance applications

📘 **Official site for C++ standardization:** [https://isocpp.org/](https://isocpp.org/)

---

## 🧠 What is C++?
C++ is both a **compiled** and **strongly typed** language. It allows developers to write **efficient** and **fast** code while still supporting **object-oriented concepts** such as classes and inheritance.

### Key Points:
- C++ = C + OOP + additional libraries
- It is **platform-independent** (can run on any OS)
- Used in **competitive programming**, **software development**, and **embedded systems**

🖼️ **Reference Diagram:** [C++ Overview Image (GeeksforGeeks)](https://www.geeksforgeeks.org/introduction-to-c-plus-plus/)

---

## 💡 Programming and Program
A **program** is a set of **instructions** given to a computer to perform a specific task.  
**Programming** is the process of designing and writing these instructions using a language that computers can understand.

### 💻 Example — A Simple C++ Program
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
```
✅ **Explanation:**
- `#include <iostream>` → Includes input-output stream library.
- `int main()` → The entry point of every C++ program.
- `cout` → Prints text on the screen.
- `return 0;` → Ends the program successfully.

🖼️ **Program Flow Diagram:** [https://upload.wikimedia.org/wikipedia/commons/4/4e/Program_flowchart_example.png](https://upload.wikimedia.org/wikipedia/commons/4/4e/Program_flowchart_example.png)

---

## 🏗️ Programming Languages
Programming languages are the tools that help us communicate with computers.

### Types of Programming Languages:
| Type | Description | Example |
|------|--------------|----------|
| 🧮 Low-level | Close to machine code, hard for humans | Assembly, Machine code |
| 💬 High-level | Easier to understand, close to English | C++, Java, Python |
| 🔀 Middle-level | Combines low + high-level control | C, C++ |

---

## 🔧 Structured Programming Paradigm
Structured programming is based on **functions, loops, and conditionals**. It focuses on dividing a program into **small, manageable blocks**.

### ✨ Features:
- Uses **functions** to organize code
- Flow control using `if`, `for`, `while`
- Focus on **logic** and **control flow**

📘 **Example:**
```cpp
int add(int a, int b) {
    return a + b;
}

int main() {
    cout << add(5, 3);
}
```
🖼️ **Structured Flow Example:** [https://static.javatpoint.com/cpp/images/structured-programming-in-cpp.png](https://static.javatpoint.com/cpp/images/structured-programming-in-cpp.png)

---

## 🧩 Object-Oriented Programming (OOP) Paradigm
OOP organizes code around **objects** — data and functions combined.

### ⚙️ Core Principles (Pillars of OOP):
| Concept | Description |
|----------|--------------|
| **Encapsulation** | Wrapping data and methods in one unit (class) |
| **Abstraction** | Hiding complexity from the user |
| **Inheritance** | Deriving new classes from existing ones |
| **Polymorphism** | Using one function in different forms |

📘 **Example:**
```cpp
class Car {
public:
    string brand;
    void honk() {
        cout << "Beep! Beep!";
    }
};

int main() {
    Car myCar;
    myCar.brand = "Tesla";
    myCar.honk();
}
```
🖼️ **OOP Diagram:** [https://static.javatpoint.com/cpp/images/oops-concept-in-cpp.png](https://static.javatpoint.com/cpp/images/oops-concept-in-cpp.png)

---

## ⚖️ Structured vs OOP
| Feature | Structured Programming | OOP |
|----------|-------------------------|-----|
| Focus | Functions | Objects |
| Data Security | Low | High (Encapsulation) |
| Reusability | Limited | High |
| Example | C | C++ |

🖼️ **Comparison Chart:** [https://i.ytimg.com/vi/7c0G2b7aP9I/maxresdefault.jpg](https://i.ytimg.com/vi/7c0G2b7aP9I/maxresdefault.jpg)

---

## 🌈 Benefits of OOP
- 🔄 **Reusability:** Write once, use many times
- 🔒 **Security:** Data hiding via encapsulation
- 🧱 **Modularity:** Easy to manage large programs
- ⚙️ **Extensibility:** Add new features without breaking code
- 🧠 **Easy Maintenance:** Bugs are easier to locate and fix

🖼️ **Reference:** [https://www.guru99.com/object-oriented-programming.html](https://www.guru99.com/object-oriented-programming.html)

---

## 🧩 Practice Questions

### 🧠 Short Answer
1. What is C++ and who developed it?
2. Define a program and programming.
3. Explain the difference between structured and object-oriented programming.
4. List any three benefits of OOP.

### 💭 Descriptive
1. Explain the main features that make C++ a hybrid language.
2. Compare structured programming and OOP with examples.
3. Discuss the role of encapsulation and inheritance in C++.

### 🧮 MCQs
1. Who developed C++?
   - A) Dennis Ritchie  
   - B) Bjarne Stroustrup ✅  
   - C) James Gosling  
   - D) Guido van Rossum

2. Which of the following is **not** an OOP concept?  
   - A) Encapsulation  
   - B) Inheritance  
   - C) Polymorphism  
   - D) Compilation ✅

3. C++ was developed in which year?  
   - A) 1972  
   - B) 1979 ✅  
   - C) 1983  
   - D) 1990

---

🌟 **End of File — Next Topic:** Programming and Program → Programming Language → Structured & OOP Paradigm → OOP Concepts → Benefits of OOP

