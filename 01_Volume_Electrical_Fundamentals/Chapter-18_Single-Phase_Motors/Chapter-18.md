\# Chapter 18

\# Single-Phase Motors

\---

\## Introduction

Single-Phase Motors convert Single-Phase electrical energy into mechanical energy. They are widely used where Three-Phase supply is unavailable or unnecessary, especially in homes, offices, shops and small workshops. Fans, refrigerators, washing machines, water pumps, air conditioners, mixers and portable tools commonly use these Motors.

A basic Single-Phase Induction Motor is not self-starting. Its Stator supply produces a pulsating Magnetic Field, which can be resolved into two equal fields rotating in opposite directions. At standstill, their starting torques cancel. A starting winding, Capacitor, shading coil or commutator arrangement is therefore used to establish a preferred direction of rotation.

This chapter explains operating principles, construction, Motor types, starting and speed control, torque characteristics, troubleshooting, maintenance, safety and practical selection.

\---

\## Learning Objectives

After completing this chapter, you will be able to:

\- Define a Single-Phase Motor and identify its common uses.
\- Explain its operating principle step by step.
\- Explain clearly why a basic Single-Phase Induction Motor is not self-starting.
\- Identify the main constructional parts.
\- Describe the double-revolving-field concept.
\- Compare major types of Single-Phase Motors.
\- Explain common starting methods.
\- Describe practical speed-control methods.
\- Interpret basic torque characteristics.
\- State the advantages and limitations.
\- Diagnose common faults safely.
\- Describe preventive maintenance and safety precautions.
\- Match Motor types with household and engineering applications.
\- Compare Single-Phase and Three-Phase Motors.

\---

\## Chapter Contents

This chapter covers the following topics:

1\. Introduction to Single-Phase Motors
2\. Principle of Operation
3\. Why Single-Phase Motors Are Not Self-Starting
4\. Construction of Single-Phase Motors
5\. Rotating Magnetic Field (Basic Concept)
6\. Types of Single-Phase Motors
7\. Starting Methods
8\. Speed Control Methods
9\. Torque Characteristics
10\. Advantages and Limitations
11\. Common Faults and Troubleshooting
12\. Maintenance and Safety Precautions
13\. Practical Applications of Single-Phase Motors
14\. Comparison Between Single-Phase and Three-Phase Motors

\---

\## Topic 01: Introduction to Single-Phase Motors

\### Definition

A Single-Phase Motor is an electric Motor designed mainly to operate from a Single-Phase AC supply and produce mechanical rotation.

\---

\### Importance

Single-Phase supply is common in homes and small commercial buildings. Single-Phase Motors therefore provide an economical drive for low- and medium-Power equipment without requiring a Three-Phase connection.

\---

\### Main Concepts

\#### 1. Energy Conversion

The Motor receives electrical input at its terminals and develops mechanical output at its shaft. Some input is lost as copper loss, core loss, friction, windage and stray loss.

\#### 2. Typical Supply

The exact rated Voltage and frequency depend on the country and installation. The nameplate must always be checked before connection.

\#### 3. Common Power Range

Single-Phase Motors are most common in fractional-kilowatt and small-kilowatt applications. Larger industrial loads normally use Three-Phase Motors because they are more efficient and develop smoother torque.

\#### 4. Main Families

\- Single-Phase Induction Motors
\- Shaded-Pole Motors
\- Universal Motors
\- Special small AC Motors

\#### 5. Nameplate Information

Important ratings include Voltage, frequency, Current, output Power, speed, duty, insulation class, Capacitor rating and enclosure type.

\---

\### Real-Life Applications

\- Ceiling and exhaust fans
\- Refrigerators and air conditioners
\- Domestic water pumps
\- Washing machines
\- Mixers, grinders and vacuum cleaners

\---

\### Key Takeaways

\- Single-Phase Motors serve homes and small installations.
\- They convert Single-Phase electrical input into shaft output.
\- Different applications require different starting methods and Motor types.
\- The nameplate is the first source of connection and rating information.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Machinery
\- \*\*Author\*\*: P. S. Bimbhra
\- \*\*Relevant Chapter\*\*: Single-Phase Motors — introductory concepts and applications
\- \*\*Supporting Text\*\*: Electrical Machines — D. P. Kothari and I. J. Nagrath — Single-Phase Motors chapter

\---

\## Topic 02: Principle of Operation

\### Definition

The operating principle of a Single-Phase Induction Motor is electromagnetic induction: Stator Flux induces Rotor Current, and interaction between Flux and Rotor Current produces torque.

\---

\### Importance

Understanding the sequence from supply to torque makes starting behavior, direction reversal and fault diagnosis easier to understand.

\---

\### Main Concepts

\#### 1. Stator Excitation

When AC flows through the main Stator winding, it produces an alternating or pulsating Magnetic Flux.

\#### 2. Rotor EMF

The changing Flux links the Rotor conductors and induces EMF according to electromagnetic induction.

