\# Chapter 22

\# Transmission and Distribution

\---

\## Introduction

Electrical Power is usually generated far from many consumers. A Power System must therefore transfer bulk Energy from generating stations to major load centers and then distribute it safely to industries, commercial buildings and homes. Transmission operates mainly at High Voltage over substantial distances, while Distribution delivers Power through progressively lower Voltage levels close to consumers.

The network includes Overhead Lines, Underground Cables, Towers, Insulators, Conductors, Transformers, Substations, Switchgear, protection, control and communication. Every component has electrical parameters and operating limits. Engineers must control Voltage drop, Current, Power losses, insulation stress, fault level, reliability, safety, environment and lifecycle cost.

This chapter explains the structure of Transmission and Distribution systems, the reason for High-Voltage transfer, line components and parameters, line models, Distribution arrangements, losses, substations and practical industrial applications.

\---

\## Learning Objectives

After completing this chapter, you will be able to:

\- Explain the roles of Transmission and Distribution.
\- Prove why High Voltage reduces Current and conductor loss for a stated Power transfer.
\- Compare Overhead and Underground transmission.
\- Identify major Transmission-Line components.
\- Explain line Resistance, Inductance and Capacitance.
\- Distinguish Short, Medium and Long Transmission-Line models.
\- Describe the structure of a Power Distribution System.
\- Differentiate Primary and Secondary Distribution.
\- Explain the purpose and operation of Distribution Transformers.
\- Distinguish Feeders, Distributors and Service Mains.
\- Identify technical and non-technical losses.
\- Recommend practical methods for reducing losses.
\- Explain the basic functions of a Grid and Substation.
\- Compare radial, ring and interconnected Distribution systems.
\- Apply Transmission and Distribution concepts to industrial supply.

\---

\## Chapter Contents

This chapter covers the following topics:

1\. Introduction to Power Transmission and Distribution
2\. Need for High Voltage Transmission
3\. Types of Transmission Systems
4\. Transmission Line Components
5\. Transmission Line Parameters
6\. Classification of Transmission Lines
7\. Power Distribution System
8\. Primary Distribution
9\. Secondary Distribution
10\. Distribution Transformers
11\. Feeders, Distributors and Service Mains
12\. Transmission and Distribution Losses
13\. Methods of Reducing Power Losses
14\. Grid and Substation — Basic Introduction
15\. Advantages and Disadvantages of Different Distribution Systems
16\. Practical Applications and Industrial Importance

\---

\## Topic 01: Introduction to Power Transmission and Distribution

\### Definition

Power Transmission is the bulk transfer of electrical Power at High Voltage from generating stations or Grid interconnections to major Substations. Power Distribution is the delivery of electrical Power from those Substations to individual consumer connections.

\---

\### Importance

Generation has value only when electricity reaches loads with acceptable Voltage, frequency, reliability, safety and cost. Transmission connects regions and resources; Distribution provides the final electrical path to consumers.

\---

\### Main Concepts

\#### 1. Basic Power-System Path

\[ \text{Generation}\rightarrow\text{Step-Up Transformer}\rightarrow\text{Transmission}\rightarrow\text{Grid Substation}\rightarrow\text{Distribution}\rightarrow\text{Consumer} \]

The exact number of Voltage levels depends on the country, network and load density.

\#### 2. Transmission Function

Transmission carries large Power over relatively long distances, interconnects generating stations and regions, and allows economic sharing of generation and reserve.

\#### 3. Distribution Function

Distribution supplies many geographically separated consumers. It includes Primary Distribution, Distribution Transformers, Secondary Distribution and Service Mains.

\#### 4. Active and Reactive Power

Lines must carry both active Power and, in AC systems, Reactive Power. Reactive flow affects Current, Voltage drop, loss and equipment capacity.

\#### 5. Power Quality and Reliability

A practical network must maintain:

\- Voltage within permitted limits
\- System frequency
\- Acceptable waveform quality
\- Fault clearing and protection selectivity
\- Supply continuity and restoration capability

\#### 6. Transmission vs Distribution

| Feature | Transmission | Distribution |
|---|---|---|
| Main purpose | Bulk Power transfer | Delivery to consumers |
| Typical Voltage | High or Extra-High Voltage | Medium and Low Voltage |
| Network reach | Between plants and major Substations | From Substations to loads |
| Power quantity | Large blocks | Divided among many consumers |
| Main design emphasis | Stability, transfer and insulation | Voltage regulation, reliability and service quality |

\---

\### Real-Life Applications

Electricity from a distant Power Plant may be stepped up for Grid transmission, stepped down at a regional Substation, distributed at Medium Voltage and finally transformed to utilization Voltage near homes or factories.

\---

\### Key Takeaways

\- Transmission transfers bulk Power; Distribution serves consumers.
\- Transformers connect appropriate AC Voltage levels.
\- A network carries active and Reactive Power.
\- Protection, control and communication are essential network functions.
\- Voltage and frequency quality must be maintained from source to load.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Power Systems
\- \*\*Author\*\*: C. L. Wadhwa
\- \*\*Relevant Chapter\*\*: Structure of Power Systems, Transmission and Distribution
\- \*\*Supporting Text\*\*: Power System Engineering — D. P. Kothari and I. J. Nagrath — Power-System components and network organization

\---

\## Topic 02: Need for High Voltage Transmission

\### Definition

High-Voltage Transmission raises Voltage so that a specified Power can be transferred with lower Current, lower conductor loss and acceptable Voltage drop.

\---

\### Importance

Without High Voltage, bulk Power transfer would require very large Current and conductor area, producing excessive I²R loss, Voltage drop, heating and cost.

\---

\### Main Concepts

\#### 1. Three-Phase Power Relation

For a balanced Three-Phase system:

\[ P=\sqrt{3}V_LI_L\cos\phi \]

Therefore:

\[ I_L=\frac{P}{\sqrt{3}V_L\cos\phi} \]

For fixed Power and Power Factor, Current is inversely proportional to line Voltage.

\#### 2. Copper Loss

For a balanced Three-Phase line with phase Resistance R:

\[ P_{loss}=3I_L^2R \]

If Voltage is multiplied by k for the same Power and Power Factor, Current becomes I/k and I²R loss becomes approximately 1/k², assuming the same Resistance.

\#### 3. Voltage Drop

