/*Question 1 */

(a,b) => {return a - b;
}

/*Question 2 */



const baseUrl = "https://api.rawg.io/api/games?genres=sports";
fetch (baseUrl)
 .then(function(response){
     console.dir(response);
 });

 fetch(baseUrl)
  .then(function(response){
      return response.json();
  })
   .then (function(json){
       console.dir(json);
   })
   .catch(function(error){
       console.dir(error);
   });

   /*Question 3 */
   const word = "These cats are outrageous";
   const res = word.replace(/cats/, "giraffes");
  
  