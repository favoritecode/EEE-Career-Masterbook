\# Chapter 19

\# Synchronous Generators and Motors

\---

\## Introduction

Synchronous Machines are AC rotating machines whose Rotor operates in step with the rotating Magnetic Field. They can operate as Synchronous Generators, commonly called Alternators, or as Synchronous Motors. Alternators produce most of the electrical energy used in power systems, while Synchronous Motors drive selected industrial loads and can improve Power Factor.

In a Synchronous Generator, a prime mover rotates an excited Rotor and Three-Phase EMF is induced in the Stator winding. In a Synchronous Motor, a Three-Phase Stator supply creates a Rotating Magnetic Field that locks with the Rotor field and produces mechanical torque at Synchronous Speed.

This chapter explains operating principles, construction, Rotor types, Synchronous Speed, generator and Motor operation, excitation, synchronization, hunting, damper windings, performance comparison, faults, maintenance, safety and practical applications.

\---

\## Learning Objectives

After completing this chapter, you will be able to:

\- Define a Synchronous Machine.
\- Explain its Generator and Motor operating principles.
\- Identify the main constructional parts.
\- Explain the functions of the Stator and Rotor.
\- Compare Salient-Pole and Cylindrical Rotors.
\- Calculate Synchronous Speed, frequency and pole number.
\- Explain Synchronous Generator operation and generated EMF.
\- Explain Synchronous Motor operation and starting requirements.
\- Describe common excitation systems.
\- State and apply the conditions for synchronization.
\- Explain hunting and the purpose of Damper Windings.
\- Compare the advantages and limitations of Synchronous Machines.
\- Compare Synchronous and Induction Machines.
\- Identify common faults and apply safe maintenance practices.
\- Match Synchronous Machines with practical power-system and industrial applications.

\---

\## Chapter Contents

This chapter covers the following topics:

1\. Introduction to Synchronous Machines
2\. Principle of Operation
3\. Construction of Synchronous Machines
4\. Stator and Rotor
5\. Types of Rotors
6\. Synchronous Speed
7\. Synchronous Generator (Alternator)
8\. Synchronous Motor
9\. Excitation System
10\. Synchronization Process
11\. Hunting and Damper Windings
12\. Advantages and Limitations
13\. Comparison Between Synchronous and Induction Machines
14\. Common Faults, Maintenance and Safety Precautions
15\. Practical Applications of Synchronous Generators and Motors

\---

\## Topic 01: Introduction to Synchronous Machines

\### Definition

A Synchronous Machine is an AC rotating machine whose Rotor magnetic field maintains a fixed average angular relationship with the Stator Rotating Magnetic Field during steady operation.

\---

\### Importance

Large Synchronous Generators supply most grid electricity. Synchronous Motors serve constant-speed industrial drives, and overexcited Motors can supply reactive Power to improve system Power Factor and Voltage support.

\---

\### Main Concepts

\#### 1. Two Operating Modes

\- Generator mode converts mechanical input into AC electrical output.
\- Motor mode converts AC electrical input into mechanical output.

\#### 2. Synchronous Operation

The Rotor runs at the same mechanical speed as the fundamental Stator Rotating Magnetic Field. Normal steady-state slip is therefore zero.

\#### 3. Magnetic Fields

The Stator carries a distributed AC Armature winding. The Rotor normally carries a DC-excited field winding or uses Permanent Magnets.

\#### 4. Energy Direction

| Mode | Input | Output | Common Name |
|---|---|---|---|
| Generator | Mechanical | AC electrical | Alternator |
| Motor | AC electrical | Mechanical | Synchronous Motor |

\#### 5. Main Ratings

Important nameplate data include apparent Power or output Power, Voltage, Current, frequency, speed, Power Factor, excitation Voltage/Current, duty, insulation class and cooling method.

\---

\### Real-Life Applications

\- Utility power-station Alternators
\- Diesel Generator sets
\- Hydroelectric Generators
\- Large compressors and pumps
\- Synchronous condensers for reactive-Power support

\---

\### Key Takeaways

\- A Synchronous Machine can generate or consume AC Power.
\- Its Rotor remains locked to the rotating field in steady operation.
\- Alternators dominate large-scale generation.
\- Synchronous Motors offer constant speed and excitation-based Power-Factor control.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Machinery Fundamentals
\- \*\*Author\*\*: Stephen J. Chapman
\- \*\*Relevant Chapter\*\*: Synchronous Generators and Synchronous Motors — introductory principles
\- \*\*Supporting Text\*\*: Electrical Machines — D. P. Kothari and I. J. Nagrath — Synchronous Machines chapters

\---

\## Topic 02: Principle of Operation

\### Definition

Synchronous-Machine operation is based on electromagnetic induction in Generator mode and interaction between the Stator and Rotor Magnetic Fields in Motor mode.

\---

\### Importance

The common electromagnetic structure explains how the same machine can operate either as a Generator or as a Motor depending on the direction of energy flow and torque.

\---

\### Main Concepts

\#### 1. Rotor Field Production

DC excitation or Permanent Magnets establish north and south magnetic poles on the Rotor.

\#### 2. Generator Operation

A prime mover rotates the Rotor field. Its changing Flux linkage with the stationary Three-Phase Stator windings induces alternating EMFs displaced by 120 electrical degrees.

\#### 3. Motor Operation

