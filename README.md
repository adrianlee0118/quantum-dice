## About
This is a (yet another) computer dice roll app that in addition to including dice roll add-ons typical of Dungeons and Dragons aims to provide truly random rolls to the user for a range of dice sizes. True randomness is accomplished to a degree by doing the following:

1. Using remote quantum computers from IBM to generate a sequence of numbers that is ostensibly 'truely random' (you can do a cursory confirmation of this by virtue of the fact that knowing the underlying random number generation algorithm does not enable one to predict the sequence of numbers)
2. Caching the sequence of numbers and using it to perform dice rolls, iteratively retrieving numbers and mathematically adjusting the result for different dice sizes.

Try the app at [www.adrianlee0118.com/projects/quantum_dice](https://www.adrianlee0118.com/projects/quantum_dice).

Note: A maximum possible sample size (IBMQ's one-sitting maximum is 8,192 shots of a given analysis at the time of this writing) is used to reduce statistical error and ensure as uniform a frequency distribution of all potential results as possible. The full analysis can be found at the blog post [here](https://www.adrianlee0118.com/blog) (search for the heading "Randomness")

## Usage
1. Run Python scripts on desktop or in Jupyter notebook to produce random number sequences
2. Paste random number sequences into dice_data.js
3. Run Flask app to render HTML page and use the dice roller
4. If the dice is rolled more than ~8000 times repeat steps 1 and 2

## Directories
- Home: Contains the independent Python scripts used to generate random numbers sequences on the Desktop (QASM_simulator.py, quantum_computer.py) and the sample flask app (app.py) that is used for test rendering of the web application
- Templates: HTML file for the web application which can be rendered along with the javascript files
- Static: Contains styles and javascript files to govern the appearance and behavior of the HTML page, assets/ also contains project clipart. The figures/ directory includes some analysis tools that were used to assess the validity of the number sequences produced

## Limitations
The web application uses a previously generated sequence of 8,192 random numbers between 1 and 32 to produce random numbers as requested
by the user through a browser. If more than 8000 rolls are performed on the app in a single session or the same given array of numbers is used too many times, the 'randomness' of the results could be negated--the Python script(s) should be run every now and again with the new set of 8192 numbers produced copied and used to replace the contents of the array in the dice_data.js file to avoid re-use of segments of the sequence and thereby maintain the integrity of the dice roll's randomness (the QASM_simulator.py script at 8,192 shots tends to produce a more uniform distribution of numbers by frequency than the quantum_computer.py script, so it's recommended that the former is used to periodically produce a replacement for the JavaScript array).

## Thanks to
- IBM Quantum Computing and the [IBM Quantum Experience](https://www.ibm.com/quantum-computing/technology/experience/?p1=Search&p4=p50385964705&p5=e&cm_mmc=Search_Google-_-1S_1S-_-WW_NA-_-ibm%20quantum%20computing_e&cm_mmca7=71700000061253574&cm_mmca8=aud-384354108630%3Akwd-318569543695&cm_mmca9=Cj0KCQjwka_1BRCPARIsAMlUmEpw0b-3l_R2TWhfp6AB7Ej5xVjozUbz1b0sIhK8LWD2izNsHxhSulcaAoX_EALw_wcB&cm_mmca10=427831691189&cm_mmca11=e&gclid=Cj0KCQjwka_1BRCPARIsAMlUmEpw0b-3l_R2TWhfp6AB7Ej5xVjozUbz1b0sIhK8LWD2izNsHxhSulcaAoX_EALw_wcB&gclsrc=aw.ds) for use of IBM Q remote systems and simulators
- [Roll20](https://roll20.net/) for [inspiration](https://wiki.roll20.net/QuantumRoll) to seek out Quantum computing technologies for dice rolls and for their extensive [API](https://github.com/Roll20/roll20-api-scripts)
- Abe Asfaw for his informative tutorials on using IBM Quantum computing
- [Game Icons](https://game-icons.net/tags/dice.html) for their dice icons
