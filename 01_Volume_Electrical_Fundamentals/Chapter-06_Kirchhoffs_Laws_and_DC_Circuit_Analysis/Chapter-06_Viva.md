\# Chapter 06

\# Viva Questions \& Answers

\## Kirchhoff's Laws and DC Circuit Analysis

\---

\## Instructions

\- Read the question carefully.

\- Try to answer it yourself before reading the answer.

\- Focus on understanding the concept instead of memorizing the answer.

\- Practice speaking the answer aloud for Technical Viva and Job Interviews.

\---

\# Basic Viva

\### Viva-001

\*\*Question\*\*

State Kirchhoff's Current Law.

\*\*Answer\*\*

Kirchhoff's Current Law states that the algebraic sum of all Currents at a Node is zero. Therefore, total Current entering a Node equals total Current leaving it.

\*\*Key Points\*\*

\- KCL is applied at a Node.
\- Mathematically, ΣI = 0.
\- It is based on conservation of electric charge.

\*\*Remember\*\*

Current Entering = Current Leaving

\*\*Follow-up Questions\*\*

1\. What is the physical basis of KCL?
2\. What sign convention can be used?
3\. Can Current direction be assumed?
4\. What does a negative Current mean?

\*\*Reference\*\*

Chapter-06 → Topic-01

\---

\### Viva-002

\*\*Question\*\*

Why is KCL based on conservation of charge?

\*\*Answer\*\*

Electric charge cannot be created or destroyed at an ordinary circuit Node. When charge does not continuously accumulate there, the rate of charge entering must equal the rate leaving.

\*\*Key Points\*\*

\- Current is the rate of charge flow.
\- Net charge does not continuously accumulate at a Node.
\- The Current balance therefore equals zero.

\*\*Remember\*\*

Charge Conservation Produces Current Balance

\*\*Follow-up Questions\*\*

1\. What is the relationship between Current and Charge?
2\. What is a lumped circuit?
3\. How is KCL used in Parallel Circuits?
4\. How can KCL verify measurements?

\*\*Reference\*\*

Chapter-06 → Topic-01

\---

\### Viva-003

\*\*Question\*\*

State Kirchhoff's Voltage Law.

\*\*Answer\*\*

Kirchhoff's Voltage Law states that the algebraic sum of all Voltage rises and drops around any closed Loop is zero. Therefore, the sum of Voltage rises equals the sum of Voltage drops.

\*\*Key Points\*\*

\- KVL is applied around a closed Loop.
\- Mathematically, ΣV = 0.
\- It is based on conservation of energy.

\*\*Remember\*\*

Voltage Rises = Voltage Drops

\*\*Follow-up Questions\*\*

1\. What is the physical basis of KVL?
2\. Can a Loop be traversed anticlockwise?
3\. How is a source rise identified?
4\. How is a resistor drop identified?

\*\*Reference\*\*

Chapter-06 → Topic-02

\---

\### Viva-004

\*\*Question\*\*

Why is KVL based on conservation of energy?

\*\*Answer\*\*

A charge that travels around a closed Loop and returns to its starting point has no net change in Energy. The Energy gained from sources therefore equals the Energy converted or lost in circuit elements.

\*\*Key Points\*\*

\- Voltage represents Energy per unit charge.
\- A closed trip returns to the starting potential.
\- Source rises and component drops balance.

\*\*Remember\*\*

Closed Loop → Zero Net Energy Change per Charge

\*\*Follow-up Questions\*\*

1\. What is Voltage?
2\. Why must the path be closed?
3\. How does KVL apply to a Series Circuit?
4\. How can KVL check a measured circuit?

\*\*Reference\*\*

Chapter-06 → Topic-02

\---

\### Viva-005

\*\*Question\*\*

What are a Node and a Branch?

\*\*Answer\*\*

A Node is a common conducting connection between circuit terminals and has one electrical potential. A Branch is a path between two Nodes containing one or more circuit elements and carrying one branch Current.

\*\*Key Points\*\*

\- Ideal wires joining points form one Node.
\- A Branch connects two Nodes.
\- Each Branch carries a defined branch Current.

\*\*Remember\*\*

Node → Common Potential; Branch → Current Path

\*\*Follow-up Questions\*\*

