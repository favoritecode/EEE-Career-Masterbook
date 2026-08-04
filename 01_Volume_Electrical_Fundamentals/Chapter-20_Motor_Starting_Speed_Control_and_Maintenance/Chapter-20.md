\# Chapter 20

\# Motor Starting, Speed Control and Maintenance

\---

\## Introduction

Electric Motors must start, accelerate, run, stop and remain protected under practical supply and load conditions. Direct connection is suitable for some small Motors, but larger or sensitive installations require controlled starting to limit Current, protect the supply and develop suitable torque. Speed-control methods must also match the Motor type and load characteristic.

Reliable operation continues after commissioning. Routine inspection, preventive work, condition monitoring, protection and safe maintenance reduce failures, downtime, energy loss and injury risk. Good troubleshooting separates electrical, mechanical, control and driven-equipment causes instead of replacing parts without evidence.

This chapter integrates DC, Induction, Single-Phase and Synchronous-Motor knowledge into practical starting, speed control, protection, maintenance and industrial decision-making.

\---

\## Learning Objectives

After completing this chapter, you will be able to:

\- Explain why Motors need appropriate starting methods.
\- Relate starting Current, starting torque and acceleration to the load.
\- Compare common DC-Motor starters.
\- Compare DOL, Star-Delta, Autotransformer and Rotor-Resistance starting.
\- Explain Single-Phase Motor starting methods.
\- Describe practical DC-Motor speed-control methods.
\- Explain Induction-Motor speed control, including VFD operation.
\- Explain Synchronous-Motor speed control.
\- Distinguish Soft Starters from VFDs.
\- Prepare a routine Motor-maintenance checklist.
\- Compare preventive and predictive maintenance.
\- Diagnose common Motor faults systematically.
\- Explain the functions and limitations of common protection devices.
\- Apply safe operating and maintenance precautions.
\- Select starting, control and maintenance practices for industrial loads.

\---

\## Chapter Contents

This chapter covers the following topics:

1\. Introduction to Motor Starting
2\. Why Electric Motors Need Starting Methods
3\. Starting Methods of DC Motors
4\. Starting Methods of Three-Phase Induction Motors
5\. Starting Methods of Single-Phase Motors
6\. Speed Control of DC Motors
7\. Speed Control of Induction Motors
8\. Speed Control of Synchronous Motors
9\. Soft Starters
10\. Variable Frequency Drives (VFD) — Basic Introduction
11\. Routine Motor Maintenance
12\. Preventive and Predictive Maintenance
13\. Common Motor Faults and Troubleshooting
14\. Motor Protection Devices
15\. Safety Precautions During Motor Operation and Maintenance
16\. Industrial Applications and Best Practices

\---

\## Topic 01: Introduction to Motor Starting

\### Definition

Motor starting is the controlled process of energizing a Motor and accelerating its Rotor and connected load from standstill to the required operating speed.

\---

\### Importance

A suitable start must produce enough accelerating torque without unacceptable supply Voltage drop, excessive Current, thermal stress or mechanical shock.

\---

\### Main Concepts

\#### 1. Starting Current

Starting Current is the Current drawn when the Motor is energized at or near zero speed. It may be several times rated Current, depending on Motor design and starting method.

\#### 2. Starting Torque

Starting torque is electromagnetic torque at zero speed. It must be sufficient to overcome breakaway friction and load torque.

\#### 3. Accelerating Torque

\[ T_{acc}=T_m-T_L \]

where:

\- Tacc = accelerating torque
\- Tm = Motor torque
\- TL = load torque

Positive accelerating torque is required throughout acceleration.

\#### 4. Acceleration Time

Acceleration depends on total inertia and accelerating torque:

\[ T_{acc}=J\frac{d\omega}{dt} \]

where J is combined rotational inertia and dω/dt is angular acceleration.

\#### 5. Starting Duty

Frequent starts cause repeated heating. Starter selection must consider starts per hour, cold/hot starts, load inertia and permitted acceleration time.

\#### 6. Starting Objective

A good method balances:

\- Supply Current and Voltage drop
\- Required load torque
\- Smooth mechanical acceleration
\- Motor temperature
\- Process needs and cost

\---

\### Real-Life Applications

A lightly loaded ventilation fan may accept reduced starting torque, while a loaded conveyor or compressor requires adequate torque throughout acceleration.

\---

\### Key Takeaways

\- Starting is an electrical and mechanical process.
\- High Current can disturb the supply and heat the Motor.
\- Motor torque must exceed load torque for acceleration.
\- Inertia and starts per hour influence thermal duty.
\- Starter selection begins with the load torque–speed curve.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Motors and Drives
\- \*\*Author\*\*: Austin Hughes and Bill Drury
\- \*\*Relevant Chapter\*\*: Motor starting, load torque and acceleration fundamentals
\- \*\*Supporting Text\*\*: Electric Motors and Control Systems — Frank D. Petruzella — Motor starting and control

\---

\## Topic 02: Why Electric Motors Need Starting Methods

\### Definition

A starting method manages the Motor's abnormal standstill electrical condition and brings the Motor-load system safely to operating speed.

\---

\### Importance

Different Motors need starters for different reasons: limiting Current, adding starting Resistance, creating starting torque, controlling Voltage/frequency or bringing a Rotor into synchronism.

\---

\### Main Concepts

\#### 1. DC-Motor Standstill Condition

At start, speed N = 0, so Back EMF Eb = 0. Therefore:

\[ I_a=\frac{V-E_b}{R_a}=\frac{V}{R_a} \]

Because Armature Resistance Ra is small, direct starting Current can be dangerously high.

\#### 2. Induction-Motor Standstill Condition

At standstill, slip s = 1. Direct full-Voltage connection produces high inrush Current. Whether it is acceptable depends on Motor size, supply capacity and load.

\#### 3. Single-Phase Starting Need

A basic Single-Phase Induction Motor produces zero net starting torque. An auxiliary winding, Capacitor or shading method creates directional starting torque.

\#### 4. Synchronous-Motor Starting Need

A basic Synchronous Motor cannot accelerate directly into magnetic lock at fixed full frequency. Damper, pony-Motor or variable-frequency starting is required.

