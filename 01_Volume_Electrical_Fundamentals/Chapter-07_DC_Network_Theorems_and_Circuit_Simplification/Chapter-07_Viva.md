\# Chapter 07

\# Viva Questions \& Answers

\## DC Network Theorems and Circuit Simplification

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

What is a Network Theorem?

\*\*Answer\*\*

A Network Theorem is a systematic principle used to simplify or analyze an electrical network. It helps determine an unknown Voltage, Current or Power without solving every part of a complex circuit directly.

\*\*Key Points\*\*

\- Network Theorems provide structured analysis methods.
\- They are mainly applied to linear electrical networks.
\- Different theorems are useful for different analysis objectives.

\*\*Remember\*\*

Network Theorem → Simplify the Circuit, Preserve the Required Behavior

\*\*Follow-up Questions\*\*

1\. What is a linear network?
2\. Why are Network Theorems useful?
3\. Which theorem is useful for one load?
4\. Can a simplified circuit replace the complete network at all terminals?

\*\*Reference\*\*

Chapter-07 → Topic-01

\---

\### Viva-002

\*\*Question\*\*

What is a linear circuit?

\*\*Answer\*\*

A linear circuit is a circuit in which the output is directly proportional to the input and the circuit parameters remain constant. Ideal resistors with constant Resistance and ideal independent or dependent sources form common linear circuit models.

\*\*Key Points\*\*

\- A linear circuit obeys proportionality and additivity.
\- Constant-value resistors are linear elements.
\- Superposition requires linearity.

\*\*Remember\*\*

Linear Circuit → Proportional Response + Additive Response

\*\*Follow-up Questions\*\*

1\. Is an ideal diode linear?
2\. What is proportionality?
3\. What is additivity?
4\. Why is linearity important in Superposition?

\*\*Reference\*\*

Chapter-07 → Topic-01

\---

\### Viva-003

\*\*Question\*\*

State the Superposition Theorem.

\*\*Answer\*\*

The Superposition Theorem states that in a linear circuit containing two or more independent sources, the Voltage or Current in any element equals the algebraic sum of the Voltages or Currents produced by each independent source acting alone.

\*\*Key Points\*\*

\- Consider one independent source at a time.
\- Keep dependent sources active.
\- Add individual responses algebraically with their signs.

\*\*Remember\*\*

Total Response = Algebraic Sum of Individual Source Responses

\*\*Follow-up Questions\*\*

1\. How is an ideal Voltage source deactivated?
2\. How is an ideal Current source deactivated?
3\. Why must dependent sources remain active?
4\. Can Superposition be applied directly to Power?

\*\*Reference\*\*

Chapter-07 → Topic-02

\---

\### Viva-004

\*\*Question\*\*

How are independent sources deactivated during Superposition?

\*\*Answer\*\*

An ideal independent Voltage source is replaced by a short circuit because its deactivated Voltage is zero. An ideal independent Current source is replaced by an open circuit because its deactivated Current is zero. Internal Resistance, if given, must remain in the circuit.

\*\*Key Points\*\*

\- Zero-Volt ideal source → Short Circuit.
\- Zero-Ampere ideal source → Open Circuit.
\- A practical source retains its internal Resistance.

\*\*Remember\*\*

Voltage Source OFF → Short; Current Source OFF → Open

\*\*Follow-up Questions\*\*

1\. Are dependent sources deactivated?
2\. Why is a zero-Volt source a short circuit?
3\. Why is a zero-Ampere source an open circuit?
4\. What happens to source internal Resistance?

\*\*Reference\*\*

Chapter-07 → Topic-02

\---

\### Viva-005

\*\*Question\*\*

Why is Superposition not applied directly to Power?

\*\*Answer\*\*

Superposition is not applied directly to Power because Power is a nonlinear function of Voltage or Current. For example, resistor Power is P = I²R or P = V²/R. First find the total Voltage or Current by Superposition, and then calculate Power.

\*\*Key Points\*\*

\- Voltage and Current responses can be superimposed.
\- Power depends on a squared quantity or a product.
\- Individual source Powers generally do not add to the actual load Power.

\*\*Remember\*\*

Superimpose Voltage or Current First; Calculate Power Last

\*\*Follow-up Questions\*\*

1\. What is the resistor Power formula?
2\. Is Power a linear response?
3\. Can negative source contributions occur?
4\. How is total load Power calculated after Superposition?

\*\*Reference\*\*

Chapter-07 → Topic-02

\---

