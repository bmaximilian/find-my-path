## 🧭  Find my Path
![Build and Pages Deploy](https://github.com/bmaximilian/find-my-path/workflows/Build%20and%20Pages%20Deploy/badge.svg)

A visualization of pathfinding algorithms using TypeScript.<br/>
I've built this application to learn more about pathfinding algorithms in a practical manner. The visualization in the browser is a nice way to figure out how these algorithms work.
You can access the application at [https://bmaximilian.github.io/find-my-path/](https://bmaximilian.github.io/find-my-path/). <br/>
I'd suggest to use *Google Chrome* or *Firefox*.

### 🎓  Supported algorithms
* [Dijkstra](https://github.com/bmaximilian/find-my-path/blob/master/src/algorithms/dijkstra.ts)
* [Maze generation with randomized depth first search](https://github.com/bmaximilian/find-my-path/blob/master/src/algorithms/maze/depth-first.ts)


### 🚢  Deployment
The application runs at GitHub Pages because a backend isn't required. <br/>
A CI pipeline, that runs with GitHub Actions builds the React application and pushes the build to a [separate branch (gh-pages)](https://github.com/bmaximilian/find-my-path/tree/gh-pages).

This workflow does not require any manual actions and lets the developers focus completely on the source code after it is set up once. <br/>
But a downside of this workflow is that a separate commit with build assets is pushed to a branch that has nothing in common with the default branch and will never be merged,
which pollutes the git history a bit. But it is required because GitHub Pages is serving the content out of this branch and we don't want to include build assets in our default branch which would pollute the repository even more.

### 🚧  Caveats
There were some performance issues by updating the CSS classes the [React](https://reactjs.org/) way. I needed to set the CSS classes of the table cells
using [`document.getElementById`](https://github.com/bmaximilian/find-my-path/blob/08b5690820fc35bc753888bf3143b0193560e0da/src/components/Executor.tsx#L19-L32)
instead of deciding based on state and props which class to set in the node.
State manipulation during the search animation is performance heavy because the cells need to be updated one by one.<br/>
Replacing the grid after the algorithm is not so performance heavy and is done when generating the maze. With that mechanism, a performant step-by-step animation of the algorithm is not possible.

In this app is [redux](https://redux.js.org/) used to manage the application state - the state of the table. Using redux is not really necessary for this application.
I chose to use redux to easily get a single source of truth state management 
and be able to detach the grid from the state and props of the components that might not need this state.
This should optimize rendering performance by [avoiding re-rendering the whole table when a single node changes](https://github.com/bmaximilian/find-my-path/blob/08b5690820fc35bc753888bf3143b0193560e0da/src/components/Grid.tsx#L48-L57).
The nodes can [receive their needed rendering props](https://github.com/bmaximilian/find-my-path/blob/08b5690820fc35bc753888bf3143b0193560e0da/src/components/Node.tsx#L32-L36) directly from redux.

[Material-UI](https://material-ui.com/) is used as UI component framework to outsource most of the styling work.