\#### 5. Supply-System Limitation

High inrush can cause Voltage dip, dim lighting, contactor dropout or disturbance to nearby equipment.

\#### 6. Mechanical Limitation

Sudden torque can stress couplings, belts, gears, shafts, pipes and transported material.

\#### 7. Examination Note

“Limit starting Current” is not the only purpose of a starter. It may also provide switching, under-Voltage release, overload coordination, acceleration control and starting torque.

\---

\### Real-Life Applications

A large pump started directly may cause both electrical Voltage dip and hydraulic pressure shock. Controlled acceleration can reduce both problems.

\---

\### Key Takeaways

\- DC starting Current is high because Eb is initially zero.
\- Induction Motors may draw high locked-Rotor Current.
\- Single-Phase and Synchronous Motors need torque-producing starting arrangements.
\- Supply strength and mechanical process affect starter choice.
\- Protection and control are part of practical starting.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Machinery Fundamentals
\- \*\*Author\*\*: Stephen J. Chapman
\- \*\*Relevant Chapter\*\*: DC, Induction and Synchronous-Motor starting behavior
\- \*\*Supporting Text\*\*: Electrical Machines — D. P. Kothari and I. J. Nagrath — Motor starting chapters

\---

\## Topic 03: Starting Methods of DC Motors

\### Definition

DC-Motor starting methods limit Armature Current while preserving field conditions and allowing the Motor to develop safe accelerating torque.

\---

\### Importance

Without starting Current control, the small Armature Resistance and zero initial Back EMF can damage the Commutator, Brushes, Armature winding and supply equipment.

\---

\### Main Concepts

\#### 1. Starting Resistance

External Resistance is initially connected in series with the Armature:

\[ I_{start}=\frac{V}{R_a+R_{start}} \]

As speed and Back EMF rise, Resistance is removed in steps or continuously by electronic control.

\#### 2. Three-Point Starter

It uses line, Armature and field terminals. It commonly provides starting Resistance, no-Voltage release and overload protection for Shunt or Compound Motors.

\#### 3. Four-Point Starter

Its no-Voltage coil is connected independently of the Shunt field. This avoids unwanted release when field Current is deliberately reduced for speed control, but field-loss protection must still be provided appropriately.

\#### 4. DC Drive Starting

Modern controlled rectifier or DC chopper drives ramp Armature Voltage and limit Current electronically, reducing resistor loss and improving control.

\#### 5. Series-Motor Precaution

A DC Series Motor must not be run without mechanical load unless specifically designed and controlled for that condition, because dangerous overspeed can occur.

\#### 6. Starter Comparison

| Method | Main Principle | Advantage | Limitation/Application |
|---|---|---|---|
| Starting resistor | Adds Armature Resistance | Simple Current limiting | Energy lost as heat |
| Three-point | Resistance plus basic protection | Traditional Shunt/Compound starting | Field-weakening may release hold coil |
| Four-point | Independent hold coil | Better with field speed control | Needs separate field-loss protection |
| Electronic DC drive | Controlled Armature Voltage/Current | Smooth and efficient | Higher complexity and electronics |

\---

\### Real-Life Applications

Older workshop DC Motors may use manual or contactor starters, while cranes, mills and process lines use electronic DC drives for controlled acceleration and Current limiting.

\---

\### Key Takeaways

\- Back EMF is zero at standstill.
\- Starting Resistance limits Armature Current.
\- Resistance is removed as speed rises.
\- Three- and four-point starters differ in hold-coil connection.
\- Electronic drives provide smoother, lower-loss starting.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Machinery Fundamentals
\- \*\*Author\*\*: Stephen J. Chapman
\- \*\*Relevant Chapter\*\*: DC-Motor starting and speed control
\- \*\*Supporting Text\*\*: Electrical Machinery — P. S. Bimbhra — DC-Motor starters

\---

\## Topic 04: Starting Methods of Three-Phase Induction Motors

\### Definition

Three-Phase Induction-Motor starting methods connect or control the Stator or Rotor circuit to produce acceptable Current, torque and acceleration.

\---

\### Importance

Starter choice affects supply Voltage dip, acceleration time, process stress, Motor heating and reliability.

\---

\### Main Concepts

\#### 1. Direct-On-Line Starting

DOL applies full line Voltage directly to the Motor through a contactor and coordinated protection.

\- Advantage: simple, inexpensive and maximum available starting torque.
\- Limitation: high starting Current and sudden mechanical torque.
\- Use: small Motors or strong supplies where direct start is permitted.

\#### 2. Star-Delta Starting

A Motor designed to run Delta at line Voltage starts with windings connected in Star, then changes to Delta.

At start:

\- Phase Voltage becomes VL/√3.
\- Line starting Current is approximately one-third of DOL Current.
\- Starting torque is approximately one-third of DOL torque.

It suits loads requiring low starting torque. Transition can create Current and torque transients.

\#### 3. Autotransformer Starting

Reduced Voltage is applied through an Autotransformer tap. For an ideal tap ratio k:

\- Motor Voltage ≈ kV
\- Motor torque ≈ k² times full-Voltage torque
\- Supply Current is reduced according to the connection

It offers selectable reduced Voltage and is used for larger Motors where cost and space are justified.

\#### 4. Rotor-Resistance Starting

Available only for wound-Rotor or Slip-Ring Motors, external Rotor Resistance improves starting torque and limits Current. Resistance is progressively removed as speed rises.

\#### 5. Soft Starter

Thyristors gradually increase applied Stator Voltage. It provides smooth acceleration and reduced Current but torque also decreases approximately with Voltage squared.

\#### 6. Variable Frequency Drive

A VFD controls frequency and Voltage, enabling low-frequency starting with controlled Current and useful torque. It also provides continuous speed control.

\#### 7. Method Comparison

