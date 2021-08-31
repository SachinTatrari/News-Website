console.log("welcome to the website");
//   21d9ca460e1d47189e44b898c874e6fd
// Initialise the news parameters.
let country = "in";
let apiKey = '21d9ca460e1d47189e44b898c874e6fd';
// Greab a news container
let newsAccordion = document.getElementById("newsAccordion");
// Create an AJAX GET request
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&apiKey=21d9ca460e1d47189e44b898c874e6fd`, true)
// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        //    console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index){
            // console.log(element,index);
         
            
           
            let news = ` <div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                   <b>Breaking News :${index+1}> </b> ${element['title']}
                                </button>
                            </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                                data-bs-parent="#newsAccordion">
                                <div class="accordion-body"> ${element["description"]} <a href=${element.url}>Read More</a> </div>
                                  
                            </div>
                        </div>`
                        
         newsHtml += news;               
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("some error occured")
    }
}
xhr.send();

