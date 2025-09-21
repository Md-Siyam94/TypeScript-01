# What are some differences between interfaces and types in TypeScript?

Ans: Interfaces are mainly used to describe the structure of objects or classes. They support declaration merging, meaning you can define the same interface multiple times and TypeScript will combine them. Interfaces are best when you expect your structure to be extended or implemented in classes.

Types are more flexible. They can describe not only object structures but also primitives, unions, intersections, and tuples. Unlike interfaces, types cannot merge when declared multiple times, but you can combine them using intersections (&). Types are powerful for advanced scenarios like conditional or mapped types.

# How does TypeScript help in improving code quality and project maintainability?

Ans: TypeScript helps improve code quality and project maintainability by providing type safety, which allows errors to be detected during development rather than at runtime. It makes the code more readable and self-explanatory because types clearly describe the kind of data that is expected. With strong support for modern IDEs, developers benefit from features like autocompletion and real-time error checking, which speeds up development and reduces mistakes. TypeScript also makes refactoring safer, as changes such as renaming or restructuring do not silently break the project. In larger applications, it ensures consistency across different parts of the codebase, making it easier to scale and manage. Overall, TypeScript reduces runtime bugs and creates more reliable, organized, and maintainable software.