1\. What is an Essential Node?
2\. What is a Reference Node?
3\. How is a Branch Current written using Node Voltages?
4\. Are crossing wires always connected?

\*\*Reference\*\*

Chapter-06 → Topic-03

\---

\### Viva-006

\*\*Question\*\*

What is a Reference Node?

\*\*Answer\*\*

A Reference Node is the Node selected as the zero-Volt reference for a circuit. All other Node Voltages are measured relative to it.

\*\*Key Points\*\*

\- It is also commonly called Ground.
\- Its assigned Voltage is 0 V.
\- A convenient common Node is normally selected.

\*\*Remember\*\*

Reference Node = 0 V

\*\*Follow-up Questions\*\*

1\. Must the Reference Node be physical earth?
2\. How many Reference Nodes are selected for one analysis?
3\. Can a Node Voltage be negative?
4\. Why is the Reference Node useful?

\*\*Reference\*\*

Chapter-06 → Topic-03

\---

\### Viva-007

\*\*Question\*\*

What is the difference between a Loop and a Mesh?

\*\*Answer\*\*

A Loop is any valid closed path in a circuit. A Mesh is a Loop that contains no other Loop inside it and is the smallest independent closed path in a planar circuit.

\*\*Key Points\*\*

\- Every Mesh is a Loop.
\- Not every Loop is a Mesh.
\- Mesh Analysis is mainly applied to planar circuits.

\*\*Remember\*\*

Mesh = Loop with No Smaller Loop Inside

\*\*Follow-up Questions\*\*

1\. What is a planar circuit?
2\. Can KVL be applied to any Loop?
3\. What is a Mesh Current?
4\. How are independent Loops counted?

\*\*Reference\*\*

Chapter-06 → Topic-04

\---

\### Viva-008

\*\*Question\*\*

What is Node-Voltage Analysis?

\*\*Answer\*\*

Node-Voltage Analysis is a systematic circuit-analysis method that uses KCL and Ohm's Law to determine unknown Node Voltages relative to a selected Reference Node.

\*\*Key Points\*\*

\- Select a Reference Node first.
\- Express branch Currents using Node-Voltage differences.
\- Apply KCL at the required non-reference Nodes.

\*\*Remember\*\*

Node Analysis = KCL + Ohm's Law

\*\*Follow-up Questions\*\*

1\. What is the first analysis step?
2\. How is Current between two Nodes calculated?
3\. What is a Supernode?
4\. When is Node Analysis efficient?

\*\*Reference\*\*

Chapter-06 → Topic-05

\---

\### Viva-009

\*\*Question\*\*

What is Mesh-Current Analysis?

\*\*Answer\*\*

Mesh-Current Analysis is a systematic method that assigns an assumed Current to each independent Mesh and uses KVL and Ohm's Law to solve the unknown Currents.

\*\*Key Points\*\*

\- Identify the independent Meshes.
\- Assign convenient Mesh-Current directions.
\- Include shared-resistor Current differences.

\*\*Remember\*\*

Mesh Analysis = KVL + Ohm's Law

\*\*Follow-up Questions\*\*

1\. Why are Mesh Currents often clockwise?
2\. What is a shared Branch Current?
3\. What is a Supermesh?
4\. When is Mesh Analysis efficient?

\*\*Reference\*\*

Chapter-06 → Topic-06

\---

\### Viva-010

\*\*Question\*\*

What does a negative calculated Current mean?

\*\*Answer\*\*

A negative calculated Current means that the actual Current direction is opposite to the direction assumed before solving. It does not mean that the circuit laws failed.

\*\*Key Points\*\*

\- Current direction is a reference choice.
\- The magnitude remains meaningful.
\- The negative sign reverses the assumed direction.

\*\*Remember\*\*

Negative Current → Opposite Actual Direction

\*\*Follow-up Questions\*\*

1\. Can a Node Voltage be negative?
2\. Can a Mesh Current be negative?
3\. Should the equation be solved again?
4\. How should the final direction be reported?

\*\*Reference\*\*

Chapter-06 → Topics-05 and 06

\---

\# Advanced Viva

\### Viva-011

\*\*Question\*\*

Explain a consistent KCL sign convention.

\*\*Answer\*\*