Lower Current reduces the Resistive and Reactive Voltage drop of a line. The exact AC drop depends on R, X, Current and Power Factor.

\#### 4. Conductor Economy

Lower Current permits a smaller conductor cross-section for the same permitted heating, although mechanical strength, Corona, short-circuit rating and Voltage drop still set minimum requirements.

\#### 5. Worked Example

Transmit 10 MW at unity Power Factor using 11 kV and 132 kV Three-Phase systems.

At 11 kV:

\[ I=\frac{10\times10^6}{\sqrt3\times11\times10^3}=524.9\text{ A} \]

At 132 kV:

\[ I=\frac{10\times10^6}{\sqrt3\times132\times10^3}=43.7\text{ A} \]

The Current becomes one-twelfth. For the same R, loss becomes approximately 1/144.

\#### 6. Why Voltage Cannot Rise Without Limit

Higher Voltage requires more insulation clearance, larger Towers, longer Insulator Strings, more expensive Transformers and Switchgear, and greater control of Corona, switching surge and electric-field effects. The selected Voltage is an economic and technical optimum.

\---

\### Real-Life Applications

A Step-Up Transformer at a Power Plant raises Generator Voltage before long-distance transfer. Near the load center, Substation Transformers reduce it to Distribution levels.

\---

\### Key Takeaways

\- For fixed Three-Phase Power, Current decreases as Voltage increases.
\- Line loss is proportional to I²R.
\- Lower Current reduces heating and Voltage drop.
\- High Voltage improves conductor economy.
\- Insulation, Corona, equipment cost and safety limit the economical Voltage.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Principles of Power System
\- \*\*Authors\*\*: V. K. Mehta and Rohit Mehta
\- \*\*Relevant Chapter\*\*: Economics of Power Transmission and choice of Transmission Voltage
\- \*\*Supporting Text\*\*: Electrical Power Systems — C. L. Wadhwa — High-Voltage transmission fundamentals and line loss

\---

\## Topic 03: Types of Transmission Systems

\### Definition

Transmission systems are classified by Current type, circuit arrangement and physical installation. The two principal physical forms are Overhead Lines and Underground Cables.

\---

\### Importance

The installation method affects cost, reliability, maintenance, public safety, right-of-way, environmental exposure, capacitance, Heat dissipation and repair time.

\---

\### Main Concepts

\#### 1. AC Transmission

Most networks use Three-Phase AC because Transformers change Voltage efficiently and AC Switchgear and interconnected operation are well established.

\#### 2. HVDC Transmission

High-Voltage Direct Current uses converter stations at both ends. It can be advantageous for very long bulk transfer, submarine or long Underground Cables, asynchronous Grid interconnection and controllable Power flow. Converter cost and complexity are significant.

\#### 3. Overhead Transmission

Bare Conductors are supported above ground by Towers or Poles and Insulators.

Advantages:

\- Lower initial cost for long routes
\- Easier inspection, fault location and repair
\- Good air cooling
\- Easier uprating or circuit addition in some corridors

Limitations:

\- Exposed to lightning, wind, storms, pollution and vegetation
\- Requires visible right-of-way and electrical clearances
\- Can create Corona, audible noise and visual impact at high Voltage
\- Greater public and environmental exposure

\#### 4. Underground Cable Transmission

Insulated Cables are installed in ducts, tunnels, trenches or directly buried arrangements with joints and terminations.

Advantages:

\- Less visual impact
\- Lower exposure to wind, trees and lightning
\- Useful in dense urban or restricted corridors
\- Smaller external clearance corridor

Limitations:

\- High initial and repair cost
\- Fault location and joint repair can take longer
\- Heat dissipation limits ampacity
\- High Capacitance produces charging Current in AC service
\- Cable joints and terminations require skilled installation

\#### 5. Overhead vs Underground

| Feature | Overhead Line | Underground Cable |
|---|---|---|
| Initial cost | Lower | Higher |
| Fault exposure | Greater weather exposure | Lower weather exposure |
| Fault repair | Usually easier and faster | More difficult and slower |
| Cooling | Natural air cooling | Limited by soil/duct thermal conditions |
| Capacitance | Lower | Higher |
| Visual impact | Higher | Lower |
| Urban suitability | Corridor may be difficult | Often preferred where justified |

\#### 6. Selection Principle

No method is universally superior. Route, Voltage, Power, environment, reliability, repair access, lifecycle cost and planning constraints must be evaluated.

\---

\### Real-Life Applications

An Overhead Line may be economical across open land, while an Underground Cable may be selected through a dense city center or for a submarine crossing.

\---

\### Key Takeaways

\- AC dominates general interconnected transmission.
\- HVDC is useful for specific long-distance, cable and Grid-interconnection duties.
\- Overhead Lines are economical and repairable but exposed.
\- Underground Cables are protected and unobtrusive but costly and highly capacitive.
\- Lifecycle and route conditions determine the best choice.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Power Transmission and Distribution
\- \*\*Authors\*\*: S. Sivanagaraju and S. Satyanarayana
\- \*\*Relevant Chapter\*\*: AC, DC, Overhead and Underground Transmission systems
\- \*\*Supporting Text\*\*: Electrical Power Systems — C. L. Wadhwa — Transmission-system comparison and cable applications

\---

\## Topic 04: Transmission Line Components

\### Definition

Transmission-Line components are the electrical, mechanical, structural, protective and communication elements that carry Conductors safely between terminals.

\---

\### Importance

Reliable transfer depends on every component maintaining electrical clearance, mechanical strength, insulation integrity and protection under normal, fault and environmental conditions.

\---

\### Main Concepts

\#### 1. Phase Conductors

Conductors carry line Current. Aluminum-based stranded Conductors are common because they provide useful conductivity with low weight. Selection considers ampacity, Resistance, sag, strength, Corona, vibration and short-circuit duty.

\#### 2. Towers and Poles

Structures support Conductors and maintain phase-to-phase and phase-to-ground clearances. Suspension, tension, angle, terminal and special-crossing structures serve different mechanical duties.

\#### 3. Insulators

Insulators electrically separate energized Conductors from grounded structures and withstand mechanical load. Common forms include pin, suspension, strain, post and long-rod Insulators.

\#### 4. Earth Wire and Shield Wire

