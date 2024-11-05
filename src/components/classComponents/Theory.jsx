

/*
    Every component has 3 main life cycle methods
    These are used to monitor and manipulate 
    They are 
    1. Mounting
    2. Updating
    3.UnMounting

    Mounting : Mounting means putting an element in DOM
               React has 4 built in methods that gets called while mounting a component
                1.constructor() - called by react everytime you make a component
                2.getDerivedStateFromProps() - called right before the element in DOM
                3.render() - It is the method actually outputs the HTML to DOM
                4.componentDidMount() - called after the component is rendered

    Updating : The next phase in lifecycle is when component is updated ie; changes in the state or props
               React has 5 built in methods that gets called when component is updated
                1.getDerivedStateFromProps() - static method that is called right before rendering on both initial mount and any updates
                2.shouldComponentUpdate() - This method lets you control whether a component should re-render or not . Returns fasle prevents component from updating
                3.render() - The only required method in React class component responsible for rendering JSX that represents component structure 
                4.getSnapshotBeforeUpdate() - It is called right before DOM is updated , this method captures information that can be used after the update
                5.componentDidUpdate() - It is called immediately after the component's DOM  is updated. It provides place to perform side effects. 












*/