\### Viva-006

\*\*Question\*\*

State Thevenin's Theorem.

\*\*Answer\*\*

Thevenin's Theorem states that any linear two-terminal network can be replaced, as viewed from its terminals, by one ideal Voltage source Vth in Series with one Resistance Rth.

\*\*Key Points\*\*

\- Vth is the open-circuit terminal Voltage.
\- Rth is the equivalent Resistance seen from the load terminals.
\- The equivalent preserves the original terminal behavior.

\*\*Remember\*\*

Thevenin Equivalent → Vth in Series with Rth

\*\*Follow-up Questions\*\*

1\. How is Vth measured or calculated?
2\. How is Rth found?
3\. Why is the load removed first?
4\. What is a two-terminal network?

\*\*Reference\*\*

Chapter-07 → Topic-03

\---

\### Viva-007

\*\*Question\*\*

How do you find the Thevenin Voltage?

\*\*Answer\*\*

Remove the load from the selected terminals and calculate the Voltage across those open terminals. This open-circuit Voltage, with the chosen polarity, is the Thevenin Voltage Vth.

\*\*Key Points\*\*

\- Identify the load terminals.
\- Remove the load without changing the source network.
\- Calculate the open-circuit terminal Voltage.

\*\*Remember\*\*

Vth = Voc

\*\*Follow-up Questions\*\*

1\. Does open circuit always mean zero Voltage?
2\. Why is load Current zero during this step?
3\. How is polarity assigned?
4\. Can Node Analysis be used to find Vth?

\*\*Reference\*\*

Chapter-07 → Topic-03

\---

\### Viva-008

\*\*Question\*\*

How do you find the Thevenin Resistance?

\*\*Answer\*\*

Remove the load, deactivate all independent sources and calculate the equivalent Resistance seen into the selected terminals. Keep all dependent sources active. If dependent sources are present, apply a test source at the terminals and use Rth = Vtest/Itest; alternatively, use Rth = Voc/Isc when valid.

\*\*Key Points\*\*

\- Independent sources are deactivated.
\- Dependent sources remain active.
\- A test-source method is reliable for networks with dependent sources.

\*\*Remember\*\*

Rth = Resistance Seen from the Load Terminals

\*\*Follow-up Questions\*\*

1\. What is the test-source method?
2\. Can an Ohmmeter be connected to a live circuit?
3\. When can Rth = Voc/Isc be used?
4\. Why must dependent sources remain active?

\*\*Reference\*\*

Chapter-07 → Topic-03

\---

\### Viva-009

\*\*Question\*\*

State Norton's Theorem.

\*\*Answer\*\*

Norton's Theorem states that any linear two-terminal network can be replaced, as viewed from its terminals, by one ideal Current source IN in Parallel with one Resistance RN.

\*\*Key Points\*\*

\- IN is the short-circuit terminal Current.
\- RN is the equivalent Resistance seen from the terminals.
\- The Norton equivalent preserves terminal Voltage–Current behavior.

\*\*Remember\*\*

Norton Equivalent → IN in Parallel with RN

\*\*Follow-up Questions\*\*

1\. How is IN determined?
2\. What is the relation between RN and Rth?
3\. Why is the output shorted to find IN?
4\. When is Norton form convenient?

\*\*Reference\*\*

Chapter-07 → Topic-04

\---

\### Viva-010

\*\*Question\*\*

What is the relationship between Thevenin and Norton equivalents?

\*\*Answer\*\*

Thevenin and Norton equivalents describe the same terminal behavior. Their Resistances are equal, so RN = Rth. Their source values are related by Vth = INRN and IN = Vth/Rth.

\*\*Key Points\*\*

\- Rth = RN.
\- Vth = INRN.
\- IN = Vth/Rth.

\*\*Remember\*\*

Same Two-Terminal Network, Two Equivalent Forms

\*\*Follow-up Questions\*\*

1\. How is a Thevenin source converted to Norton form?
2\. How is a Norton source converted to Thevenin form?
3\. Do both forms give the same load Current?
4\. What happens when the load value changes?

\*\*Reference\*\*

Chapter-07 → Topics-03 and 04

\---

\### Viva-011

\*\*Question\*\*

State the Maximum Power Transfer Theorem for a resistive DC circuit.

\*\*Answer\*\*

The Maximum Power Transfer Theorem states that a resistive load receives maximum Power from a linear source network when the load Resistance RL equals the Thevenin Resistance Rth seen from the load terminals.