An overhead earth wire intercepts lightning and connects Towers to Earth. Optical Ground Wire may combine lightning shielding with fiber-optic communication.

\#### 5. Hardware and Fittings

Clamps, connectors, spacers, vibration dampers, arcing horns, grading rings and joints support mechanical and electrical performance.

\#### 6. Right-of-Way and Clearance

The corridor must maintain safe clearance from ground, buildings, roads, vegetation and other lines under maximum sag and applicable conditions.

\#### 7. Cable-System Components

An Underground Cable system includes conductor, insulation, metallic screen or sheath, armor where used, outer sheath, joints, terminations, bonding, earthing and route markers.

\#### 8. Protection and Communication

Current and Voltage Transformers, Circuit Breakers, relays, communication channels and fault locators help detect and isolate faults rapidly.

\#### 9. Component Summary

| Component | Main Function |
|---|---|
| Conductor | Carry Current |
| Insulator | Provide insulation and mechanical support |
| Tower/Pole | Maintain geometry and clearance |
| Earth Wire | Lightning shielding and grounding path |
| Spacer/Damper | Control bundle spacing and vibration |
| Cable Joint | Continue conductor and insulation system |
| Relay/Breaker | Detect and interrupt faults |

\---

\### Real-Life Applications

At a river crossing, Taller Towers and higher-strength conductors may be needed to maintain safe clearance over a long span under wind, temperature and sag conditions.

\---

\### Key Takeaways

\- Conductors must satisfy electrical and mechanical requirements.
\- Insulators support Conductors while blocking leakage to ground.
\- Towers maintain line geometry and statutory clearance.
\- Earth Wires reduce lightning exposure.
\- Cable joints and terminations are critical insulation interfaces.

\---

\### Reference

\- \*\*Primary Textbook\*\*: A Course in Electrical Power
\- \*\*Author\*\*: J. B. Gupta
\- \*\*Relevant Chapter\*\*: Overhead-Line Conductors, Supports, Insulators and line construction
\- \*\*Supporting Text\*\*: Power System Engineering — D. P. Kothari and I. J. Nagrath — Transmission-Line mechanical and electrical design

\---

\## Topic 05: Transmission Line Parameters

\### Definition

Transmission-Line parameters are distributed electrical properties that determine Voltage drop, loss, Energy storage and wave behavior. The principal parameters are Resistance R, Inductance L, Capacitance C and leakage Conductance G.

\---

\### Importance

Line parameters are required to calculate sending-end and receiving-end quantities, Voltage Regulation, losses, Reactive Power, stability and insulation performance.

\---

\### Main Concepts

\#### 1. Resistance

For a uniform DC conductor:

\[ R=\rho\frac{l}{A} \]

where ρ is Resistivity, l is length and A is cross-sectional area.

AC Resistance is normally higher because of Skin Effect, Proximity Effect and conductor construction. Resistance increases with temperature approximately as specified by the material relation.

Power loss per phase is I²R.

\#### 2. Inductance

Current creates magnetic Flux around a conductor. Flux linkage produces Inductance and Inductive Reactance:

\[ X_L=2\pi fL \]

Inductance depends on conductor spacing, conductor size, arrangement, bundling and transposition.

\#### 3. Capacitance

Conductors separated by insulation or air form Capacitance between phases and from phase to Earth. Capacitive charging Current is:

\[ I_C=\omega CV=2\pi fCV \]

Underground Cables have much higher Capacitance than Overhead Lines because conductors and metallic screens are close and separated by solid insulation.

\#### 4. Leakage Conductance

G represents leakage through insulation and across contaminated surfaces. It is often small in basic Overhead-Line models but matters in insulation and cable studies.

\#### 5. Series and Shunt Parameters

R and L form Series Impedance:

\[ Z=R+j\omega L \]

G and C form Shunt Admittance:

\[ Y=G+j\omega C \]

Values may be specified per unit length and multiplied or distributed according to the line model.

\#### 6. Practical Effects

| Parameter | Main Physical Effect |
|---|---|
| R | Real-Power loss and Resistive Voltage drop |
| L | Reactive drop and magnetic Energy storage |
| C | Charging Current and electric-field Energy storage |
| G | Insulation leakage and dielectric loss |

\#### 7. Examination Note

Resistance consumes active Power; ideal Inductance and Capacitance exchange Reactive Energy. Capacitance cannot always be ignored, especially for long lines and Underground Cables.

\---

\### Real-Life Applications

A lightly loaded long AC line may experience receiving-end Voltage rise because of line charging. Operators use Reactive-Power control and switching strategies to maintain Voltage.

\---

\### Key Takeaways

\- R causes I²R loss.
\- L produces Inductive Reactance and Reactive Voltage drop.
\- C draws charging Current even with little load.
\- Underground Cables have high Capacitance.
\- R, L, C and G are physically distributed along the line.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Power System Analysis
\- \*\*Author\*\*: John J. Grainger and William D. Stevenson Jr.
\- \*\*Relevant Chapter\*\*: Transmission-Line Resistance, Inductance and Capacitance
\- \*\*Supporting Text\*\*: Elements of Power System Analysis — William D. Stevenson Jr. — Line constants and equivalent circuits

\---

\## Topic 06: Classification of Transmission Lines

\### Definition

Transmission Lines are modeled as Short, Medium or Long according to length, Voltage and the significance of distributed Capacitance.

\---

\### Importance

The correct model provides adequate accuracy without unnecessary complexity. Using a Short-Line approximation for a long or highly capacitive circuit can produce serious Voltage and Current errors.

\---

\### Main Concepts

\#### 1. Classification Is Approximate

Traditional textbook boundaries are guides, not universal standards. A common convention is:

| Class | Approximate Length | Common Basic Model |
|---|---:|---|
| Short Line | Below about 80 km | Series Impedance; Shunt Capacitance neglected |
| Medium Line | About 80–250 km | Lumped Nominal-π or Nominal-T model |
| Long Line | Above about 250 km | Distributed-parameter model |

Voltage ranges often accompany these values in textbooks, but modern systems and Cables require model selection from actual parameter significance.

\#### 2. Short Transmission Line

Shunt Capacitance is neglected. Per phase:

\[ V_S=V_R+I_RZ \]

\[ I_S=I_R \]

The ABCD constants are approximately A = D = 1, B = Z and C = 0.