Balanced Three-Phase Stator Currents create a Rotating Magnetic Field. The excited Rotor field experiences electromagnetic torque and, after reaching a suitable speed, locks with the Stator field.

\#### 4. Magnetic Locking

During steady operation, the Rotor and Stator fields rotate together at Synchronous Speed. Their relative angular displacement, called the torque or Power angle, permits energy conversion.

\#### 5. Power Angle

For a simplified cylindrical machine with neglected Resistance, transferred Power is approximately:

\[ P=\frac{3VE}{X_s}\sin\delta \]

where:

\- V = terminal phase Voltage
\- E = internal generated EMF per phase
\- Xs = Synchronous Reactance per phase
\- δ = Power angle

This simplified relation shows that stable Power transfer depends on field strength, Voltage, Reactance and angle.

\#### 6. Reversible Energy Conversion

Increasing mechanical input to a synchronized machine makes it deliver more real Power as a Generator. Increasing mechanical load on a Motor increases the angle required to develop torque.

\---

\### Real-Life Applications

A grid-connected Alternator remains at grid frequency while its turbine governor changes real-Power output and its excitation system controls reactive Power and terminal Voltage.

\---

\### Key Takeaways

\- Generator action uses electromagnetic induction.
\- Motor action uses field interaction and magnetic locking.
\- Rotor and Stator fields rotate together in steady operation.
\- The Power angle changes with transferred load.
\- Excessive angle can cause loss of synchronism.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Machinery Fundamentals
\- \*\*Author\*\*: Stephen J. Chapman
\- \*\*Relevant Chapter\*\*: Synchronous-Machine operating principles and Power-angle characteristics
\- \*\*Supporting Text\*\*: Electric Machinery and Transformers — Bhag S. Guru and Hüseyin R. Hiziroğlu — Synchronous Machines section

\---

\## Topic 03: Construction of Synchronous Machines

\### Definition

Construction refers to the electrical, magnetic, mechanical, insulation and cooling parts that form a Synchronous Machine.

\---

\### Importance

Construction determines Voltage rating, speed, cooling, mechanical strength, excitation method, maintenance requirements and suitability for a prime mover or load.

\---

\### Main Concepts

\#### 1. Stator Assembly

The Stator contains a frame, laminated core and distributed Three-Phase Armature winding. The winding connects to the external AC system.

\#### 2. Rotor Assembly

The Rotor carries the main field system. It may be Salient-Pole or Cylindrical and includes a shaft and mechanical retaining structure.

\#### 3. Air Gap

The Air Gap separates Stator and Rotor magnetic surfaces. Salient-Pole machines have a non-uniform effective Air Gap, while cylindrical machines have a nearly uniform Air Gap.

\#### 4. Excitation Hardware

Field Current may reach the Rotor through Slip Rings and Brushes or through a brushless exciter and rotating rectifier assembly.

\#### 5. Mechanical Parts

Bearings, end shields, couplings, foundation, balancing weights and guards support safe rotation and transmit torque.

\#### 6. Cooling and Insulation

Machine rating depends strongly on insulation class, temperature rise, ventilation and cooling medium. Large units use carefully monitored cooling systems.

\#### 7. Construction Table

| Part | Main Function | Typical Concern |
|---|---|---|
| Stator Core | Magnetic path | Core heating |
| Armature Winding | AC input/output | Insulation and winding temperature |
| Rotor Field | Main magnetic poles | Field Current and Rotor heating |
| Air Gap | Magnetic coupling | Alignment and eccentricity |
| Exciter | Supplies Rotor field | Diode, brush or regulator fault |
| Bearings | Supports Rotor | Lubrication and vibration |
| Cooling System | Removes losses as heat | Blockage or coolant failure |

\---

\### Real-Life Applications

High-speed turbo-Alternators use mechanically strong cylindrical Rotors, while low-speed hydroelectric units use large-diameter Salient-Pole Rotors.

\---

\### Key Takeaways

\- The Stator normally carries the Three-Phase Armature winding.
\- The Rotor carries the main field system.
\- Rotor construction depends strongly on speed.
\- Excitation, cooling, insulation and bearings determine reliability.
\- Accurate alignment and a healthy Air Gap are essential.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Machinery
\- \*\*Author\*\*: P. S. Bimbhra
\- \*\*Relevant Chapter\*\*: Synchronous Machines — construction and excitation arrangements
\- \*\*Supporting Text\*\*: Electric Machinery Fundamentals — Stephen J. Chapman — Synchronous-Machine construction

\---

\## Topic 04: Stator and Rotor

\### Definition

The Stator is the stationary AC Armature assembly, while the Rotor is the rotating field assembly of a conventional Synchronous Machine.

\---

\### Importance

Understanding their separate roles is essential for winding identification, excitation, testing, cooling, insulation coordination and fault diagnosis.

\---

\### Main Concepts

\#### 1. Stator Function

In a Generator, the Stator delivers generated Three-Phase Power. In a Motor, it receives Three-Phase input and creates the Rotating Magnetic Field.

\#### 2. Rotor Function

The Rotor provides the main magnetic field. In Generator operation, the prime mover rotates it; in Motor operation, it locks to the Stator field and drives the shaft.

\#### 3. Why the Armature Is Usually on the Stator

High-Voltage insulation, output terminals and cooling are easier on a stationary winding. Only lower field Power must be transferred to the Rotor.

\#### 4. Rotor Excitation

DC field Current produces controlled Rotor Flux. Permanent-Magnet Synchronous Machines use magnets instead of a wound Rotor field.