One valid convention treats Currents entering a Node as positive and Currents leaving as negative, giving ΣI = 0. The opposite convention is equally valid if it is used consistently throughout the equation.

\*\*Key Points\*\*

\- Direction determines the algebraic sign.
\- Either convention can be selected.
\- Mixing conventions produces incorrect equations.

\*\*Remember\*\*

Convention Choice Is Flexible; Consistency Is Mandatory

\*\*Follow-up Questions\*\*

1\. Write KCL for two entering and two leaving Currents.
2\. How is an unknown direction assumed?
3\. What does a negative result show?
4\. How can the Node balance be checked?

\*\*Reference\*\*

Chapter-06 → Topic-01

\---

\### Viva-012

\*\*Question\*\*

Explain the KVL sign convention for a Voltage source and a resistor.

\*\*Answer\*\*

Traversing a source from negative to positive is a Voltage rise, while positive to negative is a drop. Traversing a resistor in the assumed Current direction is an IR drop; traversing against Current is an IR rise.

\*\*Key Points\*\*

\- Loop direction may be clockwise or anticlockwise.
\- Component polarity determines sign.
\- All rises and drops must be included algebraically.

\*\*Remember\*\*

Source − to + → Rise; Resistor with Current → Drop

\*\*Follow-up Questions\*\*

1\. What happens if Loop direction is reversed?
2\. How is passive polarity marked?
3\. Can a resistor produce a rise in the selected traversal direction?
4\. How is KVL verified experimentally?

\*\*Reference\*\*

Chapter-06 → Topic-02

\---

\### Viva-013

\*\*Question\*\*

How is a resistor Branch Current expressed using Node Voltages?

\*\*Answer\*\*

For a resistor R connected between V₁ and V₂, Current assumed from V₁ toward V₂ is I = (V₁ − V₂)/R. Reversing the assumed direction reverses the Voltage difference.

\*\*Key Points\*\*

\- Use the starting Node Voltage minus the ending Node Voltage.
\- Divide the difference by Resistance.
\- The result's sign confirms or reverses the assumption.

\*\*Remember\*\*

Branch I = Node-Voltage Difference / R

\*\*Follow-up Questions\*\*

1\. What is Current from V₂ to V₁?
2\. What is Current from Node V to Ground?
3\. What happens when V₁ = V₂?
4\. Can the Branch Current be negative?

\*\*Reference\*\*

Chapter-06 → Topic-05

\---

\### Viva-014

\*\*Question\*\*

Explain the complete procedure for Node-Voltage Analysis.

\*\*Answer\*\*

Identify Nodes and Branches, select a Reference Node, label unknown Node Voltages, express Branch Currents using Ohm's Law, apply KCL at the required Nodes, solve the simultaneous equations and then calculate Branch Currents and Powers.

\*\*Key Points\*\*

\- Build equations from circuit topology.
\- Keep Current directions and signs consistent.
\- Verify KCL and Power balance after solving.

\*\*Remember\*\*

Identify → Reference → Label → KCL → Solve → Verify

\*\*Follow-up Questions\*\*

1\. How many Node equations are normally required?
2\. How are Current sources included?
3\. When is a Supernode required?
4\. How is Power balance checked?

\*\*Reference\*\*

Chapter-06 → Topic-05

\---

\### Viva-015

\*\*Question\*\*

What is a Supernode?

\*\*Answer\*\*

A Supernode is formed when an ideal Voltage source connects two non-reference Nodes. KCL is written around the combined boundary, and a separate Voltage-constraint equation relates the two Node Voltages.

\*\*Key Points\*\*

\- It contains the Voltage source and connected Nodes.
\- KCL handles external Branch Currents.
\- The source supplies the Voltage constraint.

\*\*Remember\*\*

Voltage Source Between Unknown Nodes → Supernode

\*\*Follow-up Questions\*\*

1\. What if the Voltage source connects to Ground?
2\. What equation describes the source constraint?
3\. Which Currents are included in Supernode KCL?
4\. Is a Supernode a physical component?

\*\*Reference\*\*

Chapter-06 → Topic-05

\---

\### Viva-016

\*\*Question\*\*

Explain the complete procedure for Mesh-Current Analysis.

\*\*Answer\*\*

