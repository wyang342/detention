Detention
===================
There's nothing like old fashioned mental conditioning.

In order to emphasize one of the most important rules in React, you will write/render it 100 times:

*"I will never mutate state or props directly"*

This means NOT doing this:
```javascript
this.state.count = 1
this.state.props = true
```

In class-based components, `state` should only be modified using the React Component's [setState](https://facebook.github.io/react/docs/react-component.html#setstate) method. In functional components, `state` should only be modified using the `useState` method.

__Create the App using Class Based Componenents then create the app using Functional Based Components to get used to using Class Based and Functional Based Componenets.__

Release 0 - Setup
-------------
* Use `create-react-app` to scaffold an app

Release 1 - Detention
-----------------
* Write "I will never mutate state or props directly" 100 times

Release 2 - Style
-------------
* Research CSS, and attempt to style the page to look like writing on a chalkboard (an idea called `skeuomorphic design`).

Hint
-----
* Investigate the Array object's fill and map functions - these will help you in your journey.