\#### 3. Rotor Current

Because the Rotor bars form a closed circuit, induced EMF produces Rotor Current.

\#### 4. Torque Production

The interaction of Stator Flux and Rotor Current produces electromagnetic torque. At standstill, the forward and backward torque components are equal; a starting system creates an initial torque imbalance.

\#### 5. Running Condition

After the Rotor begins turning, the forward-field torque becomes greater than the backward-field torque. The Motor accelerates and continues running below the Synchronous Speed of the forward field.

\#### 6. Direction Reversal

In a split-winding Motor, direction is usually reversed by reversing the leads of either the main winding or the auxiliary winding, but not both. Manufacturer instructions must be followed.

\---

\### Real-Life Applications

The same induction sequence operates fan Motors, pump Motors and many compressor Motors, although their starting circuits differ.

\---

\### Key Takeaways

\- AC in the Stator produces changing Flux.
\- Changing Flux induces Rotor EMF and Current.
\- Flux–Current interaction produces torque.
\- A starting arrangement creates the initial directional torque.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Machines
\- \*\*Author\*\*: D. P. Kothari and I. J. Nagrath
\- \*\*Relevant Chapter\*\*: Single-Phase Induction Motors — operating principle
\- \*\*Supporting Text\*\*: Electrical Machinery — P. S. Bimbhra — Single-Phase Induction Motor theory

\---

\## Topic 03: Why Single-Phase Motors Are Not Self-Starting

\### Definition

A basic Single-Phase Induction Motor is not self-starting because its pulsating Stator field produces zero net starting torque at standstill.

\---

\### Importance

This is one of the most common examination and Viva questions about Single-Phase Motors. It also explains why auxiliary windings and Capacitors are necessary.

\---

\### Main Concepts

\#### 1. Pulsating Field

A Single-Phase sinusoidal Current produces a Magnetic Field whose magnitude and direction alternate along one fixed axis. It does not create a naturally rotating field at standstill.

\#### 2. Double-Revolving-Field Theory

The pulsating field can be represented as two equal fields:

\- One rotates in the forward direction.
\- One rotates in the backward direction.
\- Each has half the peak magnitude of the pulsating field.

\#### 3. Standstill Torque

At standstill, the Rotor has equal relative speed with respect to both fields. The two induced Rotor effects produce equal and opposite torques.

\[ T_{start}=T_f-T_b=0 \]

where:

\- Tf = forward-field torque
\- Tb = backward-field torque

Therefore the Motor cannot select a direction or accelerate by itself.

\#### 4. Creating Starting Torque

An auxiliary winding placed away from the main winding carries a phase-shifted Current. The two winding Currents create an approximate rotating field and non-zero starting torque.

\#### 5. What Happens After Rotation Begins

If the Rotor is given an initial direction, the forward slip decreases and backward slip increases. Forward torque then exceeds backward torque, so the Motor continues to accelerate in that direction.

\#### 6. Important Exception

Not every Motor connected to a Single-Phase supply lacks starting torque. Universal and shaded-pole Motors use different arrangements that provide starting torque. The non-self-starting statement specifically describes a basic Single-Phase Induction Motor with only one main winding.

\---

\### Real-Life Applications

\- A failed fan Capacitor may cause humming without rotation.
\- Manually spinning a faulty fan may make it continue running, indicating a starting-circuit problem.
\- Compressor Motors use a strong starting circuit because they may start against pressure.

\---

\### Key Takeaways

\- A Single-Phase winding produces a pulsating field.
\- The pulsating field equals two oppositely rotating fields.
\- Equal opposite torques give zero starting torque at standstill.
\- Phase splitting creates the required initial rotating effect.
\- Once rotating, forward torque dominates.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Machinery
\- \*\*Author\*\*: P. S. Bimbhra
\- \*\*Relevant Chapter\*\*: Single-Phase Induction Motors — double-revolving-field theory
\- \*\*Supporting Text\*\*: Electric Machinery and Transformers — Bhag S. Guru and Hüseyin R. Hiziroğlu — Single-Phase Motors section

\---

\## Topic 04: Construction of Single-Phase Motors

\### Definition

Construction refers to the physical and electrical parts that form a Single-Phase Motor and enable starting, running, cooling and mechanical output.

\---

\### Importance

Recognizing each part helps with wiring, selection, dismantling, maintenance and troubleshooting.

\---

\### Main Concepts

\#### 1. Stator Core

Thin laminated steel sheets form the Stator magnetic path. Lamination reduces eddy-current loss.

\#### 2. Main Winding

The main or running winding carries Current during normal operation and produces the main Flux.

\#### 3. Auxiliary Winding

The auxiliary or starting winding is spatially displaced from the main winding. Its electrical characteristics create a phase difference for starting.

\#### 4. Rotor

Most Single-Phase Induction Motors use a Squirrel-Cage Rotor with conducting bars short-circuited by end rings.

