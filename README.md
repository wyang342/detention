Dentention
===================
There's nothing like old fashioned mental conditioning.  

In order to emphasize one of the most important rules in React, you will write/render it 100 times:

*"I will never mutate state or props directly"*

In case you don't remember, this means setting values on state or props directly.  Example:

    this.state.count = 1;
    this.state.props = true;

State should only be modified using the React Component's [setState](https://facebook.github.io/react/docs/react-component.html#setstate) method.  Props should never be modified from inside a component - the data passed into the component via props should be modified via a higher order component - one up the component tree.

**In React, data flows down.**

Primary Objectives
-------------

 1. Use create-react-app to scaffold an app within this directory.
 2. Print the above text 100 times.

Secondary Objectives
-------------

 1. Research CSS, and attempt to style the page to look like writing on a chalkboard (an idea called skeuomorphic design).  

A few hints:

 - Investigate the Array object's fill and map functions - these will help you in your journey.