| Method | Starting Current | Starting Torque | Speed Control | Typical Use |
|---|---:|---:|---|---|
| DOL | High | High/maximum available | No | Small Motor, strong supply |
| Star-Delta | About one-third DOL line Current | About one-third DOL | No | Light-start Delta-run load |
| Autotransformer | Reduced/selectable | Reduced by Voltage squared | No | Larger Motor |
| Rotor Resistance | Limited | High and controllable | Limited/inefficient | Slip-Ring Motor, heavy start |
| Soft Starter | Controlled | Reduced with Voltage | No continuous speed control | Smooth fixed-speed start |
| VFD | Controlled | Strong when correctly set | Yes | Variable-speed or demanding start |

\---

\### Real-Life Applications

A small workshop pump may use DOL, a lightly loaded fan may use Star-Delta, a large fixed-speed pump may use a Soft Starter and a variable-flow fan may use a VFD.

\---

\### Key Takeaways

\- DOL is simplest but draws high Current.
\- Star-Delta reduces both Current and torque.
\- Autotransformer starting offers selectable reduced Voltage.
\- Rotor Resistance gives high starting torque only on Slip-Ring Motors.
\- Soft Starters ramp Voltage; VFDs control Voltage and frequency.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Motors and Drives
\- \*\*Author\*\*: Austin Hughes and Bill Drury
\- \*\*Relevant Chapter\*\*: Induction-Motor starting methods and drives
\- \*\*Supporting Text\*\*: Electric Motors and Control Systems — Frank D. Petruzella — AC Motor starters

\---

\## Topic 05: Starting Methods of Single-Phase Motors

\### Definition

Single-Phase Motor starting methods create a directional magnetic effect or use a commutator arrangement to develop non-zero starting torque.

\---

\### Importance

A basic Single-Phase Induction Motor is not self-starting because its forward and backward torque components cancel at standstill.

\---

\### Main Concepts

\#### 1. Split-Phase Starting

A high-Resistance auxiliary winding creates a moderate Current phase displacement. It provides moderate starting torque and is disconnected after acceleration.

\#### 2. Capacitor-Start

A large start Capacitor produces greater phase displacement and high starting torque. A centrifugal switch, relay or electronic device removes the start circuit.

\#### 3. Capacitor-Start Capacitor-Run

A large short-time start Capacitor assists acceleration, while a smaller continuous-duty run Capacitor remains connected for smoother and more efficient operation.

\#### 4. Permanent-Split-Capacitor

A run Capacitor remains permanently connected. It gives quiet operation and easy reversing, but usually lower starting torque than Capacitor-Start designs.

\#### 5. Shaded-Pole Starting

A shading coil delays part of the pole Flux, producing a weak sweeping field. It is simple but provides low starting torque and efficiency.

\#### 6. Universal-Motor Starting

Series field and Armature Current reverse together on AC, so torque remains unidirectional. The Motor is self-starting but requires Brush and Commutator maintenance.

\#### 7. Application Comparison

| Method | Starting Torque | Typical Application |
|---|---:|---|
| Split phase | Moderate | Small blower or easy-start load |
| Capacitor start | High | Pump or compressor |
| Two-Capacitor | High with good running | HVAC and refrigeration |
| Permanent Capacitor | Low to moderate | Fan and blower |
| Shaded pole | Low | Very small fan |
| Universal | High | Drill, mixer, vacuum cleaner |

\---

\### Real-Life Applications

A fan that hums but does not start may have a failed Capacitor, open auxiliary winding, defective switch, low Voltage or seized bearing.

\---

\### Key Takeaways

\- Phase splitting creates directional starting torque.
\- Capacitors provide stronger phase displacement.
\- Start Capacitors are short-time-duty components.
\- Shaded-Pole Motors suit only light starting loads.
\- Universal Motors use a different commutator principle.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Machinery
\- \*\*Author\*\*: P. S. Bimbhra
\- \*\*Relevant Chapter\*\*: Single-Phase Motor starting methods
\- \*\*Supporting Text\*\*: Electrical Machines — D. P. Kothari and I. J. Nagrath — Single-Phase Motors

\---

\## Topic 06: Speed Control of DC Motors

\### Definition

DC-Motor speed control changes Armature Voltage, field Flux or effective Armature-circuit Voltage drop to obtain the required speed.

\---

\### Importance

DC Motors traditionally offer wide and smooth speed control, making them useful in cranes, mills, machine tools and legacy variable-speed processes.

\---

\### Main Concepts

\#### 1. Speed Relation

\[ N\propto\frac{V-I_aR_a}{\Phi} \]

Speed depends approximately on effective Armature Voltage and inversely on field Flux.

\#### 2. Armature-Voltage Control

Varying Armature Voltage gives efficient control below base speed with approximately constant field Flux and constant-torque capability.

\#### 3. Field-Weakening Control

Reducing field Current reduces Flux and raises speed above base speed. Available torque decreases and overspeed protection is essential.

\#### 4. Armature-Resistance Control

Series Resistance reduces effective Armature Voltage. It is simple but inefficient, load-dependent and produces heat.

\#### 5. Ward-Leonard System

A Motor-Generator set supplies adjustable DC Voltage. It historically provided smooth control but is large and maintenance-intensive compared with electronic drives.

\#### 6. Electronic DC Drives

Controlled rectifiers or choppers regulate Armature Voltage and Current. Closed-loop feedback improves speed regulation and torque limiting.

\#### 7. Comparison

| Method | Range | Efficiency | Main Note |
|---|---:|---:|---|
| Armature Voltage | Below base speed | High | Constant field/torque region |
| Field weakening | Above base speed | High | Reduced torque, overspeed risk |
| Series Resistance | Below base speed | Low | Heat and poor regulation |
| Electronic drive | Wide | High | Best modern control and protection |

\---

\### Real-Life Applications

A rolling-mill DC drive may use Armature-Voltage control below base speed and field weakening above base speed while limiting Current and torque.

\---

\### Key Takeaways

\- DC speed follows effective Armature Voltage divided by Flux.
\- Armature Voltage controls below base speed.
\- Field weakening increases speed but reduces torque capability.
\- Resistance control wastes energy.
\- Electronic feedback drives provide precise modern control.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Motors and Drives
\- \*\*Author\*\*: Austin Hughes and Bill Drury
\- \*\*Relevant Chapter\*\*: DC-Motor speed control and electronic drives
\- \*\*Supporting Text\*\*: Electric Machinery Fundamentals — Stephen J. Chapman — DC-Motor control