Identify independent Meshes, assign Mesh Currents, mark source polarities and resistor drops, write KVL equations for each Mesh, use Current differences for shared elements, solve the equations and calculate Branch Currents, Voltages and Powers.

\*\*Key Points\*\*

\- Standard Mesh Analysis is used for planar circuits.
\- Shared Branches require algebraic Current differences.
\- Final results should satisfy KCL, KVL and Power balance.

\*\*Remember\*\*

Identify → Assign → KVL → Solve → Verify

\*\*Follow-up Questions\*\*

1\. How many Mesh equations are required?
2\. Why are directions often all clockwise?
3\. How is a shared resistor handled?
4\. What does a negative Mesh Current mean?

\*\*Reference\*\*

Chapter-06 → Topic-06

\---

\### Viva-017

\*\*Question\*\*

What is a Supermesh?

\*\*Answer\*\*

A Supermesh is formed when an ideal Current source lies in a Branch shared by two Meshes. KVL is written around the outer perimeter, and a Current-constraint equation relates the two Mesh Currents.

\*\*Key Points\*\*

\- The Current-source Branch is excluded from the KVL path.
\- The outside path forms the Supermesh.
\- The source direction determines the Current constraint.

\*\*Remember\*\*

Current Source Between Meshes → Supermesh

\*\*Follow-up Questions\*\*

1\. What if the Current source belongs to one Mesh only?
2\. How is the constraint equation written?
3\. Is a Supermesh used in non-planar circuits?
4\. How is the Current-source Voltage found afterward?

\*\*Reference\*\*

Chapter-06 → Topic-06

\---

\### Viva-018

\*\*Question\*\*

How is a shared resistor handled in Mesh Analysis?

\*\*Answer\*\*

If clockwise Mesh Currents I₁ and I₂ oppose each other through a shared resistor R, the Branch Current in the I₁ direction is I₁ − I₂. Its Voltage drop in that direction is R(I₁ − I₂).

\*\*Key Points\*\*

\- Adjacent Mesh Currents oppose in the shared Branch.
\- Use the algebraic Current difference.
\- Reverse the order for the other Mesh equation.

\*\*Remember\*\*

Mesh 1 Drop: R(I₁ − I₂); Mesh 2 Drop: R(I₂ − I₁)

\*\*Follow-up Questions\*\*

1\. What if both actual Currents flow in the same direction?
2\. What is the physical Branch Current?
3\. How is shared-Branch Power calculated?
4\. Why must equation signs be consistent?

\*\*Reference\*\*

Chapter-06 → Topic-06

\---

\### Viva-019

\*\*Question\*\*

How do you choose between Node and Mesh Analysis?

\*\*Answer\*\*

Choose the method that produces fewer and simpler equations. Node Analysis is often efficient when there are few non-reference Essential Nodes or several Current sources. Mesh Analysis is often efficient for planar circuits with few Meshes or several Voltage sources.

\*\*Key Points\*\*

\- Both methods produce the same physical solution.
\- Circuit topology and source types guide the choice.
\- Node Analysis is not limited to planar circuits.

\*\*Remember\*\*

Choose the Method with Fewer, Simpler Equations

\*\*Follow-up Questions\*\*

1\. Which method naturally handles Current sources?
2\. Which method naturally handles Voltage sources?
3\. Why does Mesh Analysis require a planar circuit?
4\. Can both methods verify each other?

\*\*Reference\*\*

Chapter-06 → Topics-05 and 06

\---

\### Viva-020

\*\*Question\*\*

How can a DC Circuit Analysis result be verified?

\*\*Answer\*\*

Verify that Currents satisfy KCL at every required Node, Voltages satisfy KVL around closed Loops and total Power supplied equals total Power absorbed. Also confirm that units, polarities and physical magnitudes are reasonable.

\*\*Key Points\*\*

\- Check Current balance.
\- Check Voltage balance.
\- Check Power balance and physical reasonableness.

\*\*Remember\*\*

KCL Check + KVL Check + Power Check

\*\*Follow-up Questions\*\*

1\. What causes small measurement differences?
2\. How is resistor Power calculated?
3\. What does an imbalance suggest?
4\. Why are units important?

\*\*Reference\*\*

Chapter-06 → All Topics

\---
