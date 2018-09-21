function windowOne(event){ 
            var w = window.open("", null, "height=500,width=500");
            
            if (w.document.getElementById("paragraphOne") != null) { //Checks to make sure that there is not a window open.
                alert("You need to exit out of the original window before looking at another city.");
                return;
            }
            
            w.document.body.style.marginLeft = "20%";
            w.document.body.style.backgroundColor = "#70A8E8";
            w.document.body.style.color = "black"; 
            
            var newHeader = w.document.createElement("H1");
            var headerText = w.document.createTextNode("Charleston South Carolina:"); 
            newHeader.appendChild(headerText);
            w.document.body.appendChild(newHeader);
                
            var newParagraph = w.document.createElement("P");
            newParagraph.setAttribute("id", "paragraphOne");
            w.document.body.appendChild(newParagraph);
            
            var paragraphToEdit = w.document.getElementById("paragraphOne");
            var innerParagraph = "&nbsp &nbsp Charleston, the South Carolina port city founded in 1670, is defined by its cobblestone streets,</br>"; 
            innerParagraph += " horse-drawn carriages and pastel antebellum houses, particularly in the elegant French Quarter and</br>";
            innerParagraph += " Battery districts. The Battery promenade and Waterfront Park both overlook Charleston Harbor, while</br>";
            innerParagraph += " Fort Sumter, a federal stronghold where the first shots of the Civil War rang out, lies across the</br>";
            innerParagraph += " water.</br>";
            innerParagraph += "<strong>Note: The information listed here an be found on the quick facts section of google maps. Also, </br> the link below takes you</strong>";
            innerParagraph += " <strong>to: https://www.charlestoncvb.com/things-to-see-do/</strong>";
            paragraphToEdit.innerHTML = innerParagraph;
            paragraphToEdit.style.fontSize = "20px";
            
            var newDiv = w.document.createElement("DIV");
            w.document.body.appendChild(newDiv);
            var innerLink = '<a href="https://www.charlestoncvb.com/things-to-see-do/">Plan a trip!</a>'; 
            newDiv.innerHTML = innerLink;
}

function windowTwo(event){
            var w = window.open("", null, "height=500,width=500");
            
            if (w.document.getElementById("paragraphOne") != null) {
                alert("You need to exit out of the original window before looking at another city.");
                return;
            }
            
            w.document.body.style.marginLeft = "20%";
            w.document.body.style.backgroundColor = "#70A8E8";
            w.document.body.style.color = "black"; 
            
            var newHeader = w.document.createElement("H1");
            var headerText = w.document.createTextNode("Chicago, Illinois"); 
            newHeader.appendChild(headerText);
            w.document.body.appendChild(newHeader);
            
            var newParagraph = w.document.createElement("P");
            newParagraph.setAttribute("id", "paragraphOne");
            w.document.body.appendChild(newParagraph);
            
            var paragraphToEdit = w.document.getElementById("paragraphOne");
            var innerParagraph = "&nbsp &nbsp Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold</br> architecture, ";
            innerParagraph += " it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft.</br> Willis  Tower (formerly the ";
            innerParagraph += " Sears Tower) and the neo-Gothic Tribune Tower. The city is also renowned</br> for its museums, including the Art Institute of ";
            innerParagraph += "Chicago with its noted Impressionist and</br> Post-Impressionist works.";
            innerParagraph += "</br><strong>Note: The information listed here an be found on the quick facts section of google maps. Also,</br> the link below takes you </strong>";
            innerParagraph += "<strong>to: https://www.choosechicago.com/plan-your-trip/";
            paragraphToEdit.innerHTML = innerParagraph;
            paragraphToEdit.style.fontSize = "20px";
            
            var newDiv = w.document.createElement("DIV");
            w.document.body.appendChild(newDiv);
            var innerLink = '<a href="https://www.choosechicago.com/plan-your-trip/">Plan a trip!</a>'; 
            newDiv.innerHTML = innerLink;
}