\---

\## Topic 07: Speed Control of Induction Motors

\### Definition

Induction-Motor speed control changes Synchronous Speed, slip or both while maintaining acceptable Flux, torque, Current and temperature.

\---

\### Importance

Efficient variable-speed control saves energy and improves process performance, especially for pumps, fans, conveyors and production machines.

\---

\### Main Concepts

\#### 1. Speed Relation

\[ N=N_s(1-s)=\frac{120f}{P}(1-s) \]

Therefore speed can be influenced by frequency, pole number or slip.

\#### 2. Frequency Control

A VFD varies frequency and Voltage. Below base speed, approximately constant V/f helps maintain Air-Gap Flux and torque capability.

\#### 3. Pole Changing

Special Stator windings provide discrete Synchronous Speeds by changing effective pole number.

\#### 4. Stator-Voltage Control

Reducing Voltage lowers torque approximately with V². It is mainly suitable for fan-type loads and limited speed ranges.

\#### 5. Rotor-Resistance Control

External Resistance in a Slip-Ring Motor increases slip for a given torque. It gives speed control below Synchronous Speed but wastes Rotor Power as heat.

\#### 6. Slip-Power Recovery

Special wound-Rotor systems recover part of slip Power instead of dissipating it, but they are more complex and application-specific.

\#### 7. Mechanical Methods

Gearboxes, pulleys and variable mechanical transmissions change load speed but do not change Motor electrical speed in the same way.

\#### 8. Comparison

| Method | Speed Type | Efficiency | Application |
|---|---|---:|---|
| VFD | Continuous wide range | High | General modern variable-speed drive |
| Pole changing | Discrete speeds | Good | Special multi-speed Motor |
| Stator Voltage | Limited below base | Load-dependent | Fans/blowers |
| Rotor Resistance | Below base | Low | Slip-Ring Motor |
| Slip-Power recovery | Below/around base by design | Better than resistor | Large wound-Rotor drive |

\---

\### Real-Life Applications

Reducing centrifugal-pump speed with a VFD can save substantial energy compared with throttling while also reducing mechanical stress.

\---

\### Key Takeaways

\- N = (120f/P)(1−s).
\- VFD frequency control is the standard modern method.
\- Constant V/f supports useful Flux below base speed.
\- Voltage control suits variable-torque loads better than constant-torque loads.
\- Rotor-Resistance control is inefficient and limited to Slip-Ring Motors.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Motors and Drives
\- \*\*Author\*\*: Austin Hughes and Bill Drury
\- \*\*Relevant Chapter\*\*: Induction-Motor speed control and inverter drives
\- \*\*Supporting Text\*\*: Principles of Electric Machines and Power Electronics — P. C. Sen — Induction-Motor drives

\---

\## Topic 08: Speed Control of Synchronous Motors

\### Definition

Synchronous-Motor speed control changes supply frequency or pole number because the synchronized Rotor runs at Ns = 120f/P.

\---

\### Importance

At fixed grid frequency and pole number, speed is fixed. Variable-speed operation therefore normally requires a compatible variable-frequency Power-Electronic drive.

\---

\### Main Concepts

\#### 1. Fixed-Frequency Operation

Once synchronized to a fixed-frequency supply, normal load variation changes the Power angle but not steady speed.

\#### 2. Variable-Frequency Control

A drive increases frequency gradually from low value, keeping the Rotor synchronized while controlling Voltage, Current and torque.

\#### 3. Pole Changing

Special winding or machine construction can provide discrete speeds, but it is uncommon compared with electronic frequency control.

\#### 4. Field Control

Changing field excitation controls Power Factor, reactive Power and torque-related limits; it does not independently set Synchronous Speed at fixed frequency.

\#### 5. Permanent-Magnet Synchronous Drives

Modern PMSM drives use inverter frequency and Rotor-position information or estimation for efficient torque and speed control.

\#### 6. Control Comparison

| Variable | Primary Effect |
|---|---|
| Supply frequency | Sets Synchronous Speed |
| Pole number | Sets discrete Synchronous Speed |
| Stator Voltage/current | Supports Flux and torque control |
| Rotor excitation | Controls Flux and reactive behavior |
| Load torque | Changes Power angle within stable limits |

\---

\### Real-Life Applications

High-efficiency compressor and pump systems may use inverter-fed Permanent-Magnet or wound-field Synchronous Motors for precise variable-speed operation.

\---

\### Key Takeaways

\- Synchronous speed depends on frequency and poles.
\- Field Current does not independently set speed at fixed frequency.
\- Variable-frequency drives provide continuous speed control.
\- Control must preserve synchronism and thermal limits.
\- PMSM systems commonly use electronic position-aware control.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Motors and Drives
\- \*\*Author\*\*: Austin Hughes and Bill Drury
\- \*\*Relevant Chapter\*\*: Synchronous and Permanent-Magnet Motor drives
\- \*\*Supporting Text\*\*: Electric Machinery Fundamentals — Stephen J. Chapman — Synchronous-Motor operation

\---

\## Topic 09: Soft Starters

\### Definition

A Soft Starter is a solid-state controller that gradually changes the RMS Voltage applied to an AC Motor during starting and often during stopping.

\---

\### Importance

It reduces inrush Current and mechanical shock for fixed-speed applications without providing the continuous frequency control of a VFD.

\---

\### Main Concepts

\#### 1. Working Principle

Anti-parallel thyristors in each controlled phase delay conduction and progressively increase Motor terminal Voltage during a programmed ramp.

\#### 2. Torque Effect

Induction-Motor torque is approximately proportional to Voltage squared under comparable conditions. Excessive Voltage reduction may prevent a loaded Motor from accelerating.

\#### 3. Current Limit

Many Soft Starters monitor Current and adjust firing to keep starting Current near a set limit, subject to available torque.

\#### 4. Bypass Contactor

After acceleration, a bypass contactor may carry Motor Current to reduce thyristor loss and heating.

\#### 5. Soft Stop

Gradual Voltage reduction can reduce hydraulic shock in some pump systems. It is not regenerative braking and may not suit every load.