\#### 5. Capacitor and Starting Device

Depending on Motor type, a start Capacitor, run Capacitor, centrifugal switch, relay or electronic device controls the auxiliary winding.

\#### 6. Mechanical Parts

The shaft, bearings, end shields, frame and cooling fan support rotation and remove heat.

\#### 7. Construction Table

| Part | Main Function | Common Fault |
|---|---|---|
| Main winding | Running Flux | Open circuit or overheating |
| Auxiliary winding | Starting phase shift | Burnout or wrong connection |
| Capacitor | Current phase shift | Low Capacitance, open or short |
| Centrifugal switch | Disconnects start circuit | Stuck open or closed |
| Rotor | Develops torque | Broken bar or mechanical rubbing |
| Bearing | Supports shaft | Wear, noise or seizure |

\---

\### Real-Life Applications

Technicians identify the Capacitor, winding leads and switch mechanism when servicing fans, pumps and refrigeration compressors.

\---

\### Key Takeaways

\- The main winding produces running Flux.
\- The auxiliary winding assists starting.
\- The Squirrel-Cage Rotor is common and rugged.
\- Capacitors and switches depend on Motor type.
\- Bearings and cooling strongly affect service life.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Machines
\- \*\*Author\*\*: D. P. Kothari and I. J. Nagrath
\- \*\*Relevant Chapter\*\*: Single-Phase Motors — construction and starting windings
\- \*\*Supporting Text\*\*: Electrical Machinery — P. S. Bimbhra — construction of Single-Phase Motors

\---

\## Topic 05: Rotating Magnetic Field (Basic Concept)

\### Definition

A Rotating Magnetic Field is a magnetic field whose axis moves continuously around the Stator air gap.

\---

\### Importance

A rotating field establishes direction and produces starting torque. A Single-Phase Motor approximates this condition during starting by using two spatially displaced windings with phase-displaced Currents.

\---

\### Main Concepts

\#### 1. Spatial Displacement

The main and auxiliary windings are normally placed approximately 90 electrical degrees apart in the Stator.

\#### 2. Time-Phase Displacement

Their Currents must also differ in phase. Resistance or Capacitance creates this Current phase difference.

\#### 3. Approximate Two-Phase Field

Two spatially displaced windings carrying phase-displaced Currents create an unbalanced rotating field. A larger phase difference generally produces better starting torque.

\#### 4. Capacitor Effect

A Capacitor in series with the auxiliary winding shifts its Current and can make the starting field more nearly circular than Resistance splitting alone.

\#### 5. Synchronous Speed

The speed of the rotating field is:

\[ N_s=\frac{120f}{P} \]

where:

\- Ns = Synchronous Speed in revolutions per minute
\- f = supply frequency in hertz
\- P = number of poles

For a 4-pole Motor supplied at 50 Hz:

\[ N_s=\frac{120\times50}{4}=1500\text{ rpm} \]

The Rotor runs below this speed during normal induction-motor operation.

\---

\### Real-Life Applications

Capacitor-run fan Motors use two winding Currents to obtain smoother torque and improved running performance.

\---

\### Key Takeaways

\- Starting requires both spatial and Current phase displacement.
\- A Capacitor improves the phase shift.
\- The resulting field selects a direction of rotation.
\- Synchronous Speed depends on frequency and pole number.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Machinery
\- \*\*Author\*\*: P. S. Bimbhra
\- \*\*Relevant Chapter\*\*: Single-Phase Motors — cross-field and rotating-field concepts
\- \*\*Supporting Text\*\*: Electrical Machines — D. P. Kothari and I. J. Nagrath — rotating field and Single-Phase operation

\---

\## Topic 06: Types of Single-Phase Motors

\### Definition

Single-Phase Motor types are classified mainly by how they create starting torque and how their starting and running windings operate.

\---

\### Importance

Motor type determines starting torque, efficiency, noise, cost, speed behavior and suitable application.

\---

\### Main Concepts

\#### 1. Split-Phase Motor

The auxiliary winding has relatively high Resistance and low reactance compared with the main winding. Their Current phase difference produces moderate starting torque. A switch disconnects the auxiliary winding after acceleration.

\#### 2. Capacitor-Start Motor

A large start Capacitor is connected in series with the auxiliary winding. It produces a greater phase shift and high starting torque. The Capacitor and start winding are disconnected near running speed.

\#### 3. Capacitor-Start Capacitor-Run Motor

This Motor uses a large start Capacitor for starting and a smaller continuous-duty run Capacitor during operation. It offers high starting torque, smoother running, improved Power Factor and better efficiency.

\#### 4. Shaded-Pole Motor

A copper shading ring surrounds part of each pole. Delayed Flux in the shaded portion creates a weak sweeping field and low starting torque. Construction is simple, cheap and suitable for very small loads.

\#### 5. Universal Motor