\#### 5. Stator–Rotor Comparison

| Feature | Stator | Rotor |
|---|---|---|
| Mechanical condition | Stationary | Rotating |
| Main winding | Three-Phase Armature | DC field or Permanent Magnet |
| External connection | AC system | Excitation system |
| Main frequency | System frequency | DC field in Rotor reference frame |
| Main maintenance concern | Insulation and core | Field circuit, balance and mechanical stress |

\---

\### Real-Life Applications

Large Alternators place high-Voltage output windings on the Stator so heavy load Current does not need to pass through large Slip Rings.

\---

\### Key Takeaways

\- The Stator normally carries the AC Armature winding.
\- The Rotor carries the main field.
\- Stationary Armature construction simplifies high-Voltage insulation.
\- Rotor balance and field integrity are critical at operating speed.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Machines
\- \*\*Author\*\*: D. P. Kothari and I. J. Nagrath
\- \*\*Relevant Chapter\*\*: Synchronous Machines — Armature and field structures
\- \*\*Supporting Text\*\*: Electrical Machinery — P. S. Bimbhra — Stator and Rotor construction

\---

\## Topic 05: Types of Rotors

\### Definition

Synchronous-Machine Rotors are mainly classified as Salient-Pole Rotors or Cylindrical, also called Non-Salient, Rotors.

\---

\### Importance

Rotor type determines suitable speed, pole count, dimensions, Air-Gap profile, mechanical strength and common prime-mover application.

\---

\### Main Concepts

\#### 1. Salient-Pole Rotor

It has physically projecting poles mounted on a Rotor rim or spider. It normally has many poles, a large diameter and short axial length.

\#### 2. Salient-Pole Applications

It suits low- and medium-speed prime movers such as water turbines and diesel engines. Damper bars can be embedded in pole faces.

\#### 3. Cylindrical Rotor

It is a smooth forged steel Rotor with field windings placed in slots. It normally has two or four poles, small diameter and long axial length.

\#### 4. Cylindrical-Rotor Applications

It suits high-speed steam- and gas-turbine Alternators because its smooth structure withstands high centrifugal stress.

\#### 5. Rotor Comparison

| Feature | Salient-Pole Rotor | Cylindrical Rotor |
|---|---|---|
| Surface | Projecting poles | Smooth cylindrical surface |
| Air Gap | Non-uniform | Nearly uniform |
| Pole number | Usually many | Usually two or four |
| Speed | Low or medium | High |
| Dimensions | Large diameter, short length | Small diameter, long length |
| Mechanical strength | Suitable for lower speed | High centrifugal strength |
| Common prime mover | Hydro turbine/diesel engine | Steam or gas turbine |
| Typical machine | Hydro-Alternator | Turbo-Alternator |

\#### 6. Selection Principle

Rotor selection begins with required frequency, prime-mover speed and pole count, followed by mechanical stress, cooling and system requirements.

\---

\### Real-Life Applications

A 100 rpm hydro turbine requires many poles to produce 50 or 60 Hz, whereas a high-speed steam turbine commonly drives a two- or four-pole cylindrical Rotor.

\---

\### Key Takeaways

\- Salient Rotors have projecting poles and suit lower speed.
\- Cylindrical Rotors are smooth and suit high speed.
\- Pole number links prime-mover speed with electrical frequency.
\- Mechanical stress is a major Rotor-selection factor.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Machinery Fundamentals
\- \*\*Author\*\*: Stephen J. Chapman
\- \*\*Relevant Chapter\*\*: Synchronous Generators — Salient-Pole and Cylindrical Rotors
\- \*\*Supporting Text\*\*: Electrical Machines — D. P. Kothari and I. J. Nagrath — Synchronous-Machine Rotor types

\---

\## Topic 06: Synchronous Speed

\### Definition

Synchronous Speed is the mechanical rotational speed corresponding to the frequency and number of magnetic poles of a Synchronous Machine.

\---

\### Importance

It connects electrical frequency with Rotor speed and pole number. Generator frequency control and Motor speed selection depend directly on this relationship.

\---

\### Main Concepts

\#### 1. Speed Formula

\[ N_s=\frac{120f}{P} \]

where:

\- Ns = Synchronous Speed in revolutions per minute
\- f = electrical frequency in hertz
\- P = total number of poles

\#### 2. Frequency Formula

\[ f=\frac{PN}{120} \]

For a Synchronous Generator, N is Rotor speed in rpm.

\#### 3. Worked Example: Motor Speed

A 6-pole Synchronous Motor connected to 50 Hz has:

\[ N_s=\frac{120\times50}{6}=1000\text{ rpm} \]

It runs at 1000 rpm in steady synchronism, not slightly below it.

\#### 4. Worked Example: Generator Frequency

A 12-pole Alternator rotates at 500 rpm:

\[ f=\frac{12\times500}{120}=50\text{ Hz} \]

\#### 5. Speed Table at 50 Hz

| Poles | Synchronous Speed |
|---:|---:|
| 2 | 3000 rpm |
| 4 | 1500 rpm |
| 6 | 1000 rpm |
| 8 | 750 rpm |
| 12 | 500 rpm |

\#### 6. Zero Steady-State Slip

Unlike an Induction Motor, a Synchronous Motor has zero steady-state slip while synchronized. If it loses synchronism, it cannot continue normal synchronous operation.