\*\*Key Points\*\*

\- The condition is RL = Rth.
\- The source network is first represented by its Thevenin equivalent.
\- Maximum load Power is Pmax = Vth²/(4Rth).

\*\*Remember\*\*

Maximum DC Load Power → RL = Rth

\*\*Follow-up Questions\*\*

1\. What is the maximum Power formula?
2\. What is the load Voltage at maximum Power?
3\. What is the load Current at maximum Power?
4\. Is maximum Power the same as maximum efficiency?

\*\*Reference\*\*

Chapter-07 → Topic-05

\---

\### Viva-012

\*\*Question\*\*

What is the efficiency at the maximum Power transfer condition?

\*\*Answer\*\*

For a simple resistive Thevenin source, the efficiency is 50% when RL = Rth. The load and the Thevenin Resistance dissipate equal Power, so half of the supplied Power reaches the load and half is lost inside the source equivalent.

\*\*Key Points\*\*

\- RL and Rth carry the same Current.
\- Equal Resistances dissipate equal Power.
\- Maximum Power transfer does not give maximum efficiency.

\*\*Remember\*\*

Maximum Power Condition → 50% Efficiency

\*\*Follow-up Questions\*\*

1\. Why is this condition unsuitable for Power transmission?
2\. Where is impedance matching useful?
3\. How can efficiency exceed 50%?
4\. What trade-off exists between load Power and efficiency?

\*\*Reference\*\*

Chapter-07 → Topic-05

\---

\### Viva-013

\*\*Question\*\*

What is Source Transformation?

\*\*Answer\*\*

Source Transformation is the conversion of a practical Voltage source Vs in Series with Resistance R into an equivalent practical Current source Is = Vs/R in Parallel with the same Resistance R, or the reverse conversion.

\*\*Key Points\*\*

\- Voltage-source form: Vs in Series with R.
\- Current-source form: Is in Parallel with R.
\- Both forms have identical terminal behavior.

\*\*Remember\*\*

Vs = IsR and Is = Vs/R

\*\*Follow-up Questions\*\*

1\. Does the Resistance value change?
2\. Where is the Resistance placed in each form?
3\. How is source polarity related to Current direction?
4\. Can an ideal source without associated Resistance be transformed directly?

\*\*Reference\*\*

Chapter-07 → Topic-06

\---

\### Viva-014

\*\*Question\*\*

What conditions must be satisfied for a valid Source Transformation?

\*\*Answer\*\*

The source and Resistance must form the required pair: a Voltage source must be in Series with its Resistance, while a Current source must be in Parallel with its Resistance. The transformed source must also preserve the original terminal polarity and Current direction.

\*\*Key Points\*\*

\- Check the circuit connection before transforming.
\- Preserve the same terminal Voltage–Current relation.
\- Do not move an unrelated Resistance during transformation.

\*\*Remember\*\*

Transform the Source–Resistance Pair, Not an Unrelated Element

\*\*Follow-up Questions\*\*

1\. Why must the Series or Parallel condition be exact?
2\. How is equivalent behavior verified?
3\. Can dependent sources be transformed?
4\. How can Source Transformation simplify a circuit?

\*\*Reference\*\*

Chapter-07 → Topic-06

\---

\### Viva-015

\*\*Question\*\*

Why are Delta–Star Transformations used?

\*\*Answer\*\*

Delta–Star Transformations are used when three resistors form a Δ or Y network that cannot be simplified by ordinary Series or Parallel combinations. Converting the network to the other form often creates reducible Series or Parallel paths.

\*\*Key Points\*\*

\- The transformation preserves behavior at three external terminals.
\- It is useful in bridge and three-terminal resistor networks.
\- Correct terminal correspondence is essential.

\*\*Remember\*\*

No Direct Series–Parallel Reduction → Consider Δ–Y Transformation

\*\*Follow-up Questions\*\*

1\. How many external terminals are preserved?
2\. What is a Delta network?
3\. What is a Star network?
4\. Where are these transformations applied?

\*\*Reference\*\*

Chapter-07 → Topics-07 and 08

\---

\### Viva-016

\*\*Question\*\*

State the general Delta-to-Star Resistance formula.

\*\*Answer\*\*

Each Star Resistance equals the product of the two adjacent Delta Resistances connected to the same terminal, divided by the sum of all three Delta Resistances. For Delta Resistances Rab, Rbc and Rca: Ra = RabRca/(Rab + Rbc + Rca), Rb = RabRbc/(Rab + Rbc + Rca), and Rc = RbcRca/(Rab + Rbc + Rca).