\#### 3. Medium Transmission Line

Capacitance is represented as a lumped Shunt Admittance. Common models:

\- Nominal-π: half Y at each end and Z in the middle
\- Nominal-T: half Z on each side and Y in the middle

Nominal-π is widely used for general analysis.

\#### 4. Long Transmission Line

Parameters are treated as continuously distributed. For length l:

\[ A=D=\cosh(\gamma l) \]

\[ B=Z_c\sinh(\gamma l) \]

\[ C=\frac{1}{Z_c}\sinh(\gamma l) \]

where γ is the Propagation Constant and Zc is the Characteristic Impedance.

\#### 5. ABCD Relation

For any balanced line represented by a two-port network:

\[ V_S=AV_R+BI_R \]

\[ I_S=CV_R+DI_R \]

\#### 6. Cable Exception

Because Cable Capacitance is high, even a comparatively short Cable may require a model that includes Shunt Capacitance. Length alone must not be used blindly.

\---

\### Real-Life Applications

An engineer may use a simple Series-Impedance model for a short Overhead feeder but a π-equivalent or distributed model for a long transmission corridor or capacitive cable circuit.

\---

\### Key Takeaways

\- Short-Line models neglect Capacitance.
\- Medium Lines use lumped Capacitance.
\- Long Lines use distributed parameters.
\- ABCD constants link sending and receiving quantities.
\- Textbook length boundaries are approximate, not universal limits.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Power System Analysis
\- \*\*Authors\*\*: John J. Grainger and William D. Stevenson Jr.
\- \*\*Relevant Chapter\*\*: Short, Medium and Long Transmission-Line models and ABCD constants
\- \*\*Supporting Text\*\*: Modern Power System Analysis — D. P. Kothari and I. J. Nagrath — Performance of Transmission Lines

\---

\## Topic 07: Power Distribution System

\### Definition

A Power Distribution System receives electricity from Grid or Bulk-Supply Substations, transforms it to appropriate levels and delivers it through Feeders, Distributors and Service Mains to consumers.

\---

\### Importance

Distribution is the part of the utility network closest to consumers and contributes strongly to service reliability, Voltage quality, technical loss, safety and customer experience.

\---

\### Main Concepts

\#### 1. Distribution Structure

\[ \text{Grid Substation}\rightarrow\text{Primary Feeder}\rightarrow\text{Distribution Transformer}\rightarrow\text{LV Distributor}\rightarrow\text{Service Main}\rightarrow\text{Consumer} \]

\#### 2. AC Distribution

Modern public Distribution is mainly AC. Three-Phase circuits supply larger loads, while Single-Phase service may be taken between phase and Neutral where the system permits.

\#### 3. Network Configurations

Common arrangements include radial, ring-main and interconnected networks.

\#### 4. Balanced Loading

Single-Phase consumers should be distributed across phases to reduce unbalance, Neutral Current, Voltage deviation and Transformer heating.

\#### 5. Voltage Regulation

Conductor Impedance and load Current cause Voltage drop. Tap changers, Voltage Regulators, Capacitor Banks, network reinforcement and load balancing help maintain consumer Voltage.

\#### 6. Protection Coordination

Substation Breakers, Reclosers, Sectionalizers, Fuses and relays should isolate the smallest practical faulty section while keeping healthy sections energized.

\#### 7. Reliability Measures

Alternative supply paths, automation, fault indicators, vegetation control, planned maintenance and spare equipment improve continuity.

\---

\### Real-Life Applications

A city Distribution network may use ring operation and automated Switchgear so a faulted cable section can be isolated and consumers restored from another direction.

\---

\### Key Takeaways

\- Distribution connects Bulk Supply to individual consumers.
\- It includes MV Feeders, Transformers, LV Distributors and Service Mains.
\- Phase balance affects loss and Voltage quality.
\- Protection should be selective.
\- Network configuration controls reliability and cost.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Power Distribution Engineering
\- \*\*Author\*\*: Turan Gönen
\- \*\*Relevant Chapter\*\*: Distribution-system fundamentals, configurations and planning
\- \*\*Supporting Text\*\*: Distribution System Modeling and Analysis — William H. Kersting — Distribution circuits and load representation

\---

\## Topic 08: Primary Distribution

\### Definition

Primary Distribution is the Medium-Voltage part of a Distribution System that transfers Power from a Distribution or Grid Substation to Distribution Transformers and larger direct MV consumers.

\---

\### Importance

Primary Distribution covers significant area and load. Its Voltage level, conductor size, route, protection and switching arrangement strongly affect losses, reliability and future capacity.

\---

\### Main Concepts

\#### 1. Primary Feeder

A Primary Feeder usually carries Three-Phase MV Power away from the Substation. Loads may be connected through laterals and Distribution Transformers.

\#### 2. Typical Voltage

The exact value is utility-specific. Common systems use Medium-Voltage levels such as 11 kV or 33 kV, but engineers must follow the actual network standard.

\#### 3. Feeder Arrangement

\- Radial feeder: supplied from one direction
\- Ring feeder: arranged as a loop with sectionalizing points
\- Interconnected feeder: connected to more than one source or Substation

\#### 4. Protection

Feeder protection may include overcurrent, Earth-Fault, directional, distance or differential functions depending on Voltage, arrangement and importance. Reclosing is common on suitable Overhead Feeders but requires careful application.

\#### 5. Voltage Control

Substation Transformer taps, feeder Regulators and Capacitor Banks may control Voltage and Reactive flow. Distributed Generation can create bidirectional Power flow and new protection requirements.

\#### 6. Design Checks

\- Peak and forecast load
\- Voltage drop and regulation
\- Ampacity and thermal limits
\- Short-circuit level
\- Protection coordination
\- Reliability and switching
\- Earthing and public safety

\---

\### Real-Life Applications

An industrial estate may receive several 11 kV or 33 kV Primary Feeders, with each factory using its own Substation and Transformers according to load and reliability requirements.

\---

\### Key Takeaways

\- Primary Distribution operates at Medium Voltage.
\- It supplies Distribution Transformers and major MV consumers.
\- Feeder arrangement affects restoration capability.
\- Voltage, thermal and fault studies guide design.
\- Distributed Generation can reverse traditional Power flow.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Power Distribution Engineering
\- \*\*Author\*\*: Turan Gönen
\- \*\*Relevant Chapter\*\*: Primary Distribution feeders, planning and Voltage regulation
\- \*\*Supporting Text\*\*: Electric Power Distribution Handbook — Thomas Allen Short — Feeder design, protection and operation