function windowThree(event){
            var w = window.open("", null, "height=500,width=500");
            
            if (w.document.getElementById("paragraphOne") != null) {
                alert("You need to exit out of the original window before looking at another city.");
                return;
            }
            
            w.document.body.style.marginLeft = "20%";
            w.document.body.style.backgroundColor = "#70A8E8";
            w.document.body.style.color = "black"; 
            
            var newHeader = w.document.createElement("H1");
            var headerText = w.document.createTextNode("Washington D.C. :"); 
            newHeader.appendChild(headerText);
            w.document.body.appendChild(newHeader);
            
            var newParagraph = w.document.createElement("P");
            newParagraph.setAttribute("id", "paragraphOne");
            w.document.body.appendChild(newParagraph);
            
            var paragraphToEdit = w.document.getElementById("paragraphOne");
            var innerParagraph = "&nbsp &nbsp Washington, DC, the U.S. capital, is a compact city on the Potomac River, bordering the states"; 
            innerParagraph += " of Maryland and Virginia.</br> It's defined by imposing neoclassical monuments and buildings - including the iconic";
            innerParagraph += " ones that house the federal government's</br> 3 branches: the Capitol, White House and Supreme";
            innerParagraph += "Court. It's also home to iconic museums and performing-arts venues such as</br> the Kennedy Center.</br>";
            innerParagraph += "<strong>Note: The information listed here an be found on the quick facts section of google maps. Also, the link </br>below takes you</strong>";
            innerParagraph += "<strong> to: https://freetoursbyfoot.com/visiting-washington-dc-1-2-3-day-itineraries/</strong>";
            paragraphToEdit.innerHTML = innerParagraph;
            paragraphToEdit.style.fontSize = "20px";
            
            var newDiv = w.document.createElement("DIV");
            w.document.body.appendChild(newDiv);
            var innerLink = '<a href="https://freetoursbyfoot.com/visiting-washington-dc-1-2-3-day-itineraries/">Plan a trip!</a>'; 
            newDiv.innerHTML = innerLink;
}

function windowFour(event){
            var w = window.open("", null, "height=500,width=500");
            
            if (w.document.getElementById("paragraphOne") != null) {
                alert("You need to exit out of the original window before looking at another city.");
                return;
            }
            
            w.document.body.style.marginLeft = "20%";
            w.document.body.style.backgroundColor = "#70A8E8";
            w.document.body.style.color = "black"; 
            
            var newHeader = w.document.createElement("H1");
            var headerText = w.document.createTextNode("Las Vegas:"); 
            newHeader.appendChild(headerText);
            w.document.body.appendChild(newHeader);
            
            var newParagraph = w.document.createElement("P");
            newParagraph.setAttribute("id", "paragraphOne");
            w.document.body.appendChild(newParagraph);
            
            var paragraphToEdit = w.document.getElementById("paragraphOne");
            var innerParagraph = "&nbsp &nbsp Las Vegas, in Nevada's Mojave Desert, is a resort city famed for its vibrant nightlife, centered around"; 
            innerParagraph += " 24-hour </br> casinos and other entertainment options. Its main street and focal point is the Strip, just over 4 miles long.";
            innerParagraph += " This </br> boulevard is home to themed hotels with elaborate displays such as fountains synchronized to music as well as </br>";
            innerParagraph += " replicas of an Egyptian pyramid, the Venetian Grand Canal, and the Eiffel Tower. </br>";
            innerParagraph += "<strong>Note: The information listed here an be found on the quick facts section of google maps. Also,</br> the link below takes you</strong>";
            innerParagraph += "<strong> to: https://www.visitlasvegas.com/trip-planning/first-trip-to-vegas/";
            paragraphToEdit.innerHTML = innerParagraph;
            paragraphToEdit.style.fontSize = "20px";
            
            var newDiv = w.document.createElement("DIV");
            w.document.body.appendChild(newDiv);
            var innerLink = '<a href="https://www.visitlasvegas.com/trip-planning/first-trip-to-vegas/">Plan a trip!</a>'; 
            newDiv.innerHTML = innerLink;
}

function windowFive(event){
            var w = window.open("", null, "height=500,width=500");
            
            if (w.document.getElementById("paragraphOne") != null) {
                alert("You need to exit out of the original window before looking at another city.");
                return;
            }
            
            w.document.body.style.marginLeft = "20%";
            w.document.body.style.backgroundColor = "#70A8E8";
            w.document.body.style.color = "black"; 
            
            var newHeader = w.document.createElement("H1");
            var headerText = w.document.createTextNode("New York City:"); 
            newHeader.appendChild(headerText);
            w.document.body.appendChild(newHeader);
            
            var newParagraph = w.document.createElement("P");
            newParagraph.setAttribute("id", "paragraphOne");
            w.document.body.appendChild(newParagraph);
            
            var paragraphToEdit = w.document.getElementById("paragraphOne");
            var innerParagraph = "&nbsp &nbsp New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean.</br>"; 
            innerParagraph += " At its core is Manhattan, a densely populated borough that's among the world's major commercial,</br>";
            innerParagraph += " financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building </br>";
            innerParagraph += "and sprawling  Central Park. Broadway theater is staged in neon-lit Times Square.</br>";
            innerParagraph += "<strong>Note: The information listed here an be found on the quick facts section of google maps. Also,</br> the link below takes you</strong>";
            innerParagraph += "<strong> to: https://www.nycgo.com/plan-your-trip</strong>";
            paragraphToEdit.innerHTML = innerParagraph;
            paragraphToEdit.style.fontSize = "20px";
            
            var newDiv = w.document.createElement("DIV");
            w.document.body.appendChild(newDiv);
            var innerLink = '<a href="https://www.nycgo.com/plan-your-trip">Plan a trip!</a>'; //Edit here
            newDiv.innerHTML = innerLink;
}

