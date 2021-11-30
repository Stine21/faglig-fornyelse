<h1>Faglig Fornyelse - Gatsby</h1>

<h2>Start:</h2>

1. Download npm i -g gatsby-cli i en terminal, som gør så du kan bruge Gatsby globalt.

2. For at få Gatsby op og kører hurtigere kan man clone gatsby-starter-hello-world fra gatsbyjs.com.
(man kan også clone nogle der er mere inviklede end hallo word)

4. Når du har clonet den skal man ind i den nye mappe, jeg kaldte min for faglig-fornyelse.

5. Så skriver man cd faglig-fornyelse i terminalen også code . også i terminalen.

6. Hvis man har clonet hallo word, får man en masse mapper og filer. blandt andet src mappen med en pages mappe i, hvor der er en index.js (som er vores 'start side'), hvor det meste af vores kode kommer til at være lige som i en react app.

7. For at se siden i en browser skal du i terminalen skrive "gatsby develop" også vil den starte en localhost:8000 med mindre noget allerede kører på den server.

<h2>Sider:</h2>

(Det vil hjælpe at downloade ES7 React/Redux/GraphQL/React-Native snippets i VS Code)

1. Når man så laver en ny side, går man i pages mappen og laver en javascript fil med det navn siden skal have, i mit tilfælde "movies"

2. Hvis du gerne vil se din "movies" site, går du op i url'en og skriver så der står "localhost:8000/movies"

3. Man kan også lave en undermapper ved at lave en mappe indeni "pages" mappen, i mit tilfælde "people"

4. Hvis man så bare en index.js indeni "people" mappen, så kommer url'en til at være "localhost:8000/people"

5. Men hvis man gav den et navn fx. "blah", ligesom "movies", så ville den komme til at se sådan ud: "localhost:8000/people/blah"

<h2>404 side</h2>

1. Her laver du bare en fil ved navn 404.js indeni din pages mappe

<h2>Navbar</h2>

1. Lav en ny mappe i din src mappe "components" med en Navbar.js fil i.

2. Også kan du lave en Navbar med gatsbys Link component. 

<h2>Layout component</h2>
(Som går at alle de ting der skal være på alle siderne, kan vi sætte ind med kun et component)

1. Vi laver en Layout.js fil i component mappen.

2. vi starter med at importere Navbar

3. Den sætter vi så ind i et div tag med classname="layout"

4. vi laver også en anden div med classname="content" inden i layout-diven, hvor vores indhold for hver side kommer til st være

5. under content-diven men stadig indeni layout-diven, laver man en footer med et p tag, hvor man kan skrive sin copyright.

6. Måden man tilføjer Layout componentet er at indramme at de der skal returnes med et Layout tag.

7. Lige nu vil man så kun kunne se Navbaren og copyright teksten, ikke ens indhold

8. hvilket man gør ved at hente "children" som en prop indeni Layout component og udskrive det indeni content-diven

9. Så gør man bare som på trin 6 på alle ens sider (husk at importe Layout component)


<h2>Styling</h2>

1. Indeni src mappen, laver man en ny mappe ved navn "styles"

2. Også en fil ved navn global.css

3. Her i styler du så hvordan du synes at din generalle styling skal være. 

4. Så importer man global.css indeni i Layout componentet 

5. For at style bestemte sider bruger man css modules, den vil kun virke på det component hvor man henter det og ikke nogen af de andre.

6. Så for at lave et css module for start siden, laver vi en fil indeni styles mappen der hedder "home.module.css"

7. Her tilføjer du så nogle styles

8. Man bruger så modulet ved at importere det på siden det er lavet til, ved at skrive "import * as styles from '../styles/home.module.css'"

9. Man tilføjer så modulet ved at tilføje det til et tag ved at skrive: classname={styles.header}

10. Så kan man så også lave et css module til movie siden og people siden, på samme måde som før, bare med deres navne så styles.movies og styles.people.


