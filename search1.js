document.querySelector("#search-btn").addEventListener("click",function(){
    
    let searchText=document.querySelector("#search").value;
    // console.log(searchText);
    let url=`https://api.openbrewerydb.org/breweries?by_name=${searchText}`;
    fetchDataAndShowData(url);
});


async function fetchDataAndShowData(url){
    let res=await fetch(url);
    let result=await res.json();

    // console.log(result);
    document.querySelector("#container").innerHTML=`<div id="data-container">
    <table>
       <tr>
           <th>Name</th>
           <th>Address</th>
           <th>City</th>
           <th>State</th>
           <th>Phone</th>
           <th>website_Url</th>
       </tr> 
    </table>

</div>`;
    displayData(result);


}



function displayData(data){
    data.forEach(breweryData => {
        let {id,name,address_1,city,state,phone,website_url}=breweryData;

        let row= document.createElement('tr');

        let _name=document.createElement('td');
        _name.textContent=name;

        let _address_1 = document.createElement('td');
        _address_1.textContent=address_1;

        let _city=document.createElement('td');
        _city.textContent=city;

        let _state=document.createElement('td');
        _state.textContent=state;

        let _phone=document.createElement('td');
        _phone.textContent=phone;

        let _website_url=document.createElement('td');
        _website_url.textContent=website_url;

        let moreDetail=document.createElement("button");
       
        moreDetail.textContent="More Details";
        moreDetail.setAttribute("id","more-detail");
        moreDetail.addEventListener("click",function(){
            localStorage.setItem("id",id);
            location.href="b.html";
        });        
       
        row.append(_name,_address_1,_city,_state,_phone, _website_url,moreDetail);
        document.querySelector("table").append(row);


    });
}