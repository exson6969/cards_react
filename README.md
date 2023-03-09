# Card Article

A single page responsive website created for showcase the data avaliabe thorough the API.

## Texh Stack

* React.js + vite
* Tailwind css
## File structure

src/<br>
<p>&emsp; components/</p>
   <p>&emsp; &emsp; Card.jsx</p>
   <p>&emsp; &emsp; CardContainer.jsx</p> 
   <p>&emsp; App.jsx</p>     
<p>&emsp; index.css</p> 
<p>&emsp; main.jsx</p>  

* In card.jsx the card component is created which can be called multiple times to reduce the effort of building cards for each articel.

* CardContainer.jsx has the function to call API using axios package and dynmically create cards as per the number of cards required for the api considering "id" as key.

* Additionaly I have used "dangerouslySetInnerHTML" DOM element to change the HTML content on request to normal text.