\#### 6. Advantages

\- Smooth acceleration and reduced mechanical shock
\- Reduced starting Current
\- Lower cost and complexity than many VFD installations
\- Useful for fixed-speed pumps, fans and conveyors

\#### 7. Limitations

\- No normal continuous speed control
\- Reduced Voltage also reduces torque
\- Generates harmonics during ramp
\- Requires correct cooling, protection and bypass coordination

\---

\### Real-Life Applications

A fixed-speed water pump can use Soft Start and Soft Stop to reduce electrical inrush and water hammer while running directly from the line after bypass.

\---

\### Key Takeaways

\- A Soft Starter controls Voltage, not supply frequency.
\- Lower Voltage means lower starting torque.
\- Current limiting must still allow acceleration.
\- A bypass contactor reduces running loss.
\- It suits fixed-speed loads requiring smoother start/stop.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Motors and Control Systems
\- \*\*Author\*\*: Frank D. Petruzella
\- \*\*Relevant Chapter\*\*: Solid-state reduced-Voltage Motor starting
\- \*\*Supporting Text\*\*: Electric Motors and Drives — Austin Hughes and Bill Drury — soft starting and AC drives

\---

\## Topic 10: Variable Frequency Drives (VFD) — Basic Introduction

\### Definition

A Variable Frequency Drive is a Power-Electronic system that supplies controlled Voltage and frequency to an AC Motor for starting, speed and torque control.

\---

\### Importance

VFDs enable efficient process control, smooth starting, adjustable speed and energy savings, especially on variable-torque loads.

\---

\### Main Concepts

\#### 1. Main Power Stages

\- Rectifier converts AC input to DC.
\- DC Link smooths and stores energy.
\- Inverter switches DC to controlled AC output.
\- Controller sets frequency, Voltage and protective limits.

\#### 2. Basic V/f Control

Below base speed, maintaining approximately constant V/f helps keep Motor Flux near its intended value.

\#### 3. Starting Operation

The VFD starts at low frequency and increases frequency according to the acceleration ramp, limiting Current while producing controlled torque.

\#### 4. Speed Reference

Speed command may come from keypad, potentiometer, analog signal, digital inputs, PLC or communication network.

\#### 5. Braking

Deceleration energy raises DC-Link Voltage. Depending on the system, it may be handled by natural losses, a braking resistor/chopper or a regenerative front end.

\#### 6. Motor and Cable Considerations

PWM output can create high dv/dt, common-mode Voltage, bearing Current and cable effects. Long cables, older insulation and special environments require manufacturer guidance and suitable filters or Motor design.

\#### 7. Soft Starter versus VFD

| Feature | Soft Starter | VFD |
|---|---|---|
| Controlled quantity | RMS Voltage during start/stop | Voltage and frequency continuously |
| Continuous speed control | No | Yes |
| Starting torque | Reduced with Voltage | Strong controllable torque when set correctly |
| Running electronics | Often bypassed | Inverter remains active |
| Cost/complexity | Lower | Higher |
| Best use | Smooth fixed-speed start | Variable speed and process control |

\#### 8. Safety

DC-Link capacitors may retain hazardous Voltage after input isolation. Follow indicated discharge time and verify absence of Voltage using approved procedures.

\---

\### Real-Life Applications

A VFD-controlled HVAC fan reduces speed when airflow demand falls, often saving much more energy than throttling at full Motor speed.

\---

\### Key Takeaways

\- A VFD contains rectifier, DC Link and inverter stages.
\- Frequency sets approximate speed.
\- V/f control supports Motor Flux below base speed.
\- VFDs provide continuous speed control; Soft Starters do not.
\- PWM, cooling, cable and stored-energy issues require correct engineering.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Motors and Drives
\- \*\*Author\*\*: Austin Hughes and Bill Drury
\- \*\*Relevant Chapter\*\*: Inverter-fed AC Motor drives
\- \*\*Supporting Text\*\*: Principles of Electric Machines and Power Electronics — P. C. Sen — Power-Electronic Motor drives

\---

\## Topic 11: Routine Motor Maintenance

\### Definition

Routine maintenance consists of regular inspection, cleaning, measurement and minor servicing performed to keep a Motor within normal operating condition.

\---

\### Importance

Simple repeated checks reveal developing problems before they cause winding failure, bearing seizure, unplanned shutdown or fire.

\---

\### Main Concepts

\#### 1. Operating Inspection

Observe abnormal smell, sound, vibration, temperature, sparking, leakage, airflow and load behavior without entering hazardous areas or defeating guards.

\#### 2. Electrical Checks

\- Compare phase Voltages and Currents.
\- Check Current against nameplate and load.
\- Inspect terminals, cable glands and earthing.
\- Review protection trips and VFD/relay alarms.
\- Perform insulation tests only with electronics safely isolated as required.

\#### 3. Mechanical Checks

\- Bearing noise, temperature and lubrication
\- Shaft alignment and coupling condition
\- Belt tension and pulley alignment
\- Foundation bolts and soft foot
\- Cooling fan and ventilation path

\#### 4. Cleaning

Use a method compatible with enclosure, insulation and environment. Do not force contamination deeper into windings or bearings.

\#### 5. Lubrication

Use the specified lubricant, quantity and interval. Both under-lubrication and over-lubrication can cause bearing failure.

\#### 6. Routine Checklist

| Interval/Trigger | Typical Check | Record |
|---|---|---|
| Each shift/round | Noise, smell, vibration, load | Abnormal observation |
| Periodic | Voltage, Current, temperature | Trend values |
| Planned stop | Terminals, cooling, coupling, bearing | Condition and action |
| After trip | Event data and root cause | Protection code and measurements |
| After repair | Alignment, rotation, no-load/load test | Baseline readings |

\---

\### Real-Life Applications

A gradual rise in bearing temperature and vibration can identify lubrication or alignment problems before the bearing damages the Rotor and Stator.

\---

\### Key Takeaways