\---

\## Topic 09: Secondary Distribution

\### Definition

Secondary Distribution is the Low-Voltage network from a Distribution Transformer to consumer Service Mains and utilization points.

\---

\### Importance

Secondary circuits directly determine consumer Voltage, public safety, phase balance, service capacity and local technical loss.

\---

\### Main Concepts

\#### 1. Secondary Network

The Distribution Transformer's LV terminals feed Three-Phase four-wire or other utility-approved arrangements. Main Distributors branch toward consumer service points.

\#### 2. Single-Phase and Three-Phase Service

Small consumers may receive Single-Phase supply. Larger commercial and industrial consumers may receive Three-Phase LV or direct MV supply.

\#### 3. Neutral Conductor

The Neutral carries unbalanced and harmonic Current. It must not be assumed Current-free. Correct sizing, bonding and Earthing follow the system arrangement and applicable rules.

\#### 4. Voltage Drop

Long, undersized or overloaded LV circuits cause noticeable Voltage drop because Current is relatively high. Consumer-end Voltage must remain within permitted limits.

\#### 5. Phase Balancing

Distributing Single-Phase loads evenly among phases reduces Voltage unbalance, Neutral Current and losses.

\#### 6. Protection and Metering

LV networks use service protection, metering, isolation, overcurrent and residual-current protection according to utility and installation requirements.

\#### 7. Primary vs Secondary Distribution

| Feature | Primary Distribution | Secondary Distribution |
|---|---|---|
| Voltage | Medium Voltage | Low Voltage |
| Main endpoint | Distribution Transformer or MV consumer | Individual consumer |
| Typical circuit | Three-Phase feeder | Three-Phase/Single-Phase distributor and service |
| Main concern | Area capacity and feeder reliability | Consumer Voltage and service safety |

\---

\### Real-Life Applications

A pole-mounted Transformer may supply a local LV Distributor from which separate Service Mains connect homes, shops and small workshops.

\---

\### Key Takeaways

\- Secondary Distribution begins at the Transformer LV side.
\- LV Current is comparatively high for the same Power.
\- Phase balance reduces Voltage unbalance and loss.
\- Neutral Current may be significant.
\- Service protection and metering complete the consumer connection.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Power Distribution Handbook
\- \*\*Author\*\*: Thomas Allen Short
\- \*\*Relevant Chapter\*\*: Secondary Distribution systems, services and Voltage drop
\- \*\*Supporting Text\*\*: Electric Power Distribution Engineering — Turan Gönen — Secondary networks and consumer supply

\---

\## Topic 10: Distribution Transformers

\### Definition

A Distribution Transformer is a Transformer installed near load centers to reduce Primary Distribution Voltage to the Secondary Distribution or utilization level.

\---

\### Importance

Distribution Transformers operate continuously and exist in large numbers. Their Efficiency, loading, location, Voltage regulation, protection and maintenance strongly affect network performance and lifecycle cost.

\---

\### Main Concepts

\#### 1. Operating Principle

An AC magnetic Flux in the Core links Primary and Secondary windings. The ideal Voltage ratio is:

\[ \frac{V_1}{V_2}=\frac{N_1}{N_2} \]

Frequency remains the same.

\#### 2. Construction

Units may be liquid-immersed or dry-type and pole-mounted, pad-mounted or installed in a Substation. Major parts can include Core, windings, tank/enclosure, insulation, bushings, cooling, tap links or Tap Changer and protective devices.

\#### 3. Rating

Transformers are rated mainly in kVA because Copper loss depends on Current and Core loss mainly on Voltage and frequency, regardless of load Power Factor.

\#### 4. Losses

\- No-Load or Core loss occurs whenever energized.
\- Load or Copper loss varies approximately with Current squared.
\- Additional stray and dielectric losses may occur.

\#### 5. Loading

Overload accelerates insulation aging through Heat. Severe underloading may produce poor asset utilization, although no-load loss remains.

\#### 6. Voltage Adjustment

Off-circuit tap links or an approved Tap Changer adjust the ratio. Tap operation must follow equipment design and safe procedures.

\#### 7. Protection

Protection may include Primary Fuses or Breakers, Surge Arresters, temperature or pressure devices, LV protection and Earthing according to size and installation.

\#### 8. Siting

Locating the Transformer near the load center reduces LV conductor length, Voltage drop and loss, but access, fire safety, environment, noise and future growth must be considered.

\---

\### Real-Life Applications

Placing a Distribution Transformer near a cluster of high-current LV loads can reduce long LV runs and improve end-user Voltage compared with supplying the same loads from a distant Transformer.

\---

\### Key Takeaways

\- Distribution Transformers step MV down to LV or utilization Voltage.
\- They are rated in kVA.
\- Core loss is present whenever energized.
\- Copper loss rises approximately with I².
\- Correct location reduces LV loss and Voltage drop.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Power Distribution Handbook
\- \*\*Author\*\*: Thomas Allen Short
\- \*\*Relevant Chapter\*\*: Distribution Transformers, loading, losses and applications
\- \*\*Supporting Text\*\*: Transformer Engineering: Design, Technology, and Diagnostics — S. V. Kulkarni and S. A. Khaparde — Transformer performance and insulation

\---

\## Topic 11: Feeders, Distributors and Service Mains

\### Definition

A Feeder carries Power from a Substation to a Distribution area; a Distributor has consumer or Transformer tappings along its length; a Service Main connects the Distributor to an individual consumer's supply point.

\---

\### Importance

These terms describe different functions and therefore different design priorities. They are frequently tested in Diploma, BSc, Viva and technical recruitment examinations.

\---

\### Main Concepts

\#### 1. Feeder

A Feeder normally carries Power toward a distribution point with few or no consumer tappings along the principal section. Its Current may be relatively similar along that section. Ampacity and fault duty are major selection criteria.

\#### 2. Distributor

A Distributor has many load tappings, so Current decreases as Power is delivered along the route. Voltage drop at consumer points is a primary design concern.

\#### 3. Service Main