\---

\### Real-Life Applications

Power-station speed governors regulate prime-mover speed so generator frequency remains matched with the electrical system.

\---

\### Key Takeaways

\- Ns = 120f/P.
\- Frequency depends on speed and pole number.
\- More poles give lower Synchronous Speed.
\- A synchronized Motor runs exactly at Ns in steady operation.
\- Grid frequency tightly constrains Generator speed.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Machines
\- \*\*Author\*\*: D. P. Kothari and I. J. Nagrath
\- \*\*Relevant Chapter\*\*: Synchronous Machines — speed, frequency and pole relationships
\- \*\*Supporting Text\*\*: Electric Machinery Fundamentals — Stephen J. Chapman — Synchronous Speed and frequency

\---

\## Topic 07: Synchronous Generator (Alternator)

\### Definition

A Synchronous Generator or Alternator converts mechanical Power into AC electrical Power at a frequency determined by Rotor speed and pole number.

\---

\### Importance

Alternators are the primary source of electrical energy in thermal, hydroelectric, nuclear, gas-turbine, diesel and many renewable generating plants.

\---

\### Main Concepts

\#### 1. Energy Conversion Sequence

Prime mover → Rotor rotation → changing Stator Flux linkage → induced Three-Phase EMF → electrical load or grid.

\#### 2. Generated EMF

For a sinusoidally distributed winding, generated RMS EMF per phase is:

\[ E_{ph}=4.44k_w f\Phi T \]

where:

\- kw = winding factor
\- f = frequency in hertz
\- Φ = Flux per pole in weber
\- T = series turns per phase

\#### 3. Voltage Control

At a given speed and load, increasing excitation generally increases internal generated EMF. The Automatic Voltage Regulator adjusts field excitation to support terminal Voltage and reactive-Power requirements.

\#### 4. Real and Reactive Power

For a grid-connected Generator:

\- Prime-mover torque mainly controls real-Power output.
\- Excitation mainly influences reactive Power and terminal Voltage.

These controls interact, so actual plant control uses coordinated governors and excitation systems.

\#### 5. Stand-Alone Operation

In an isolated Generator set, governor action controls frequency and excitation controls terminal Voltage, subject to machine and load limits.

\#### 6. Generator–Motor Difference

| Feature | Synchronous Generator | Synchronous Motor |
|---|---|---|
| Main input | Mechanical Power | AC electrical Power |
| Main output | AC electrical Power | Mechanical Power |
| Shaft role | Driven by prime mover | Drives mechanical load |
| Real-Power direction | Machine to system | System to machine |
| Excitation role | Voltage/reactive-Power control | Power-Factor/reactive-Power control |

\---

\### Real-Life Applications

In a diesel Generator, the engine governor maintains speed and frequency while the AVR adjusts field Current to maintain terminal Voltage as load changes.

\---

\### Key Takeaways

\- An Alternator converts mechanical Power into Three-Phase AC Power.
\- Frequency is f = PN/120.
\- Generated EMF depends on frequency, Flux, turns and winding factor.
\- Mechanical input mainly controls real Power after grid connection.
\- Excitation mainly controls Voltage and reactive Power.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Machinery Fundamentals
\- \*\*Author\*\*: Stephen J. Chapman
\- \*\*Relevant Chapter\*\*: Synchronous Generators — operation, Voltage and Power control
\- \*\*Supporting Text\*\*: Electrical Machinery — P. S. Bimbhra — Alternators and generated EMF

\---

\## Topic 08: Synchronous Motor

\### Definition

A Synchronous Motor converts AC electrical Power into mechanical Power while its Rotor runs at Synchronous Speed in steady operation.

\---

\### Importance

It provides constant speed independent of normal load variation and allows reactive-Power control through field excitation.

\---

\### Main Concepts

\#### 1. Field Interaction

The Three-Phase Stator creates an RMF. The excited Rotor poles lock with this field and rotate at the same speed.

\#### 2. Not Inherently Self-Starting

At standstill, the rotating Stator field passes the heavy Rotor too quickly for the Rotor to accelerate in one direction. Average starting torque is zero in the ideal basic machine.

\#### 3. Starting Methods

Common methods include:

\- Damper-winding induction start
\- Separate pony Motor or prime mover
\- Variable-frequency starting with a drive

Field application and control must follow the machine design and manufacturer instructions.

\#### 4. Constant Speed

When load increases within the stable limit, speed remains at Ns while the Power angle increases. If load exceeds the pull-out capability, the Motor loses synchronism.

\#### 5. Excitation and Power Factor

\- Underexcited operation generally draws lagging reactive Power.
\- Proper excitation can produce near-unity Power Factor.
\- Overexcited operation can supply leading reactive Power.

\#### 6. V-Curves

At constant mechanical load, Armature Current versus field Current forms a V-shaped curve. Minimum Armature Current occurs near unity Power Factor.

\#### 7. Synchronous Condenser

A lightly loaded overexcited Synchronous Motor used mainly for reactive-Power support is called a Synchronous Condenser.

\---

\### Real-Life Applications

Large compressors, mills and pumps may use Synchronous Motors when constant speed, high efficiency and Power-Factor correction justify the additional excitation and control system.

\---

\### Key Takeaways