\- Routine checks create useful trend data.
\- Electrical and mechanical observations must be combined.
\- Correct lubrication quantity matters.
\- Cooling paths must remain clear.
\- Every trip requires cause review before restart.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Motors and Control Systems
\- \*\*Author\*\*: Frank D. Petruzella
\- \*\*Relevant Chapter\*\*: Motor installation, inspection and maintenance
\- \*\*Supporting Text\*\*: Electrical Motor Controls for Integrated Systems — Gary Rockis and Glen A. Mazur — Motor maintenance procedures

\---

\## Topic 12: Preventive and Predictive Maintenance

\### Definition

Preventive maintenance performs planned work at scheduled intervals, while predictive maintenance uses condition data and trends to estimate when intervention is needed.

\---

\### Importance

The correct maintenance strategy balances reliability, safety, downtime, labor, spares and production risk.

\---

\### Main Concepts

\#### 1. Corrective Maintenance

Repair occurs after failure. It may suit non-critical, low-cost equipment with safe redundancy but is risky for critical Motors.

\#### 2. Preventive Maintenance

Tasks are scheduled by time, operating hours or starts. Examples include cleaning, lubrication, terminal inspection and planned replacement.

\#### 3. Predictive Maintenance

Condition measurements identify changes. Common methods include:

\- Vibration analysis
\- Infrared thermography
\- Motor Current Signature Analysis
\- Insulation Resistance and other approved insulation diagnostics
\- Ultrasonic inspection
\- Lubricant or wear-debris analysis
\- Online temperature and Current trending

\#### 4. Baseline and Trend

A single measurement may be misleading. Compare with baseline, similar operating load, manufacturer limits and previous trend.

\#### 5. Maintenance Comparison

| Strategy | Trigger | Advantage | Limitation |
|---|---|---|---|
| Corrective | Failure | Low planning for non-critical asset | Unplanned downtime and damage |
| Preventive | Time/hours/starts | Simple planning | May replace healthy parts or miss early faults |
| Predictive | Condition trend | Targets work and detects development | Needs tools, skill and good data |

\#### 6. Criticality-Based Plan

Critical Motors require stronger monitoring, spares, protection testing and contingency planning than small non-critical Motors.

\#### 7. Documentation

Record asset identity, nameplate, duty, baseline, work performed, parts, readings, alarms and follow-up date.

\---

\### Real-Life Applications

An increasing vibration component at bearing frequency can trigger planned bearing replacement during a scheduled shutdown instead of waiting for catastrophic failure.

\---

\### Key Takeaways

\- Preventive maintenance follows schedule.
\- Predictive maintenance follows condition trends.
\- Baseline and repeatable measurement conditions are essential.
\- Asset criticality determines monitoring effort.
\- Documentation converts measurements into decisions.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Maintenance and Reliability Best Practices
\- \*\*Author\*\*: Ramesh Gulati
\- \*\*Relevant Chapter\*\*: Preventive, predictive and reliability-centered maintenance
\- \*\*Supporting Text\*\*: Machinery Vibration: Measurement and Analysis — Victor Wowk — rotating-machine condition monitoring

\---

\## Topic 13: Common Motor Faults and Troubleshooting

\### Definition

Motor troubleshooting is the safe, evidence-based process of identifying whether abnormal operation originates in the supply, control, Motor, mechanical transmission or driven load.

\---

\### Importance

Similar symptoms can have different causes. Replacing a Motor without finding low Voltage, overload, misalignment or poor cooling can cause repeated failure.

\---

\### Main Concepts

\#### 1. Overheating

Causes include overload, low/high Voltage, unbalance, frequent starting, blocked cooling, high ambient temperature, wrong connection, bearing friction and winding fault.

\#### 2. Bearing Failure

Causes include wrong lubricant, contamination, misalignment, excessive belt tension, electrical bearing Current, overload and poor installation.

\#### 3. Insulation Failure

Heat, moisture, contamination, Voltage stress, vibration, age and improper testing can weaken insulation and produce phase or earth faults.

\#### 4. Vibration and Abnormal Noise

Possible causes include unbalance, misalignment, looseness, soft foot, bearing defect, Rotor rub, broken bar, resonance, damaged fan and driven-equipment fault.

\#### 5. Overloading

Overload may result from process blockage, wrong Motor size, excessive pressure, tight bearing, mechanical jam or incorrect speed.

\#### 6. Phase Failure and Unbalance

Loss of one phase or Voltage unbalance produces Current unbalance, torque reduction and rapid heating. Measure and compare all phases.

Voltage unbalance may be expressed as:

\[ \%VU=\frac{\text{maximum deviation from average Voltage}}{\text{average Voltage}}\times100 \]

\#### 7. Troubleshooting Table

| Symptom | Possible Causes | Safe Diagnostic Direction |
|---|---|---|
| Does not start | Supply, fuse, control, starter, load jam | Isolate; verify supply/control and shaft/load condition |
| Hums/stalls | Phase loss, low Voltage, failed Capacitor, jam | Disconnect quickly; compare phases and inspect start/load |
| Overheats | Overload, unbalance, cooling, bearing, winding | Measure Current/Voltage/temperature and inspect airflow |
| High vibration | Alignment, unbalance, bearing, looseness | Trend vibration; inspect foundation and driven equipment |
| Abnormal noise | Bearing, fan, rub, electrical hum | Locate frequency/source after safe assessment |
| Repeated trip | Actual overload, short/earth fault, wrong setting | Read trip cause; test before reset |
| Low speed | Overload, low Voltage, VFD setting, Rotor fault | Compare speed, Current, load and command |

\#### 8. Diagnostic Sequence

1\. Make the condition safe.
2\. Collect symptom, alarm and event history.
3\. Confirm nameplate, wiring and settings.
4\. Inspect supply and control.
5\. Inspect Motor and driven equipment.
6\. Measure using correctly rated instruments.
7\. Identify root cause and correct it.
8\. Verify operation and record baseline results.

\---

\### Real-Life Applications

If a conveyor Motor trips on overload, inspect conveyor blockage, belt tension and gearbox before increasing relay setting. Raising protection without evidence can lead to winding damage or fire.

\---

\### Key Takeaways