A Service Main is the final connection between the Distributor and consumer premises or metering/supply point. It is selected for consumer load, Voltage drop, protection, environment and utility rules.

\#### 4. Functional Diagram

\[ \boxed{\text{Substation}}\rightarrow\boxed{\text{Feeder}}\rightarrow\boxed{\text{Distributor}}\rightarrow\boxed{\text{Service Main}}\rightarrow\boxed{\text{Consumer}} \]

\#### 5. Comparison

| Feature | Feeder | Distributor | Service Main |
|---|---|---|---|
| Connects | Substation to distribution area | Distribution points to multiple loads | Distributor to one consumer |
| Tappings | Usually limited on main section | Many | Final single service |
| Current along length | Often treated as similar for basic design | Changes with each tapping | Based on consumer demand |
| Main design focus | Current capacity and fault rating | Voltage drop and regulation | Service capacity, safety and Voltage drop |

\#### 6. Terminology Note

Utility terminology can vary. Engineers should follow the network owner's definitions while understanding the standard functional distinction.

\---

\### Real-Life Applications

An 11 kV Feeder may supply several Distribution Transformers. Each Transformer supplies LV Distributors, and individual Service Mains connect nearby consumers.

\---

\### Key Takeaways

\- A Feeder carries bulk Distribution Power from a Substation.
\- A Distributor has many tappings.
\- A Service Main supplies one consumer connection.
\- Feeder design emphasizes ampacity; Distributor design emphasizes Voltage drop.
\- Actual utility terminology must be confirmed.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Principles of Power System
\- \*\*Authors\*\*: V. K. Mehta and Rohit Mehta
\- \*\*Relevant Chapter\*\*: Distribution feeders, Distributors and Service Mains
\- \*\*Supporting Text\*\*: Electric Power Distribution Engineering — Turan Gönen — Distribution feeder and service design

\---

\## Topic 12: Transmission and Distribution Losses

\### Definition

Transmission and Distribution losses are the difference between electrical Energy entering a defined network and the Energy delivered or properly recorded at its output points during the same period.

\---

\### Importance

Losses require additional generation, consume network capacity, increase cost, produce Heat and Voltage drop, and may indicate technical weakness or commercial-control failure.

\---

\### Main Concepts

\#### 1. Technical Losses

Technical losses result from physical network behavior:

\- Conductor I²R loss
\- Transformer Core and Copper loss
\- Cable dielectric loss
\- Corona loss at High Voltage
\- Insulator leakage
\- Harmonic and unbalance-related additional loss
\- Meter and auxiliary consumption where included in the boundary

\#### 2. Non-Technical Losses

Non-technical losses can result from unauthorized connections, meter tampering, unmetered use, defective metering, data error or billing/process failure.

\#### 3. Energy-Loss Percentage

For a clearly defined boundary:

\[ \%\text{Loss}=\frac{E_{in}-E_{out}}{E_{in}}\times100 \]

Input and output Energy must cover the same period, boundary and meter-quality basis.

\#### 4. Load Loss

\[ P_{line}=3I^2R \]

Because this varies with I², a heavily loaded circuit can produce disproportionately high loss.

\#### 5. Fixed and Variable Loss

Transformer Core loss is approximately fixed while energized. Conductor and Transformer Copper losses vary strongly with load Current.

\#### 6. Power Factor Effect

For the same active Power and Voltage, lower Power Factor requires higher Current and therefore higher I²R loss.

\#### 7. Loss Allocation

Total system loss should be separated by Voltage level, feeder, Transformer, time and cause. A single percentage cannot locate the problem.

\---

\### Real-Life Applications

If a factory draws the same kW at a lower Power Factor, line Current rises. The utility feeder, Transformer and factory cables then experience higher Copper loss and reduced spare capacity.

\---

\### Key Takeaways

\- Technical loss follows electrical and material behavior.
\- Non-technical loss relates to metering, data and unauthorized use.
\- I²R loss rises with Current squared.
\- Low Power Factor and unbalance increase Current-related losses.
\- Loss calculation needs a clear boundary and common time period.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Power Distribution Handbook
\- \*\*Author\*\*: Thomas Allen Short
\- \*\*Relevant Chapter\*\*: Distribution losses, Transformer losses and system efficiency
\- \*\*Supporting Text\*\*: Electric Power Distribution Engineering — Turan Gönen — Technical and economic loss evaluation

\---

\## Topic 13: Methods of Reducing Power Losses

\### Definition

Loss reduction is the engineering and operational process of lowering avoidable technical and non-technical Energy loss while maintaining safety, reliability, Voltage quality and economic justification.

\---

\### Importance

Reducing loss saves fuel and operating cost, releases network capacity, improves Voltage and decreases heating and emissions associated with extra generation.

\---

\### Main Concepts

\#### 1. Increase Transmission Voltage

For a stated Power and Power Factor, higher Voltage lowers Current and I²R loss. Voltage conversion requires properly rated Transformers, insulation and Switchgear.

\#### 2. Improve Power Factor

Capacitor Banks, Synchronous compensation or Power-Electronic compensation can reduce source Current when correctly located and controlled. Overcompensation and resonance must be avoided.

\#### 3. Use Adequate Conductors

Larger cross-section lowers Resistance but increases capital cost. Economic conductor sizing considers Energy loss, load growth, ampacity, Voltage drop and lifecycle.

\#### 4. Balance Three-Phase Loads

Phase balance reduces Current unbalance, Neutral Current, Voltage unbalance and additional Transformer or Motor heating.

\#### 5. Optimize Transformer Capacity and Location

Place Transformers near load centers where practical, avoid persistent overload and choose efficient units with losses suited to the expected load profile.

\#### 6. Reconfigure and Reinforce Feeders

Shorter routes, additional Feeders, higher Distribution Voltage, reconductoring and optimized switching can reduce high-current path length.

\#### 7. Control Harmonics

Nonlinear loads increase RMS Current and can cause Neutral and Transformer losses. Use appropriate equipment, filtering, phase arrangement and harmonic studies.

\#### 8. Maintain Connections and Equipment

Loose or corroded joints create high contact Resistance and Heat. Thermography, inspection, torque control and condition-based maintenance prevent localized losses.

\#### 9. Improve Metering and Energy Accounting

Accurate boundary meters, feeder meters, meter testing, data validation and anti-tamper measures help identify and reduce non-technical loss.