A Universal Motor is a series-commutator Motor designed to operate on AC or DC. It develops high starting torque and very high speed but has brushes, electrical noise and greater maintenance needs.

\#### 6. Major Type Comparison

| Motor Type | Starting Method | Starting Torque | Running Performance | Typical Application |
|---|---|---:|---|---|
| Split-Phase | Resistive phase split | Moderate | Moderate | Small pumps, blowers |
| Capacitor-Start | Large start Capacitor | High | Good | Compressors, pumps |
| Capacitor-Start Capacitor-Run | Start and run Capacitors | High | Smooth and efficient | Air conditioners, refrigeration |
| Shaded-Pole | Shading coil | Low | Low efficiency | Tiny fans, light-duty appliances |
| Universal | Series field and commutator | High | Very high speed | Drills, mixers, vacuum cleaners |

\#### 7. Selection Principle

Select by load starting torque, duty, speed, noise, efficiency, maintenance, supply and cost—not only by output Power.

\---

\### Real-Life Applications

\- Pumps need stronger starting torque than small ventilation fans.
\- Refrigeration compressors commonly require Capacitor starting.
\- Hand drills use Universal Motors for compact size and high speed.
\- Small appliance fans may use Shaded-Pole Motors because of low cost.

\---

\### Key Takeaways

\- Split-Phase Motors provide moderate starting torque.
\- Capacitor-Start Motors provide high starting torque.
\- Two-Capacitor Motors improve both starting and running.
\- Shaded-Pole Motors are simple but weak and inefficient.
\- Universal Motors run fast on AC or DC but require brush maintenance.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Machines
\- \*\*Author\*\*: D. P. Kothari and I. J. Nagrath
\- \*\*Relevant Chapter\*\*: Single-Phase Motors — classification and characteristics
\- \*\*Supporting Text\*\*: Electrical Machinery — P. S. Bimbhra — Split-Phase, Capacitor, Shaded-Pole and Universal Motors

\---

\## Topic 07: Starting Methods

\### Definition

A starting method is the electrical or magnetic arrangement that develops non-zero initial torque and accelerates a Single-Phase Motor.

\---

\### Importance

The starting method must provide enough torque without excessive Current, winding temperature or mechanical stress.

\---

\### Main Concepts

\#### 1. Resistance Split-Phase Starting

Different winding Resistance-to-reactance ratios create a phase difference. It is economical but provides only moderate starting torque.

\#### 2. Capacitor Starting

A Capacitor produces a larger phase shift and stronger starting torque. The start circuit is normally disconnected by a centrifugal switch, Current relay, potential relay or electronic controller.

\#### 3. Permanent-Split-Capacitor Starting

A run Capacitor remains permanently connected. The Motor is quiet and reversible but starting torque is usually lower than that of a Capacitor-Start Motor.

\#### 4. Shaded-Pole Starting

The shading coil delays part of the pole Flux and creates a weak directional field. No switch or Capacitor is required.

\#### 5. Universal-Motor Starting

Field and armature Currents reverse together on AC, so torque remains in the same direction. The Motor is inherently self-starting.

\#### 6. Start Capacitor Safety

A start Capacitor is designed for short-time duty. Leaving it connected can overheat and damage the Capacitor and auxiliary winding.

\#### 7. Starting Comparison

| Method | Starting Torque | Complexity | Typical Use |
|---|---:|---:|---|
| Resistance split | Moderate | Medium | Light starting loads |
| Capacitor start | High | Medium | Pumps and compressors |
| Permanent Capacitor | Low to moderate | Low | Fans and blowers |
| Shaded pole | Low | Very low | Very small loads |
| Universal commutator | High | High maintenance | Portable appliances |

\---

\### Real-Life Applications

A pump that hums but does not accelerate may have a weak Capacitor, open auxiliary winding, faulty relay, seized bearing or excessive mechanical load.

\---

\### Key Takeaways

\- Starting systems create directional torque.
\- Capacitor starting provides a strong phase split.
\- Start Capacitors are not continuous-duty components.
\- Starting method must match the load torque.
\- A failed start circuit can cause high Current and overheating.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Machinery
\- \*\*Author\*\*: P. S. Bimbhra
\- \*\*Relevant Chapter\*\*: Single-Phase Motors — starting methods
\- \*\*Supporting Text\*\*: Electrical Machines — D. P. Kothari and I. J. Nagrath — Capacitor and Split-Phase Motors

\---

\## Topic 08: Speed Control Methods

\### Definition

Speed control means changing Motor speed in a controlled manner while maintaining acceptable torque, Current and temperature.

\---

\### Importance

Correct speed control improves comfort, process performance, energy use and equipment life. An unsuitable method can cause overheating or unstable operation.

\---

\### Main Concepts

\#### 1. Frequency Control

Because Synchronous Speed is Ns = 120f/P, changing supply frequency changes field speed. An inverter designed for the Motor provides the most flexible induction-motor control.

\#### 2. Voltage Control

