//1 fin the unique items in the array

let values=["green","green","red","red","yellow","pink","pink","yellow"];
let arr=values;
function unique (arr){
var unique=values.filter((x,i,a)=>a.indexOf(x)==i)
 return unique;
 

}

console.log("unique values are",unique(arr));




//write a function which camelizes input word


function camelize(str ) 
			{			
				var str1 = str.split('-');
				for(var i=0; i<str1.length; i++)
				{
					if ( i == 0 ) 
					continue;
					var  str2=  str1[i].split("");
					str2[0] = str1[i].charAt(0).toUpperCase();
					str1[i] = str2.join("");
				}
			str = str1.join("");
				return str;
			}      			
			
		
			console.log( camelize("background-color-") );
				
		 
			console.log( "list-style-image" );
			
			console.log(camelize("-webkit-transition"));



//3.write a function which returns an array that contains all number more than or equal to 150

let values=[1,33,99,50,100,150,60,99,1000,999,0,-1,10];
    function greater(values) {
      return values.filter(values=>values>=150)
  
      
    }
console.log(greater(values));


//4.Given the following array of objects called 'users', write a function which creates a new array that contains objects in the following structure



let raksha = { name: "Raksha", surname: "Sharma", age: 28 };
let srinivas = { name: "Srinivas", surname: "Iyengar", age: 30 };
let usha = { name: "Usha", surname: "Janardhana", age: 54 };

let users = [ raksha, srinivas, usha ];


function mapped()
{
  let mappedUsers=users.map((value,index)=>{return{fullName:value.name+value.surname,id:index+1}})
 return console.log('usersMapped =',mappedUsers);
}
console.log(mapped());


//5.Destructure the following object to extract firstname and the 'second' likes item


const user = { person: { employee: { firstname: "Rahul" }, likes: ["Cycling", "Hiking", "Driving"] } }
console.log(user.person.employee.firstname);
console.log(user.person.likes[1]);