function windowSix(event){
            var w = window.open("", null, "height=500,width=500");
            
            if (w.document.getElementById("paragraphOne") != null) { 
                alert("You need to exit out of the original window before looking at another city.");
                return;
            }
            
            w.document.body.style.marginLeft = "20%";
            w.document.body.style.backgroundColor = "#70A8E8";
            w.document.body.style.color = "black"; 
            
            var newHeader = w.document.createElement("H1");
            var headerText = w.document.createTextNode("San Francisco: "); 
            newHeader.appendChild(headerText);
            w.document.body.appendChild(newHeader);
            
            var newParagraph = w.document.createElement("P");
            newParagraph.setAttribute("id", "paragraphOne");
            w.document.body.appendChild(newParagraph);
            
            var paragraphToEdit = w.document.getElementById("paragraphOne");
            var innerParagraph = "&nbsp &nbsp San Francisco, in northern California, is a hilly city on the tip of a peninsula surrounded</br>"; 
            innerParagraph += " by the Pacific Ocean and San Francisco Bay. It's known for its year-round fog, iconic Golden </br>";
            innerParagraph += " Gate Bridge, cable cars and colorful Victorian houses. The Financial District'sTransamerica Pyrami </br>";
            innerParagraph += "is its most distinctive skyscraper. In the bay sits Alcatraz Island, site of the notorious former prison.</br>";
            innerParagraph += "<strong>Note: The information listed here an be found on the quick facts section of google maps. Also,</br> the link below takes you</strong>";
            innerParagraph += "<strong> to: http://www.sftravel.com/plan-your-trip</strong>";
            paragraphToEdit.innerHTML = innerParagraph;
            paragraphToEdit.style.fontSize = "20px";
            
            var newDiv = w.document.createElement("DIV");
            w.document.body.appendChild(newDiv);
            var innerLink = '<a href="http://www.sftravel.com/plan-your-trip">Plan a trip!</a>'; //Edit here
            newDiv.innerHTML = innerLink;
}

function windowSeven(event){
            var w = window.open("", null, "height=500,width=500");
            
            if (w.document.getElementById("paragraphOne") != null) {
                alert("You need to exit out of the original window before looking at another city.");
                return;
            }
            
            w.document.body.style.marginLeft = "20%";
            w.document.body.style.backgroundColor = "#70A8E8";
            w.document.body.style.color = "black"; 
            
            var newHeader = w.document.createElement("H1");
            var headerText = w.document.createTextNode("Seattle, Washington: "); 
            newHeader.appendChild(headerText);
            w.document.body.appendChild(newHeader);
            
            var newParagraph = w.document.createElement("P");
            newParagraph.setAttribute("id", "paragraphOne");
            w.document.body.appendChild(newParagraph);
            
            var paragraphToEdit = w.document.getElementById("paragraphOne");
            var innerParagraph = "&nbsp &nbsp Seattle, a city on Puget Sound in the Pacific Northwest, is surrounded by water, mountains and</br>"; 
            innerParagraph += " evergreen forests, and contains thousands of acres of parkland. Washington State's largest city, it's</br>";
            innerParagraph += " home to a large tech industry, with Microsoft and Amazon headquartered in its metropolitan area.</br>";
            innerParagraph += " The futuristic Space Needle, a 1962 World's Fair legacy, is its most iconic landmark.</br>";
            innerParagraph += "<strong>Note: The information listed here an be found on the quick facts section of google maps. Also,</br> the link below takes you</strong>";
            innerParagraph += "<strong> to: https://www.visitseattle.org/</strong>";
            paragraphToEdit.innerHTML = innerParagraph;
            paragraphToEdit.style.fontSize = "20px";
            
            var newDiv = w.document.createElement("DIV");
            w.document.body.appendChild(newDiv);
            var innerLink = '<a href="https://www.visitseattle.org/">Plan a trip!</a>'; //Edit here
            newDiv.innerHTML = innerLink;
}