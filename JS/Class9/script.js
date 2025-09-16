// DOM --> Document Object Model

    // let newele = document.getElementById("demo");

    // newele.innerText = "Hi, Good evening"
    // newele.innerHTML = "<a href='#'>Welcome</a>"

    // let ele = document.createElement("p")

    // ele.innerText =
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint earum asperiores quibusdam nam, enim adipisci totam numquam eaque optio doloribus fuga animi tempore nostrum a porro ab, sed sapiente necessitatibus?";

    // ele.style.color = "orange"
    // ele.style.fontSize = "2em"

    // document.body.append(ele)

// Event Listeners

    // function demo(){
    //     // alert("Hiii....!")
    //     console.log("Hello");
    // }

    function handleChanges(event){
        let temp = event.target.value

        document.getElementById("sample").innerText = temp
    }