\#### 10. Loss-Reduction Priority

| Method | Main Effect | Important Check |
|---|---|---|
| Raise Voltage | Lower Current | Insulation and equipment cost |
| Power-Factor correction | Lower Reactive Current | Harmonics and overcompensation |
| Larger conductor | Lower R | Lifecycle economics |
| Phase balancing | Lower unbalance loss | Actual phase measurements |
| Transformer relocation | Shorter LV path | Access and safety |
| Metering improvement | Lower non-technical loss | Data integrity and governance |

\---

\### Real-Life Applications

Moving a Transformer closer to an industrial load, correcting Power Factor and replacing an overloaded LV cable can reduce loss and improve Voltage more effectively than changing only one component.

\---

\### Key Takeaways

\- Reduce Current, Resistance or unnecessary path length to reduce technical loss.
\- Power-Factor correction must be properly engineered.
\- Phase balance and harmonic control matter.
\- Efficient Transformer sizing and location reduce lifecycle loss.
\- Good metering is essential for non-technical-loss control.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Power Distribution Engineering
\- \*\*Author\*\*: Turan Gönen
\- \*\*Relevant Chapter\*\*: Distribution planning, loss reduction and Power-Factor improvement
\- \*\*Supporting Text\*\*: Electric Power Distribution Handbook — Thomas Allen Short — Voltage optimization, Capacitors and loss management

\---

\## Topic 14: Grid and Substation — Basic Introduction

\### Definition

An Electrical Grid is an interconnected network of Generators, Transmission Lines, Substations, Distribution systems and loads. A Substation is a controlled node where Voltage is transformed and circuits are switched, protected, measured and interconnected.

\---

\### Importance

Grid interconnection enables shared generation and reserve, while Substations control the safe transfer and transformation of Power between network sections.

\---

\### Main Concepts

\#### 1. Grid Functions

\- Balance generation and demand
\- Transfer Power between regions
\- Share reserve and improve reliability
\- Maintain frequency and Voltage
\- Restore supply after disturbances

\#### 2. Substation Types

Substations may be generating, transmission, switching, distribution, converter or industrial substations according to function.

\#### 3. Major Substation Equipment

| Equipment | Function |
|---|---|
| Power Transformer | Change Voltage level |
| Busbar | Common electrical connection point |
| Circuit Breaker | Make, carry and interrupt Current within rating |
| Isolator/Disconnector | Provide visible or defined isolation when not interrupting load Current |
| Current Transformer | Scale Current for metering and protection |
| Voltage Transformer | Scale Voltage for metering and protection |
| Surge Arrester | Limit transient overvoltage |
| Protection Relay | Detect abnormal condition and command isolation |
| Earthing System | Control touch/step Voltage and fault-current path |
| Battery/DC System | Supply protection and control during AC loss |

\#### 4. Busbar Arrangements

Single Bus, Sectionalized Bus, Double Bus, Ring Bus and Breaker-and-a-Half arrangements provide different cost, flexibility and reliability.

\#### 5. Control and Automation

SCADA, communication, event records, synchronized measurements and remote controls help operators monitor and control the network.

\#### 6. Frequency and Power Balance

In an AC Grid, sustained generation-demand imbalance changes frequency. Governors, Automatic Generation Control, reserves, storage and demand response help restore balance.

\#### 7. Substation Safety

Access control, interlocking, equipment identification, approved switching, Earthing, clearances, Arc-Flash control and Permit-to-Work procedures are essential.

\---

\### Real-Life Applications

A 132/33 kV Substation may receive transmission supply, step it down, divide it among several 33 kV Feeders and use relays and Breakers to isolate a faulty feeder without disconnecting the entire station.

\---

\### Key Takeaways

\- A Grid interconnects generation, networks and loads.
\- A Substation transforms, switches, protects and measures Power.
\- Circuit Breakers interrupt Current; Disconnectors provide isolation according to rating and procedure.
\- Protection and DC control supply are critical.
\- Grid frequency reflects active-Power balance.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Substation Design and Equipment
\- \*\*Author\*\*: P. S. Satnam and P. V. Gupta
\- \*\*Relevant Chapter\*\*: Substation layout, bus schemes, Switchgear and protection equipment
\- \*\*Supporting Text\*\*: Electric Power Substations Engineering — John D. McDonald, editor — Substation equipment, design and automation

\---

\## Topic 15: Advantages and Disadvantages of Different Distribution Systems

\### Definition

Distribution-system configuration is the electrical arrangement of Feeders and sources used to supply loads. Common configurations are radial, ring-main and interconnected systems.

\---

\### Importance

Configuration determines capital cost, fault isolation, restoration, Voltage profile, protection complexity, operational flexibility and service continuity.

\---

\### Main Concepts

\#### 1. Radial Distribution

Each load is normally supplied from one direction.

Advantages:

\- Simple design and operation
\- Lower initial cost
\- Straightforward protection coordination

Disadvantages:

\- A fault can interrupt all downstream consumers
\- Greater Voltage drop toward the end
\- Limited alternative restoration path

\#### 2. Ring-Main Distribution

The Distributor forms a loop. It may operate closed or with a Normally Open Point according to protection and utility practice.

Advantages:

\- Alternative supply direction
\- Improved Voltage profile and continuity
\- Faulted section can be isolated

Disadvantages:

\- Higher cost
\- More switching and protection complexity
\- Fault Current may come from more than one direction

\#### 3. Interconnected Distribution

Multiple Feeders or Substations are interconnected.

Advantages:

\- High reliability and operational flexibility
\- Load transfer between sources
\- Better support during outages or maintenance

Disadvantages:

\- Highest capital and control complexity
\- Higher and variable fault levels
\- Requires advanced protection and coordinated operation

\#### 4. System Comparison

| Feature | Radial | Ring Main | Interconnected |
|---|---|---|---|
| Initial cost | Low | Medium | High |
| Reliability | Lowest | Higher | Highest when well designed |
| Protection | Simple | Moderate | Complex |
| Alternative supply | Limited | Available after switching | Multiple paths |
| Fault level | Generally lower | May increase | Often highest |
| Best use | Rural/simple loads | Urban/important loads | Dense and critical networks |

\#### 5. AC vs DC Distribution Note