\- Overheating is a symptom with many possible causes.
\- Bearing and alignment faults affect electrical load Current.
\- Phase failure requires rapid protective action.
\- Read protection and drive event data before resetting.
\- Root-cause correction prevents repeat failure.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Motors and Control Systems
\- \*\*Author\*\*: Frank D. Petruzella
\- \*\*Relevant Chapter\*\*: Motor testing and troubleshooting
\- \*\*Supporting Text\*\*: Electrical Motor Controls for Integrated Systems — Gary Rockis and Glen A. Mazur — fault diagnosis and control circuits

\---

\## Topic 14: Motor Protection Devices

\### Definition

Motor protection devices detect or interrupt abnormal electrical conditions to reduce risk to people, conductors, controls, Motors and driven equipment.

\---

\### Importance

No single device protects against every fault. Short-circuit, overload, earth-leakage, phase, temperature and process protection must be coordinated.

\---

\### Main Concepts

\#### 1. Fuse

A fuse melts when Current and time exceed its characteristic. It provides short-circuit and overcurrent protection but must be replaced after operation. Motor circuits require a type coordinated with starting Current and overload protection.

\#### 2. MCB

A Miniature Circuit Breaker provides thermal-magnetic overcurrent protection for lower-current circuits. Its trip curve and breaking capacity must suit the Motor circuit and fault level.

\#### 3. MCCB

A Moulded Case Circuit Breaker handles higher ratings and often provides adjustable protection. It can protect feeders and larger Motor circuits when correctly coordinated.

\#### 4. Thermal Overload Relay

An overload relay models Motor heating from sustained Current and opens the control circuit. It does not replace short-circuit protection. Correct setting, trip class and phase-loss sensitivity matter.

\#### 5. RCCB

A Residual Current Circuit Breaker compares Currents in live conductors and trips when residual Current exceeds its threshold. It provides residual-current protection but normally does not provide overcurrent protection unless combined in an RCBO.

\#### 6. ELCB

The term Earth Leakage Circuit Breaker may be used broadly, but historically a Voltage-operated ELCB sensed Voltage on the protective-earth path and had limitations. Modern residual-current protection generally uses current-operated RCD/RCCB technology according to applicable rules.

\#### 7. Additional Motor Protection

\- Phase-failure and Phase-Sequence relay
\- Voltage unbalance relay
\- Under/over-Voltage relay
\- Winding and bearing temperature sensors
\- Locked-Rotor or stall protection
\- Earth-fault and differential protection for larger Motors
\- VFD electronic protection and process interlocks

\#### 8. Device Comparison

| Device | Main Protection | Important Limitation |
|---|---|---|
| Fuse | Short circuit/overcurrent by characteristic | One-time device; no adjustable reset |
| MCB | Lower-current thermal-magnetic protection | Breaking capacity/rating may be limited |
| MCCB | Higher-current adjustable protection | Requires correct setting and coordination |
| Overload relay | Sustained overload/phase-related heating | Not a short-circuit device |
| RCCB/RCD | Residual or earth-leakage Current | Usually no overload protection |
| Phase relay | Phase loss/sequence/unbalance | Does not clear fault Current itself |
| Temperature sensor | Direct thermal condition | Needs controller/trip circuit |

\#### 9. Coordination

Protection settings must allow normal starting while interrupting abnormal conditions before conductor, Motor or equipment damage. Follow Motor, starter, drive and applicable-code requirements.

\---

\### Real-Life Applications

A DOL Motor circuit may use an isolating short-circuit protective device, contactor and Thermal Overload Relay, plus earth-leakage or phase protection where required by the installation assessment.

\---

\### Key Takeaways

\- Fuse/MCB/MCCB and overload relay perform different jobs.
\- An overload relay is not short-circuit protection.
\- RCCB detects residual Current but usually not overload.
\- Modern current-operated residual protection differs from legacy Voltage-operated ELCB.
\- Protection must be selected and coordinated as a system.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Motors and Control Systems
\- \*\*Author\*\*: Frank D. Petruzella
\- \*\*Relevant Chapter\*\*: Motor branch circuits, overload and control protection
\- \*\*Supporting Text\*\*: IEC 60947 Series — Low-Voltage Switchgear and Controlgear — circuit-breakers, contactors and Motor starters

\---

\## Topic 15: Safety Precautions During Motor Operation and Maintenance

\### Definition

Motor safety consists of planned controls that prevent exposure to electrical, mechanical, thermal, pressure, chemical and unexpected-start hazards.

\---

\### Importance

Motors can restart automatically, retain electrical energy in drives, rotate from the load side and move hazardous machinery even when the main supply appears off.

\---

\### Main Concepts

\#### 1. Pre-Operation Safety

\- Confirm rated Voltage, frequency, phase and connection.
\- Verify guards, earthing, cooling and mounting.
\- Confirm load is safe to rotate.
\- Check protection settings and emergency-stop function.
\- Keep personnel clear before start.

\#### 2. Safe Isolation

Identify every energy source, stop equipment, isolate, apply required lockout/tagout, release stored energy and verify absence of Voltage using a correctly rated tester.

\#### 3. Multiple Energy Sources

Consider main supply, control supply, DC field, VFD DC Link, braking circuit, space heater, automatic transfer, generator backfeed, pressure, gravity, springs and rotating inertia.

\#### 4. VFD Safety

Input isolation does not immediately remove DC-Link Voltage. Wait the manufacturer-specified time, verify absence of Voltage and do not rely only on an indicator lamp.

\#### 5. Capacitor and Single-Phase Safety

Start and run Capacitors can retain charge. Use an approved discharge and verification procedure; never casually short terminals with a tool.

\#### 6. Mechanical Safety

Secure shafts and loads, control gravity and pressure, prevent unexpected rotation and restore coupling/belt/fan guards before operation.

\#### 7. Test Safety

Use instruments with suitable category, Voltage and Current ratings. Live testing should be performed only when justified, authorized and controlled by competent personnel.

\#### 8. Return to Service

Remove tools and temporary earths according to procedure, restore covers and guards, confirm personnel clearance, remove lockout under authorized rules and conduct a controlled test run.

\---

\### Real-Life Applications

A VFD-driven fan can windmill from airflow and energize the drive output while the input is isolated. Mechanical rotation and stored electrical energy must both be controlled.