\- A Synchronous Motor runs at Ns after locking.
\- The basic Motor is not inherently self-starting.
\- Load changes Power angle, not steady synchronous speed.
\- Excitation controls reactive-Power behavior.
\- Excessive load can cause pull-out or loss of synchronism.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Machinery Fundamentals
\- \*\*Author\*\*: Stephen J. Chapman
\- \*\*Relevant Chapter\*\*: Synchronous Motors — starting, Power Factor and performance
\- \*\*Supporting Text\*\*: Electrical Machines — D. P. Kothari and I. J. Nagrath — Synchronous-Motor operation

\---

\## Topic 09: Excitation System

\### Definition

An excitation system supplies and regulates the Rotor field of a Synchronous Machine.

\---

\### Importance

Excitation affects generated EMF, terminal Voltage, reactive Power, Power Factor, stability and protection response.

\---

\### Main Concepts

\#### 1. DC Field Requirement

A wound Rotor needs controlled DC Current to establish its magnetic poles.

\#### 2. Static Excitation

A controlled rectifier supplies DC through Slip Rings and Brushes. It can provide fast response but requires maintenance of rotating contacts.

\#### 3. Brushless Excitation

An AC exciter mounted on the shaft supplies a rotating rectifier, which feeds the main Rotor field without main-field Brushes.

\#### 4. Permanent-Magnet Pilot Exciter

Some brushless systems use a Permanent-Magnet Generator to provide an independent source for excitation control.

\#### 5. Automatic Voltage Regulator

The AVR compares measured Voltage with a reference and adjusts excitation. Limiters and protection prevent unsafe field or Stator conditions.

\#### 6. Excitation Comparison

| System | Main Advantage | Main Limitation |
|---|---|---|
| Slip-ring/static | Fast control and direct field access | Brush and ring maintenance |
| Brushless | Lower brush maintenance | Rotating-diode access is harder |
| Permanent-Magnet Machine | No wound-field supply needed | Fixed Magnet Flux and control differences |

\#### 7. Loss of Excitation

Loss or severe reduction of field can cause abnormal reactive-Power flow, instability, Rotor heating and protection operation. It requires prompt controlled response.

\---

\### Real-Life Applications

An Alternator AVR increases field Current when system conditions tend to reduce terminal Voltage, while coordinated limiters keep excitation within thermal and stability limits.

\---

\### Key Takeaways

\- Excitation establishes and controls Rotor Flux.
\- AVR action regulates Voltage and reactive behavior.
\- Static and brushless systems have different maintenance needs.
\- Excitation must remain within Rotor and Stator limits.
\- Loss of excitation is a serious abnormal condition.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Machinery Fundamentals
\- \*\*Author\*\*: Stephen J. Chapman
\- \*\*Relevant Chapter\*\*: Synchronous Generators — excitation and Voltage regulation
\- \*\*Supporting Text\*\*: Power System Stability and Control — Prabha Kundur — Generator excitation systems and stability controls

\---

\## Topic 10: Synchronization Process

\### Definition

Synchronization is the controlled process of matching an incoming Alternator with an energized busbar before closing its circuit breaker.

\---

\### Importance

Closing out of synchronism can produce severe Current, electromagnetic torque, shaft stress, Voltage disturbance and equipment damage.

\---

\### Main Concepts

\#### 1. Synchronizing Conditions

Before closing, the incoming Generator must have:

\- Equal or acceptably matched terminal Voltage
\- Equal frequency
\- Same Phase Sequence
\- Corresponding phase angles nearly equal at the closing instant
\- Compatible waveform and approved system conditions

\#### 2. Voltage Matching

Adjust excitation so incoming Generator Voltage matches the busbar Voltage within the permitted limit.

\#### 3. Frequency Matching

Adjust prime-mover speed so incoming frequency is very close to bus frequency. A small controlled frequency difference makes the phase angle approach slowly.

\#### 4. Phase-Sequence Check

Phase Sequence must be confirmed before the first parallel connection or after wiring changes. Incorrect Phase Sequence cannot be corrected merely by waiting.

\#### 5. Closing Angle

Close the breaker according to the synchroscope or approved automatic synchronizer, allowing for breaker closing time.

\#### 6. Synchronizing Methods

\- Three-lamp method
\- Synchroscope
\- Automatic synchronizer and synch-check relay

Actual power plants use approved protection, interlocks and procedures rather than an informal lamp-only decision.

\#### 7. Practical Example

An incoming Alternator reads 400 V at 49.8 Hz while the bus is 400 V at 50 Hz with correct Phase Sequence. The operator or governor raises speed slightly, observes slow synchroscope movement and closes only at the approved in-phase indication.

\#### 8. After Closing

\- Increase prime-mover input to raise real-Power output.
\- Adjust excitation to control reactive Power and Voltage contribution.
\- Monitor Current, Power Factor, temperature and stability.

\---

\### Real-Life Applications

Standby Generator sets in hospitals, data centers and industries use automatic synchronizers when paralleling with a bus or another Generator.

\---

\### Key Takeaways

\- Match Voltage, frequency, Phase Sequence and phase angle.
\- Speed controls incoming frequency before closing.
\- Excitation controls incoming Voltage.
\- Wrong synchronization can cause destructive stress.
\- After closing, mechanical input controls real Power and excitation controls reactive Power.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Machinery Fundamentals
\- \*\*Author\*\*: Stephen J. Chapman
\- \*\*Relevant Chapter\*\*: Synchronous Generators — paralleling and synchronization
\- \*\*Supporting Text\*\*: Power System Analysis — John J. Grainger and William D. Stevenson Jr. — Generator operation and power-system interconnection

