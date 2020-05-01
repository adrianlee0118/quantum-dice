# About
Use remote quantum computers from IBM to generate a sequence of numbers that is ostensibly 'truely random' by virtue of the fact that knowing
the underlying random number generation algorithm does not enable one to predict the sequence of numbers with success.

Cache the sequence of numbers and use it to perform dice rolls, iteratively retrieving numbers and mathematically adjusting the result 
for different dice sizes.

A maximum possible sample size (IBMQ's one-sitting maximum is 8192 shots of a given analysis) is used to reduce statistical error and ensure
as uniform a distribution of all potential results as possible.

# Requirements
- Python3
- Anaconda3
- Qiskit

# Limitations
The web application uses a previously generated sequence of 8192 random numbers between 1 and 32 to generate random numbers as requested
by the user through a browser. If more than 8000 rolls are performed in a single session or the same set of numbers is used too often, the
'randomness' of the results will be negated--the Python scripts should be run every now and again with a new set of 8192 numbers input to
the .js file to maintain the integrity of the dice roll's randomness.

# Thanks to
- IBM Quantum Computing for use of IBM Q remote systems and simulators
- Roll20 for inspiration to seek out Quantum technologies for dice rolls