Reducing Voltage reduces electromagnetic torque strongly. This method is suitable mainly for fan-type loads whose required torque falls with speed. It is unsuitable for many constant-torque loads.

\#### 3. Pole Changing

Changing the number of effective poles gives discrete speeds but requires a specially designed winding.

\#### 4. Winding Taps

Some fan Motors use selected winding taps to provide several fixed speeds.

\#### 5. Electronic Control

Triac controllers may control suitable Universal Motors and some fan loads. The controller must be compatible with the Motor type and may introduce harmonics and noise.

\#### 6. Universal-Motor Control

Applied Voltage control changes Universal-Motor speed. Closed-loop appliances may use feedback to maintain speed under changing load.

\#### 7. Method Comparison

| Method | Speed Range | Efficiency | Suitable Motor/Load |
|---|---:|---:|---|
| Inverter frequency control | Wide | High when correctly applied | Compatible induction Motor |
| Voltage control | Limited | Load-dependent | Fans and blowers |
| Winding taps | Fixed steps | Good | Multi-speed fan Motor |
| Pole changing | Fixed steps | Good | Special induction Motor |
| Electronic phase control | Wide | Variable | Universal Motor/suitable fan |

\---

\### Real-Life Applications

Ceiling fans use regulator control or electronically commutated alternatives, while modern appliances may use inverter-driven compressor and fan Motors for efficient variable-speed operation.

\---

\### Key Takeaways

\- Frequency and pole number determine field speed.
\- Voltage control reduces available torque.
\- Fan loads tolerate Voltage control better than constant-torque loads.
\- Winding taps provide simple fixed speeds.
\- Controller and Motor must be compatible.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Machines
\- \*\*Author\*\*: D. P. Kothari and I. J. Nagrath
\- \*\*Relevant Chapter\*\*: Single-Phase Motors — speed control and performance
\- \*\*Supporting Text\*\*: Electrical Machinery — P. S. Bimbhra — speed control of AC commutator and induction Motors

\---

\## Topic 09: Torque Characteristics

\### Definition

Torque characteristics describe how Motor torque changes from standstill to normal running speed and with variation in load.

\---

\### Importance

The Motor must produce enough starting and accelerating torque for the connected load while operating safely near its rated speed.

\---

\### Main Concepts

\#### 1. Starting Torque

Starting torque is torque at zero speed. It depends strongly on Motor type and starting circuit.

\#### 2. Accelerating Torque

\[ T_{acc}=T_m-T_L \]

where:

\- Tacc = accelerating torque
\- Tm = Motor torque
\- TL = load torque

The Motor accelerates only when Motor torque exceeds load torque.

\#### 3. Running Torque

Near operating speed, the Motor develops the torque required by the load plus losses. A small increase in load normally increases slip and developed torque.

\#### 4. Breakdown Torque

Breakdown torque is the maximum torque the Motor can develop without a sudden fall in speed. Continuous operation near this point is unsafe.

\#### 5. Voltage Effect

Induction-motor torque is approximately proportional to the square of applied Voltage under simplified conditions:

\[ T\propto V^2 \]

A 10% Voltage reduction can therefore reduce available torque by approximately 19%, illustrating why low Voltage causes difficult starting.

\#### 6. Type Comparison

| Motor Type | Relative Starting Torque | Typical Torque Feature |
|---|---:|---|
| Shaded-Pole | Low | Very light-load starting |
| Split-Phase | Moderate | Suitable for easy-start loads |
| Capacitor-Start | High | Suitable for loaded starting |
| Two-Capacitor | High | Strong start and smooth run |
| Universal | High | High speed and strong acceleration |

\---

\### Real-Life Applications

A compressor requires greater starting torque than a freely rotating fan. Selecting both only by rated watts can cause repeated stalling and protective-device operation.

\---

\### Key Takeaways

\- Starting torque varies greatly among Motor types.
\- Positive accelerating torque is required to gain speed.
\- Low Voltage sharply reduces induction-motor torque.
\- Load torque must be matched across the full acceleration range.
\- Repeated stalling overheats windings quickly.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Machinery
\- \*\*Author\*\*: P. S. Bimbhra
\- \*\*Relevant Chapter\*\*: Single-Phase Motors — torque–speed characteristics
\- \*\*Supporting Text\*\*: Electric Machinery and Transformers — Bhag S. Guru and Hüseyin R. Hiziroğlu — Single-Phase Motor performance

\---

\## Topic 10: Advantages and Limitations

\### Definition

Advantages are features that make Single-Phase Motors useful, while limitations are technical or economic restrictions that affect selection.

\---

\### Importance

Balanced evaluation prevents the use of a convenient Single-Phase Motor where a Three-Phase drive would be safer, more efficient or more economical.

\---

\### Main Concepts

\#### 1. Advantages