AC is dominant for public networks because of established transformation and protection. DC Distribution is increasingly used inside data centers, telecom systems, transport, PV/Battery systems and specialized Microgrids, but requires application-specific protection and conversion.

\---

\### Real-Life Applications

A rural feeder may be radial for economy, while a hospital district may use a ring or interconnected arrangement to allow rapid restoration after a cable fault.

\---

\### Key Takeaways

\- Radial systems are simple and economical.
\- Ring systems provide an alternative path.
\- Interconnected systems provide high flexibility and reliability.
\- Reliability improvement increases cost and protection complexity.
\- Configuration must match load criticality and fault level.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Power Distribution Engineering
\- \*\*Author\*\*: Turan Gönen
\- \*\*Relevant Chapter\*\*: Radial, loop and network Distribution systems
\- \*\*Supporting Text\*\*: Distribution System Modeling and Analysis — William H. Kersting — Distribution configurations and network analysis

\---

\## Topic 16: Practical Applications and Industrial Importance

\### Definition

Practical Transmission and Distribution engineering applies network, equipment, protection, safety and economic principles to deliver Power reliably to public and industrial loads.

\---

\### Importance

Industrial productivity depends on adequate capacity, stable Voltage, fault discrimination, supply continuity, safe Substations and planned expansion.

\---

\### Main Concepts

\#### 1. Industrial Incoming Supply

Large facilities may receive MV or HV supply through an Industrial Substation. Supply Voltage, number of Feeders and Transformer arrangement depend on demand, process criticality and utility connection rules.

\#### 2. Load-Center Distribution

Locating Transformers and Switchboards near load centers reduces long high-current LV runs, loss and Voltage drop.

\#### 3. Reliability Planning

Critical industries may use dual Feeders, sectionalized Busbars, standby Generation, UPS, Battery systems and automatic transfer. Redundancy must avoid common-mode failure.

\#### 4. Power Quality

Large Motors, Arc Furnaces, Welders, VFDs and nonlinear loads can cause Voltage dip, flicker, harmonics and unbalance. Studies and mitigation are required.

\#### 5. Protection Coordination

Utility protection, incoming Breakers, Transformers, Feeders and final circuits must be coordinated so a downstream fault does not unnecessarily trip the entire plant.

\#### 6. Energy and Loss Management

Metering by feeder and process, Power-Factor correction, phase balancing, efficient Transformers, adequate conductors and demand management improve performance.

\#### 7. Maintenance

Thermography, insulation assessment, oil testing where applicable, Breaker timing, relay testing, battery inspection, Earthing checks and cable diagnostics support reliability.

\#### 8. Industrial Application Table

| Application | Distribution Need | Main Engineering Check |
|---|---|---|
| Data center | High continuity and UPS | Redundancy and selectivity |
| Textile factory | Motor and VFD loads | Voltage dip, harmonics and PF |
| Steel plant | Large fluctuating load | Flicker, fault level and Reactive support |
| Hospital | Critical essential circuits | Dual source, Generator and transfer |
| Solar factory Microgrid | Bidirectional flow | Anti-islanding and protection coordination |
| Rural irrigation | Long feeders and seasonal load | Voltage drop and phase balance |

\#### 9. Career Relevance

EEE roles include Transmission planning, Substation design, Distribution operation, protection, SCADA, cable engineering, maintenance, loss analysis, Energy management and safety.

\---

\### Real-Life Applications

A factory expansion may require a larger incoming Transformer, reinforced Feeder, revised fault study, new protection settings and harmonic assessment—not only an additional machine connection.

\---

\### Key Takeaways

\- Industrial supply begins with load, reliability and Power-quality requirements.
\- Transformer location affects LV loss and Voltage drop.
\- Redundancy must be coordinated and independently reliable.
\- Protection selectivity limits production interruption.
\- Metering and condition monitoring support efficient operation.

\---

\### Reference

\- \*\*Primary Textbook\*\*: IEEE Recommended Practice for Electric Power Distribution for Industrial Plants
\- \*\*Author\*\*: Institute of Electrical and Electronics Engineers
\- \*\*Relevant Chapter\*\*: Industrial Distribution-system planning, equipment, protection and operation
\- \*\*Supporting Text\*\*: Industrial Power Systems Handbook — Donald Beeman, editor — Industrial Substations, Distribution and protection

\---

\# Chapter Summary

\- Transmission transfers bulk Power; Distribution delivers it to consumers.
\- The typical path is Generation → Step-Up Transformer → Transmission → Substation → Distribution → Consumer.
\- High Voltage reduces Current for a stated Power transfer.
\- Three-Phase active Power is P = √3VLILcosφ.
\- Line Copper loss is proportional to I²R.
\- Overhead Lines are economical and repairable but exposed to weather and right-of-way constraints.
\- Underground Cables have lower visual impact but higher cost, difficult repair and high Capacitance.
\- Transmission-Line components include Conductors, Towers, Insulators, Earth Wires, hardware and protection.
\- R causes active loss, L produces Inductive Reactance and C produces charging Current.
\- Short-Line models neglect Capacitance; Medium-Line models lump it; Long-Line models distribute all parameters.
\- Classification distances are approximate and Cable Capacitance may require a more detailed model.
\- Primary Distribution operates at MV; Secondary Distribution supplies consumers at LV.
\- Distribution Transformers step Voltage down near load centers and are rated in kVA.
\- A Feeder carries Power to an area, a Distributor has many tappings and a Service Main supplies one consumer.
\- Technical losses include line and Transformer losses; non-technical losses include metering and unauthorized-use problems.
\- Higher Voltage, adequate conductors, Power-Factor correction, phase balance, efficient Transformers and good metering reduce losses.
\- A Grid interconnects sources, networks and loads; a Substation transforms, switches, protects and measures Power.
\- Radial systems are simple, ring systems provide alternative paths and interconnected systems provide the greatest flexibility with higher complexity.
\- Industrial Distribution requires capacity, Power quality, selectivity, redundancy, maintenance and safe operation.

\---

\# What's Next?

In the next chapter, you will study Electrical Wiring, Cables and Installation, including conductor and Cable selection, wiring systems, installation methods, Voltage drop, current-carrying capacity, inspection and safe practical workmanship.

These concepts will build on your understanding of Distribution Transformers, Feeders, Distributors, Service Mains, losses, protection boundaries and consumer supply.

\---