\---

\## Topic 11: Hunting and Damper Windings

\### Definition

Hunting is oscillation of the Rotor about its steady synchronous angular position following a disturbance. Damper Windings are short-circuited conductors used to oppose these oscillations and assist Motor starting.

\---

\### Importance

Severe hunting can cause Current fluctuation, mechanical stress, vibration, loss of synchronism and protection operation.

\---

\### Main Concepts

\#### 1. Causes of Hunting

\- Sudden load change
\- System fault or switching disturbance
\- Prime-mover torque fluctuation
\- Poor control-system response
\- Cyclic mechanical load

\#### 2. Oscillation Mechanism

After a disturbance, Rotor inertia can carry the Rotor beyond its new equilibrium angle. Synchronizing torque pulls it back, causing repeated angular oscillation until damping removes the energy.

\#### 3. Damper-Winding Construction

Conducting bars are embedded in Salient-Pole faces and short-circuited by end connections, forming a cage-like circuit.

\#### 4. Damping Action

During Rotor oscillation, relative motion exists between the damper bars and rotating field. Induced Currents produce torque opposing the relative motion according to Lenz's Law.

\#### 5. Starting Assistance

In a Synchronous Motor, Damper Windings can develop induction torque during starting. Near Synchronous Speed, field excitation enables the Rotor to pull into step.

\#### 6. Limitations

Damper Windings reduce oscillation but do not replace correct protection, excitation control, governor tuning or mechanical maintenance.

\---

\### Real-Life Applications

A sudden compressor-load change may cause Motor Rotor-angle oscillation. Damper action and system controls help the Motor settle at a new stable angle.

\---

\### Key Takeaways

\- Hunting is Rotor-angle oscillation.
\- Disturbances and cyclic torque can initiate hunting.
\- Damper bars produce opposing induction torque.
\- Damper Windings assist starting and improve stability.
\- Persistent oscillation requires root-cause investigation.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Machinery
\- \*\*Author\*\*: P. S. Bimbhra
\- \*\*Relevant Chapter\*\*: Synchronous Motors — hunting and Damper Windings
\- \*\*Supporting Text\*\*: Electrical Machines — D. P. Kothari and I. J. Nagrath — Synchronous-Motor dynamics and starting

\---

\## Topic 12: Advantages and Limitations

\### Definition

Advantages are features that make Synchronous Machines valuable, while limitations are technical, economic or operational constraints affecting their use.

\---

\### Importance

Balanced evaluation helps determine when precise speed, high-Power generation or reactive-Power control justifies the excitation, synchronization and protection requirements.

\---

\### Main Concepts

\#### 1. Advantages

\- Exact Synchronous Speed in steady operation
\- High efficiency at large ratings
\- Adjustable Motor Power Factor through excitation
\- Leading reactive-Power capability when overexcited
\- Essential for large-scale AC generation
\- Suitable for low-speed, high-Power drives with many poles

\#### 2. Limitations

\- Basic Synchronous Motor is not inherently self-starting
\- Excitation system adds cost and complexity
\- Synchronization is required before Generator paralleling
\- Loss of synchronism is possible during severe disturbance or overload
\- Rotor field, excitation and protection require specialized maintenance
\- Constant-speed behavior is unsuitable where simple variable speed is required without a drive

\#### 3. Practical Evaluation

| Criterion | Advantage | Limitation |
|---|---|---|
| Speed | Exact steady Synchronous Speed | Variable speed needs electronic control |
| Reactive Power | Adjustable by excitation | Requires excitation and control system |
| Efficiency | High at suitable large rating | Higher initial complexity |
| Starting | Damper/VFD methods available | Not inherently self-starting |
| Grid use | Strong generation and Voltage support role | Synchronizing and stability controls required |

\---

\### Real-Life Applications

A continuously operated large compressor may justify a Synchronous Motor for efficiency and Power-Factor correction, while a smaller general-purpose load may be better served by an Induction Motor.

\---

\### Key Takeaways

\- Synchronous Machines offer exact speed and controllable reactive behavior.
\- They are central to bulk AC generation.
\- Starting and excitation add complexity.
\- Stability and synchronization require disciplined control.
\- Lifecycle benefit, not only purchase cost, guides selection.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Machines
\- \*\*Author\*\*: D. P. Kothari and I. J. Nagrath
\- \*\*Relevant Chapter\*\*: Synchronous Machines — characteristics and applications
\- \*\*Supporting Text\*\*: Electric Machinery Fundamentals — Stephen J. Chapman — Synchronous-Machine performance

\---

\## Topic 13: Comparison Between Synchronous and Induction Machines

\### Definition

This comparison examines differences in speed, Rotor excitation, starting, reactive Power, construction, cost and application between Synchronous and Induction Machines.

\---

\### Importance

The comparison is frequently tested in examinations and helps engineers select the correct industrial drive or generation technology.

\---

\### Main Concepts

\#### 1. Speed and Slip

A Synchronous Motor runs at Ns with zero steady-state slip. An Induction Motor normally runs below Ns with positive slip in Motoring operation.

\#### 2. Rotor Current Source

A wound Synchronous Rotor receives controlled DC excitation. An Induction-Motor Rotor Current is induced by relative motion.

\#### 3. Starting

A Three-Phase Induction Motor is inherently self-starting. A basic Synchronous Motor requires a starting method and field-control sequence.