\- Operate from widely available domestic supply
\- Economical for small loads
\- Available in many appliance-specific designs
\- Simple installation for low-Power equipment
\- Compact solutions such as Shaded-Pole and Universal Motors

\#### 2. Limitations

\- Basic induction type is not naturally self-starting
\- Requires extra starting components
\- Generally lower efficiency than comparable Three-Phase Motors
\- More pulsating torque, vibration and noise
\- Lower practical Power range
\- Start switches, Capacitors or brushes may require maintenance

\#### 3. Practical Comparison

| Criterion | Advantage | Limitation |
|---|---|---|
| Supply | Commonly available | Higher Current for a given Power |
| Starting | Several tailored methods | Extra components required |
| Cost | Economical for small loads | Less attractive at higher ratings |
| Maintenance | Cage Rotor is simple | Capacitor, switch or brushes may fail |
| Application | Excellent for appliances | Less suitable for large industrial drives |

\---

\### Real-Life Applications

A small home pump is practical on Single-Phase supply, but a large continuously operated industrial pump normally benefits from a Three-Phase Motor.

\---

\### Key Takeaways

\- Single-Phase Motors are convenient for small loads.
\- Starting hardware is a major design feature.
\- Efficiency and torque smoothness are generally lower than Three-Phase designs.
\- Application size and duty determine the best choice.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Machines
\- \*\*Author\*\*: D. P. Kothari and I. J. Nagrath
\- \*\*Relevant Chapter\*\*: Single-Phase Motors — characteristics and applications
\- \*\*Supporting Text\*\*: Electrical Machinery — P. S. Bimbhra — performance comparison of Single-Phase Motors

\---

\## Topic 11: Common Faults and Troubleshooting

\### Definition

Troubleshooting is the safe, systematic process of identifying the cause of abnormal Motor operation and confirming the corrective action.

\---

\### Importance

Replacing parts without diagnosis increases cost and may leave hazardous electrical or mechanical faults unresolved.

\---

\### Main Concepts

\#### 1. Motor Does Not Start

Possible causes include loss of supply, open protection, loose terminal, open winding, failed Capacitor, defective start switch, seized bearing or locked load.

\#### 2. Humming Without Rotation

Likely causes include a failed starting circuit, low Voltage, excessive load or mechanical seizure. Disconnect supply quickly to prevent winding damage.

\#### 3. Overheating

Common causes are overload, low/high Voltage, frequent starts, blocked ventilation, wrong Capacitor, winding short circuit or tight bearing.

\#### 4. Slow Speed

Check supply Voltage, load condition, Capacitor value, bearings and winding health. Do not assume every speed problem is electrical.

\#### 5. Noise and Vibration

Possible causes include worn bearings, loose mounting, bent shaft, Rotor rubbing, damaged fan or load misalignment.

\#### 6. Repeated Protective Tripping

Possible causes include short circuit, earth fault, locked Rotor, overload, wrong protection rating or start switch remaining closed.

\#### 7. Diagnostic Table

| Symptom | Likely Causes | Safe First Checks |
|---|---|---|
| No sound, no rotation | No supply/open circuit | Isolate; check supply and continuity |
| Hums, no start | Capacitor/start circuit/load | Isolate; inspect shaft and test Capacitor correctly |
| Overheats | Overload/low Voltage/cooling | Measure Voltage and Current; inspect airflow |
| Noisy | Bearing/mounting/fan | Isolate; inspect mechanical condition |
| Trips breaker | Short/earth fault/locked Rotor | Do not repeatedly reset; test insulation and load |
| Wrong direction | Incorrect auxiliary connection | Follow approved connection diagram |

\#### 8. Measurement Discipline

Use an adequately rated Multimeter or Clamp Meter, follow safe isolation, discharge Capacitors using an approved method and compare readings with nameplate data and manufacturer documentation.

\---

\### Real-Life Applications

If a pump repeatedly trips, first isolate it and determine whether the shaft or pump is mechanically locked before replacing the Capacitor or Motor.

\---

\### Key Takeaways

\- Begin with supply, protection, load and visual checks.
\- Humming is a warning, not a normal operating condition.
\- Electrical and mechanical faults can produce similar symptoms.
\- Never repeatedly energize a stalled Motor.
\- Confirm the repair by safe Voltage, Current and temperature checks.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Motors and Control Systems
\- \*\*Author\*\*: Frank D. Petruzella
\- \*\*Relevant Chapter\*\*: Single-Phase Motors — installation, testing and troubleshooting
\- \*\*Supporting Text\*\*: Electrical Motor Controls for Integrated Systems — Gary Rockis and Glen A. Mazur — Motor troubleshooting and protection

\---

\## Topic 12: Maintenance and Safety Precautions

\### Definition

Motor maintenance combines planned inspection, cleaning, testing and servicing with controls that prevent electrical, mechanical and stored-energy injury.

\---

\### Importance

Correct maintenance reduces unexpected failure, fire risk, electric shock, downtime and damage to connected equipment.

\---