\---

\### Key Takeaways

\- Isolation must cover every electrical and mechanical source.
\- Verify absence of Voltage; do not assume it.
\- VFDs and Capacitors retain stored energy.
\- Automatic restart and load-driven rotation are serious hazards.
\- Guards and protection must be restored before service.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electrical Safety Handbook
\- \*\*Author\*\*: John Cadick, Mary Capelli-Schellpfeffer and Dennis Neitzel
\- \*\*Relevant Chapter\*\*: Safe work practices, hazardous energy and electrical maintenance
\- \*\*Supporting Text\*\*: NFPA 70E — Standard for Electrical Safety in the Workplace — electrically safe work conditions

\---

\## Topic 16: Industrial Applications and Best Practices

\### Definition

Industrial best practice means selecting, installing, operating and maintaining the Motor-starting and speed-control system according to the load, supply, environment and lifecycle requirements.

\---

\### Importance

Correct engineering improves production, energy efficiency, equipment life, safety and maintainability.

\---

\### Main Concepts

\#### 1. Pump Applications

\- DOL for small fixed-speed pumps where permitted
\- Soft Starter for smooth fixed-speed start/stop
\- VFD for variable flow, pressure control and energy saving

Check minimum flow, pump curve, cavitation and water-hammer requirements.

\#### 2. Fan and Blower Applications

VFD control is often efficient because required Power falls strongly with speed for suitable centrifugal loads. Ensure Motor cooling at low speed.

\#### 3. Conveyor Applications

Controlled acceleration prevents belt slip and product movement. Constant-torque capability, braking, restart under load and coordination between drives matter.

\#### 4. Compressor Applications

Starting torque, unloading, minimum speed, lubrication and pressure limits must be coordinated. Not every compressor accepts unrestricted speed variation.

\#### 5. Crane and Hoist Applications

High starting torque, braking, load holding, duty cycle and fail-safe control are essential. Generic fan/pump settings are unsafe for hoisting.

\#### 6. Best-Practice Selection Table

| Application | Common Choice | Main Engineering Reason |
|---|---|---|
| Small fixed-speed pump | DOL | Simplicity if supply permits |
| Large fixed-speed pump | Soft Starter | Reduced inrush and hydraulic shock |
| Variable-flow pump/fan | VFD | Process control and energy saving |
| Light-start Delta Motor | Star-Delta | Lower Current at acceptable low torque |
| Heavy-start wound-Rotor load | Rotor Resistance/VFD solution | High controlled starting torque |
| Constant-speed high-Power load | Synchronous Motor system | Exact speed and reactive support |
| Hoist/crane | Application-rated drive and brake | Controlled torque and load safety |

\#### 7. Installation Best Practices

\- Verify Motor and load torque–speed data.
\- Perform supply fault-level and Voltage-drop checks.
\- Select cable, switchgear and protection together.
\- Follow electromagnetic-compatibility and earthing guidance.
\- Provide ventilation and environmental protection.
\- Commission rotation, ramps, limits and interlocks systematically.

\#### 8. Operational Best Practices

\- Record baseline Voltage, Current, speed, vibration and temperature.
\- Monitor actual load and energy use.
\- Investigate every abnormal trip.
\- Control parameter changes and keep backups.
\- Train operators and maintain updated drawings.

\#### 9. Maintenance Best Practices

Base maintenance intensity on asset criticality, environment, duty and condition trend. Keep essential spares and a documented contingency plan for critical Motors.

\---

\### Real-Life Applications

Replacing a throttled full-speed fan with a correctly engineered VFD system can reduce energy use, but success also requires low-speed cooling checks, harmonic/EMC consideration, proper cable installation and updated protection settings.

\---

\### Key Takeaways

\- Starting and control method must match load torque and process duty.
\- VFDs save energy mainly when the process benefits from lower speed.
\- Soft Starters suit smooth fixed-speed operation.
\- Protection, installation and maintenance must be engineered together.
\- Baseline data, documentation and training sustain reliability.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Electric Motors and Drives
\- \*\*Author\*\*: Austin Hughes and Bill Drury
\- \*\*Relevant Chapter\*\*: Industrial Motor-drive selection and applications
\- \*\*Supporting Text\*\*: Energy-Efficient Electric Motors and Their Applications — Howard E. Jordan — Motor application and energy management

\---

\# Chapter Summary

\- Motor starting must balance Current, torque, acceleration, supply and mechanical stress.
\- Positive accelerating torque is Tacc = Tm − TL.
\- DC Motors need Current limiting because Back EMF is zero at standstill.
\- DOL provides full starting Voltage, Current and available torque.
\- Star-Delta provides about one-third of DOL line Current and torque during starting.
\- Autotransformer starting provides selectable reduced Voltage.
\- Rotor-Resistance starting provides high controllable torque for Slip-Ring Motors.
\- Single-Phase Motors use auxiliary winding, Capacitor, shading or commutator starting.
\- DC-Motor speed depends on effective Armature Voltage and field Flux.
\- Induction-Motor speed is N = (120f/P)(1−s).
\- Synchronous-Motor speed changes primarily with frequency or pole number.
\- Soft Starters control Motor Voltage during start/stop but do not provide normal speed control.
\- VFDs control Voltage and frequency for smooth starting and continuous speed control.
\- Routine maintenance checks Current, temperature, vibration, cooling, bearings and connections.
\- Preventive maintenance follows a schedule; predictive maintenance follows condition trends.
\- Overheating, bearing failure, insulation failure, vibration, overload and phase failure require systematic diagnosis.
\- Fuse, MCB/MCCB, overload relay, RCCB and monitoring relays perform different protective functions.
\- Protection must allow normal starting while clearing abnormal conditions safely.
\- Safe maintenance controls main, control, stored electrical and mechanical energy.
\- Industrial best practice integrates Motor, starter/drive, load, supply, protection and lifecycle maintenance.

\---

\# What's Next?

In the next chapter, you will study Generation of Electrical Power, including generating-station principles, energy sources, power-plant types, major equipment and practical generation considerations.

These concepts will build on your understanding of Generators, Motors, drives, protection, maintenance and safe operation.

\---