\#### 4. Power Factor

A Synchronous Motor can operate at lagging, near-unity or leading Power Factor by changing excitation within limits. A conventional Induction Motor normally draws lagging reactive Power.

\#### 5. Machine Comparison

| Feature | Synchronous Machine | Induction Machine |
|---|---|---|
| Rotor speed | Exactly Ns in steady state | Below Ns as Motor |
| Steady Motor slip | Zero | Positive |
| Rotor field | DC excitation or magnets | Induced Rotor Current |
| Three-Phase Motor starting | Requires starting arrangement | Inherently self-starting |
| Power Factor | Adjustable through excitation | Normally lagging |
| Construction/control | More complex | Cage type is simpler |
| Maintenance | Excitation-related needs | Cage Motor is low maintenance |
| Typical use | Generators, constant-speed large drives, condensers | General industrial drives |
| Generator role | Dominant grid Generator | Used in selected induction-generation applications |

\#### 6. Selection Principle

Choose Synchronous Machines where exact speed, large generation or reactive-Power control is important. Choose Induction Motors for rugged, economical, general-purpose industrial drive service.

\---

\### Real-Life Applications

A factory may use Induction Motors for most pumps and conveyors but install a large Synchronous Motor or condenser where constant speed and reactive-Power support provide economic value.

\---

\### Key Takeaways

\- Synchronous speed remains exactly Ns; Induction-Motor speed requires slip.
\- Synchronous Rotors need excitation or magnets.
\- Induction Motors are simpler and self-starting.
\- Synchronous Motors can control reactive Power.
\- Application and lifecycle economics determine selection.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Machinery Fundamentals
\- \*\*Author\*\*: Stephen J. Chapman
\- \*\*Relevant Chapter\*\*: Synchronous and Induction Machines — comparative operating characteristics
\- \*\*Supporting Text\*\*: Electrical Machinery — P. S. Bimbhra — AC machine comparison

\---

\## Topic 14: Common Faults, Maintenance and Safety Precautions

\### Definition

This topic covers abnormal machine conditions, systematic condition assessment, preventive maintenance and controls required to protect personnel and equipment.

\---

\### Importance

Synchronous Machines can contain hazardous Stator Voltage, Rotor excitation, stored energy, high rotational energy, cooling pressure and automatic control. Poor maintenance can cause major system outages and mechanical damage.

\---

\### Main Concepts

\#### 1. Common Electrical Faults

\- Stator phase or earth fault
\- Rotor field earth fault or open circuit
\- Loss of excitation
\- Unbalanced Current or negative-sequence heating
\- Overload, over/under-Voltage and abnormal frequency
\- Rotating-diode or AVR failure

\#### 2. Common Mechanical Faults

\- Bearing wear or lubrication failure
\- Misalignment and excessive vibration
\- Rotor unbalance or looseness
\- Cooling-system blockage or failure
\- Coupling, foundation or prime-mover problem

\#### 3. Abnormal Operating Conditions

Out-of-step operation, hunting, reverse Power, overspeed, overexcitation and accidental energization require correctly coordinated protection and procedures.

\#### 4. Diagnostic Table

| Symptom | Possible Causes | Safe Checks |
|---|---|---|
| High vibration | Unbalance, bearing, alignment, hunting | Review vibration, load and mechanical condition |
| High Stator temperature | Overload, unbalance, cooling fault | Compare Current, temperature and airflow/coolant |
| Unstable Voltage | AVR, sensing or excitation fault | Check approved excitation measurements and alarms |
| Field-Current abnormality | Field circuit, diode or regulator fault | Isolate and follow excitation-system procedure |
| Loss of synchronism | Excess load, fault, weak excitation | Review protection records and system event data |
| Failure to synchronize | Wrong Phase Sequence, Voltage/frequency mismatch | Verify synchronizing measurements and wiring |

\#### 5. Preventive Maintenance

\- Trend winding and bearing temperatures.
\- Monitor vibration and shaft condition.
\- Inspect cooling, ventilation and heat exchangers.
\- Test insulation using approved procedures.
\- Inspect Brushes, Slip Rings or rotating rectifiers as applicable.
\- Verify protection, interlocks, AVR and governor response.
\- Maintain alignment, foundation and lubrication.
\- Record results for trend comparison.

\#### 6. Safe Isolation

Identify and isolate Stator supply, Rotor excitation, prime mover, turning gear, heaters, control supply, stored pressure and mechanical energy. Apply required lockout/tagout and verify absence of hazardous Voltage.

\#### 7. Generator-Specific Safety

A Generator can produce dangerous Voltage whenever its Rotor turns with field present. Parallel systems can also backfeed an isolated machine from the busbar.

\#### 8. Motor-Specific Safety

Automatic control can restart a Motor. Driven equipment may store pressure, tension, gravity or rotational energy. These hazards must be controlled before work.

\---

\### Real-Life Applications

If a Generator trips on loss of excitation, operators must follow approved shutdown and diagnostic procedures rather than immediately reclose, because Rotor heating and system instability may remain unresolved.

\---

\### Key Takeaways