\### Main Concepts

\#### 1. Safe Isolation

Disconnect all energy sources, apply approved lockout/tagout procedure where required and verify absence of Voltage with a suitable tester before touching conductors.

\#### 2. Capacitor Hazard

A Capacitor may retain dangerous charge after disconnection. Follow manufacturer guidance and use an approved discharge and verification method. Never short terminals casually with a tool.

\#### 3. Unexpected Restart

Thermal protection or automatic controls may restart a Motor after cooling or restoration of supply. Control this risk before inspection.

\#### 4. Cleaning and Cooling

Keep ventilation openings, cooling fan and Motor surface free from dust and obstruction. Use a cleaning method suitable for the enclosure and environment.

\#### 5. Bearings and Mechanical Condition

Inspect noise, play, lubrication condition, coupling, belt tension, alignment and mounting. Follow the manufacturer's lubrication instructions.

\#### 6. Electrical Condition

Inspect terminals, insulation, earthing, cable condition, Capacitor swelling or leakage and signs of overheating. Compare operating Current among repeated measurements under similar load.

\#### 7. Universal-Motor Maintenance

Inspect brushes, brush springs and commutator condition. Excessive sparking requires diagnosis; it should not be treated as normal without checking.

\#### 8. Preventive Checklist

\- Record nameplate and baseline Current.
\- Inspect mounting and driven load.
\- Clean cooling paths.
\- Check abnormal heat, smell, noise and vibration.
\- Inspect starting components.
\- Verify protective conductor and protective devices.
\- Refit guards before energizing.

\---

\### Real-Life Applications

Regular cleaning and bearing inspection can prevent a small fan or pump fault from progressing into winding burnout or fire damage.

\---

\### Key Takeaways

\- Isolation must include verification of absence of Voltage.
\- Stored Capacitor energy requires controlled handling.
\- Automatic restart is a serious hazard.
\- Cooling, bearings and starting components require routine attention.
\- Guards and earthing must be restored before service.

\---

\### Reference

\- \*\*Primary Textbook\*\*: NFPA 70E: Standard for Electrical Safety in the Workplace
\- \*\*Author\*\*: National Fire Protection Association
\- \*\*Relevant Chapter\*\*: Electrically safe work conditions, shock protection and work practices
\- \*\*Supporting Text\*\*: Electric Motors and Control Systems — Frank D. Petruzella — Motor maintenance and safety

\---

\## Topic 13: Practical Applications of Single-Phase Motors

\### Definition

Practical application means selecting and using a Single-Phase Motor whose torque, speed, duty and construction match the driven equipment.

\---

\### Importance

Correct matching improves starting reliability, energy performance, noise, service life and safety.

\---

\### Main Concepts

\#### 1. Fans and Blowers

Ceiling fans, exhaust fans and small blowers commonly use Permanent-Split-Capacitor or similar Motors because quiet operation and moderate starting torque are important.

\#### 2. Pumps

Domestic water pumps require adequate starting torque and protection against overload, dry running and poor supply conditions.

\#### 3. Refrigeration and Air Conditioning

Compressors may start against pressure and commonly use Capacitor-based starting with relays or electronic controls.

\#### 4. Washing Machines

Motor requirements may include reversing, multiple speeds and repeated starting. Traditional designs use Single-Phase induction arrangements; modern machines may use electronically controlled Motors.

\#### 5. Portable Tools

Drills, grinders and vacuum cleaners often use Universal Motors because high speed and high Power-to-weight ratio are valuable.

\#### 6. Small Appliances

Shaded-Pole Motors suit small fans, display devices and light-duty mechanisms where cost and simplicity matter more than efficiency.

\#### 7. Selection Factors

\- Starting and running torque
\- Rated output Power and speed
\- Continuous or intermittent duty
\- Starting frequency
\- Noise and vibration limit
\- Supply Voltage and frequency
\- Ambient temperature and enclosure
\- Efficiency, maintenance and lifecycle cost

\#### 8. Application Table

| Application | Common Motor Choice | Main Reason |
|---|---|---|
| Ceiling fan | Permanent-Split-Capacitor | Quiet running and simple speed control |
| Water pump | Capacitor-Start | High starting torque |
| Air-conditioner compressor | Two-Capacitor/approved compressor Motor | Strong start and efficient run |
| Small exhaust fan | Shaded-Pole or Capacitor Motor | Simple light-load drive |
| Hand drill | Universal Motor | Compact and high speed |
| Washing machine | Application-specific Capacitor/electronic drive | Reversing and speed requirements |

\---

\### Real-Life Applications

The application table shows why one Motor type cannot efficiently serve every household load. Starting duty and torque are often more important than physical size.

\---

\### Key Takeaways

