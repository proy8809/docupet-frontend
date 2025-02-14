# DocuPet Coding Challenge - FrontEnd

## Prerequisistes

- Docker
- Docker Compose

## How To Run Me

Open a console, go to the docker directory, and execute this shell script

```shell
./up.sh
```

In order to shut the docker down, simply execute this shell script in the same directory:

```shell
./down.sh
```

## How To Use Me

Go to `http://localhost:3000` on your browser.

## Methodology

This application is structured in alignement with the principles of Atomic Design. Each component falls into one of these categories;

- Atoms: The smallest, indivisible units of the user interface
- Molecules: Composed of two or more atoms. At this level, user experience concerns specific to the application are being integrated.
- Organisms: Built from atoms, molecules and other organisms. They represent cohesive sections of the interface.

None of these different components interact with the pinia stores directly. This is to ensure their reusability across different contexts. Instead, state data is being passed to them via models, and their changes propagate to the root component. This philosophy not only keeps components loosely coupled with the state, but also regroups all of the user experience invariants at the same location, preventing cognitively costly indirections.

## Technologies Used

| Technology used  | Reason                    |
| ---------------- | ------------------------- |
| Vue.Js version 3 | Frontend framework        |
| Typescript       | Programming language      |
| PrimeVue         | Components library        |
| Tailwind         | Styling library           |
| Pinia            | State management          |
| vue-i18n         | Internationalization      |
| vue-router       | Navigation                |
| es-lint          | Linting                   |
| prettier         | Prettify code as you save |