\- Electrical and mechanical faults must be evaluated together.
\- Excitation and synchronization faults can threaten system stability.
\- Condition trending is more useful than isolated measurements.
\- Isolation must include AC, DC, mechanical and auxiliary energy.
\- Protection must not be repeatedly reset without identifying the cause.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Machinery Fundamentals
\- \*\*Author\*\*: Stephen J. Chapman
\- \*\*Relevant Chapter\*\*: Synchronous Machines — abnormal operation and protection concepts
\- \*\*Supporting Text\*\*: Electrical Safety Handbook — John Cadick, Mary Capelli-Schellpfeffer and Dennis Neitzel — safe electrical maintenance practices

\---

\## Topic 15: Practical Applications of Synchronous Generators and Motors

\### Definition

Practical application means selecting and operating a Synchronous Generator or Motor according to Power, speed, excitation, duty, system and environmental requirements.

\---

\### Importance

Correct application ensures reliable energy conversion, stable grid support, efficient drive operation and safe lifecycle performance.

\---

\### Main Concepts

\#### 1. Thermal and Nuclear Generation

Steam turbines drive high-speed cylindrical-Rotor Alternators. Their pole count and speed are selected to produce system frequency.

\#### 2. Hydroelectric Generation

Low-speed water turbines drive large-diameter, many-pole Salient-Rotor Alternators.

\#### 3. Diesel and Gas Generation

Engine- or turbine-driven Alternators supply standby, isolated or distributed generation with governor and AVR control.

\#### 4. Renewable Energy

Synchronous Generators and Permanent-Magnet Synchronous Generators are used in selected wind, hydro and engine-based renewable systems, often interfaced through Power Electronics.

\#### 5. Industrial Motors

Large Synchronous Motors drive compressors, pumps, crushers, mills and blowers where constant speed, efficiency and reactive-Power capability justify their complexity.

\#### 6. Synchronous Condensers

They provide controllable reactive Power, Voltage support, system inertia and short-circuit contribution without delivering normal shaft load.

\#### 7. Application Selection

Consider:

\- Required real and reactive Power
\- Speed, poles and frequency
\- Starting and synchronization method
\- Prime-mover or load torque characteristics
\- Excitation and control response
\- Grid-code and protection requirements
\- Cooling, enclosure and environment
\- Maintenance skill and lifecycle cost

\#### 8. Application Table

| Application | Typical Machine | Main Reason |
|---|---|---|
| Steam-turbine generation | Cylindrical-Rotor Alternator | High-speed mechanical strength |
| Hydroelectric generation | Salient-Pole Alternator | Low speed and many poles |
| Standby Generator set | Engine-driven Alternator | Independent emergency supply |
| Large compressor | Synchronous Motor | Constant speed and Power-Factor control |
| Grid Voltage support | Synchronous Condenser | Controllable reactive Power and inertia |
| Selected wind generation | Permanent-Magnet Synchronous Generator | High efficiency with electronic interface |

\---

\### Real-Life Applications

A hydro plant selects pole number from turbine speed and system frequency, then coordinates governor, excitation, synchronization and protection so the Alternator can connect safely and share real and reactive load.

\---

\### Key Takeaways

\- Cylindrical Rotors suit high-speed turbine generation.
\- Salient Rotors suit low-speed hydro generation.
\- Large Synchronous Motors combine constant speed with reactive-Power control.
\- Synchronous Condensers support grid Voltage and stability.
\- Selection must coordinate mechanical, electrical, control and protection requirements.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Machinery Fundamentals
\- \*\*Author\*\*: Stephen J. Chapman
\- \*\*Relevant Chapter\*\*: Synchronous Generators and Motors — practical applications
\- \*\*Supporting Text\*\*: Power System Stability and Control — Prabha Kundur — Synchronous Generators and system operation

\---

\# Chapter Summary

\- A Synchronous Machine operates with its Rotor field locked to the Stator Rotating Magnetic Field.
\- Generator mode converts mechanical Power into AC electrical Power.
\- Motor mode converts AC electrical Power into mechanical Power.
\- The Stator normally carries the Three-Phase Armature winding and the Rotor carries the field.
\- Salient-Pole Rotors suit lower-speed, many-pole machines.
\- Cylindrical Rotors suit high-speed two- or four-pole turbo-Alternators.
\- Synchronous Speed is Ns = 120f/P and Generator frequency is f = PN/120.
\- Alternator generated EMF depends on winding factor, frequency, Flux and turns.
\- A basic Synchronous Motor is not inherently self-starting.
\- A synchronized Motor runs at exactly Ns in steady operation.
\- Excitation controls Rotor Flux, terminal Voltage and reactive-Power behavior.
\- Synchronization requires matched Voltage, frequency, Phase Sequence and phase angle.
\- After grid connection, mechanical input mainly controls real Power and excitation mainly controls reactive Power.
\- Hunting is Rotor-angle oscillation following a disturbance.
\- Damper Windings reduce hunting and can assist Motor starting.
\- Synchronous Motors can operate at lagging, unity or leading Power Factor within limits.
\- Induction Motors are simpler and self-starting but normally run with slip.
\- Fault diagnosis must include Stator, Rotor, excitation, control, cooling and mechanical systems.
\- Safe maintenance must isolate AC, DC, prime-mover and stored mechanical energy.
\- Synchronous Generators, Motors and condensers are vital in power generation, industrial drives and grid support.

\---

\# What's Next?

In the next chapter, you will study Motor Starting, Speed Control and Maintenance, including starter selection, acceleration, braking, speed-control methods, protection, troubleshooting and preventive maintenance.

These concepts will integrate your knowledge of DC, Induction and Synchronous Machines into practical Motor-control and maintenance decisions.

\---