\- Fans prioritize quiet and efficient running.
\- Pumps and compressors require dependable starting torque.
\- Universal Motors suit compact high-speed tools.
\- Shaded-Pole Motors suit very small light-duty loads.
\- Selection must consider duty, environment and lifecycle cost.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Motors and Control Systems
\- \*\*Author\*\*: Frank D. Petruzella
\- \*\*Relevant Chapter\*\*: Single-Phase Motor types, applications and control
\- \*\*Supporting Text\*\*: Electrical Machinery — P. S. Bimbhra — applications of Single-Phase Motors

\---

\## Topic 14: Comparison Between Single-Phase and Three-Phase Motors

\### Definition

This comparison evaluates Motors supplied from Single-Phase and Three-Phase systems in terms of field production, starting, output, efficiency, performance and application.

\---

\### Importance

Understanding the differences helps engineers choose the correct Motor and explains why household appliances and industrial plants use different drive systems.

\---

\### Main Concepts

\#### 1. Magnetic Field

A balanced Three-Phase winding naturally creates a rotating field. A single winding on Single-Phase supply creates a pulsating field and needs an auxiliary starting arrangement.

\#### 2. Starting

Three-Phase Induction Motors are inherently self-starting. Basic Single-Phase Induction Motors are not self-starting.

\#### 3. Performance

For comparable output, Three-Phase Motors generally offer higher efficiency, better Power Factor, smoother torque and lower Current per line conductor.

\#### 4. Size and Application

Single-Phase Motors dominate small domestic loads. Three-Phase Motors dominate medium and large industrial drives.

\#### 5. Maintenance

A basic Three-Phase Squirrel-Cage Motor has no start Capacitor or centrifugal switch. Many Single-Phase Motors include additional components that may fail.

\#### 6. Complete Comparison

| Feature | Single-Phase Motor | Three-Phase Motor |
|---|---|---|
| Supply | Single-Phase | Three-Phase |
| Stator field at standstill | Pulsating | Naturally rotating |
| Basic induction type self-starting | No | Yes |
| Starting components | Usually required | External starter may limit Current, but no phase-splitting circuit |
| Torque | More pulsating | Smoother |
| Efficiency | Generally lower | Generally higher |
| Power Factor | Generally lower | Generally better |
| Practical rating | Small loads | Small to very large loads |
| Maintenance items | May include Capacitor, switch or brushes | Cage type is comparatively simple |
| Common use | Homes, offices, appliances | Factories, pumps, compressors, conveyors |

\#### 7. Selection Rule

Use a Single-Phase Motor when the load is small and only Single-Phase supply is practical. Prefer a Three-Phase Motor for larger, continuous or demanding industrial duty when Three-Phase supply is available.

\---

\### Real-Life Applications

A home ceiling fan reasonably uses a Single-Phase Motor, while an industrial ventilation plant with several large fans normally uses Three-Phase Motors and variable-frequency drives.

\---

\### Key Takeaways

\- Three-Phase supply naturally produces a rotating field.
\- Single-Phase induction starting requires phase splitting.
\- Three-Phase Motors normally provide smoother and more efficient operation.
\- Single-Phase Motors remain practical and economical for small loads.
\- Supply availability, duty and lifecycle cost guide the final choice.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Machines
\- \*\*Author\*\*: D. P. Kothari and I. J. Nagrath
\- \*\*Relevant Chapter\*\*: Single-Phase and Three-Phase Induction Motors — operating comparison
\- \*\*Supporting Text\*\*: Electric Machinery Fundamentals — Stephen J. Chapman — induction-machine principles and performance

\---

\# Chapter Summary

\- Single-Phase Motors are widely used for domestic and small commercial loads.
\- A basic Single-Phase winding produces a pulsating Magnetic Field.
\- Double-revolving-field theory resolves this field into equal forward and backward components.
\- Equal opposite torque components give zero net starting torque at standstill.
\- An auxiliary winding, Capacitor or shading coil establishes initial direction and torque.
\- Most Single-Phase Induction Motors use a Squirrel-Cage Rotor.
\- Split-Phase Motors provide moderate starting torque.
\- Capacitor-Start Motors provide high starting torque.
\- Capacitor-Start Capacitor-Run Motors combine strong starting with better running performance.
\- Shaded-Pole Motors are simple and inexpensive but have low torque and efficiency.
\- Universal Motors operate on AC or DC and provide high speed and starting torque.
\- Synchronous Speed is Ns = 120f/P.
\- Induction-motor torque falls strongly when supply Voltage falls.
\- Starting devices must match the load torque and duty.
\- Failed Capacitors, switches, bearings and windings are common fault sources.
\- Safe maintenance requires isolation, Voltage verification and controlled Capacitor discharge.
\- Three-Phase Motors are generally smoother and more efficient for larger industrial loads.

\---

\# What's Next?

In the next chapter, you will study Synchronous Generators and Motors, including their operating principles, construction, excitation, Synchronous Speed, characteristics and applications.

These concepts will build on your understanding of rotating Magnetic Fields, AC machine construction, speed, torque and electromagnetic energy conversion.

\---