\*\*Key Points\*\*

\- The denominator is the sum of all Delta Resistances.
\- The numerator contains the two Delta Resistances touching the terminal.
\- Label terminals before applying the formulas.

\*\*Remember\*\*

Δ to Y → Adjacent Product ÷ Sum of All Δ Resistances

\*\*Follow-up Questions\*\*

1\. What happens for three equal Delta Resistances?
2\. Why is terminal labeling important?
3\. Does the transformation preserve individual branch Current?
4\. What behavior does it preserve?

\*\*Reference\*\*

Chapter-07 → Topic-07

\---

\### Viva-017

\*\*Question\*\*

State the general Star-to-Delta Resistance formula.

\*\*Answer\*\*

First form S = RaRb + RbRc + RcRa. Each Delta Resistance equals S divided by the opposite Star Resistance. Therefore, Rab = S/Rc, Rbc = S/Ra and Rca = S/Rb.

\*\*Key Points\*\*

\- The numerator is the sum of all pairwise Star products.
\- Divide by the Star arm opposite the required Delta side.
\- Accurate labels prevent formula errors.

\*\*Remember\*\*

Y to Δ → Sum of Pairwise Products ÷ Opposite Y Resistance

\*\*Follow-up Questions\*\*

1\. What happens for three equal Star Resistances?
2\. Which Star arm is opposite Rab?
3\. Can the result be checked by converting back?
4\. Are the formulas valid for positive resistor values?

\*\*Reference\*\*

Chapter-07 → Topic-08

\---

\### Viva-018

\*\*Question\*\*

If each resistor of a balanced Delta is 9 Ω, what is each equivalent Star Resistance?

\*\*Answer\*\*

For a balanced Delta, each Star Resistance equals RΔ/3. Therefore, each equivalent Star Resistance is 9/3 = 3 Ω.

\*\*Key Points\*\*

\- Balanced Delta means all three Delta Resistances are equal.
\- Each Star arm is one-third of a balanced Delta side.
\- The three-terminal behavior remains unchanged.

\*\*Remember\*\*

Balanced Δ to Y → RY = RΔ/3

\*\*Follow-up Questions\*\*

1\. What Delta value corresponds to a balanced 3 Ω Star?
2\. Is the relation valid for an unbalanced network?
3\. How can the result be verified?
4\. Why are the three Star Resistances equal here?

\*\*Reference\*\*

Chapter-07 → Topic-07

\---

\### Viva-019

\*\*Question\*\*

How do you select a suitable Network Theorem for practical DC Circuit Simplification?

\*\*Answer\*\*

Select the method according to the objective and circuit structure. Use Superposition to identify the effect of individual sources, Thevenin or Norton for repeated analysis at one load port, Maximum Power Transfer for load matching, Source Transformation for convenient source conversion, and Δ–Y transformation when no direct Series–Parallel reduction is possible.

\*\*Key Points\*\*

\- Define the required Voltage, Current or Power first.
\- Inspect the number and type of sources.
\- Choose the method that produces fewer, simpler equations.

\*\*Remember\*\*

Analysis Objective + Circuit Topology → Best Method

\*\*Follow-up Questions\*\*

1\. Which theorem is best for a changing load?
2\. Which theorem separates source effects?
3\. When is Δ–Y conversion useful?
4\. Can two or more methods be combined?

\*\*Reference\*\*

Chapter-07 → Topic-09

\---

\### Viva-020

\*\*Question\*\*

How are Network Theorems used in real electrical and electronic systems?

\*\*Answer\*\*

Network Theorems are used to model batteries and power supplies, predict sensor loading, match communication and audio circuits, troubleshoot complex networks, simplify bridge circuits and evaluate how a changing load affects terminal Voltage, Current and Power.

\*\*Key Points\*\*

\- Equivalent circuits reduce repeated calculation.
\- Theorems support design, testing and troubleshooting.
\- Model assumptions and component ratings must still be checked.

\*\*Remember\*\*

Simplified Model + Correct Assumptions → Reliable Practical Decision

\*\*Follow-up Questions\*\*

1\. How does Thevenin's Theorem help battery modeling?
2\. Why is Maximum Power Transfer important in communication systems?
3\. How does Superposition support troubleshooting?
4\. Why must component ratings be checked separately?

\*\*Reference\*\*

Chapter-07 → Topic-10

\---

\# End of Chapter 07 Viva
