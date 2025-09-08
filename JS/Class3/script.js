// Operators:

    // Comparison Operators   --> Boolean (true or false)
        // (==, ===, !=, !==, >, >=, <, <=)

            // let age = 18
            // let result

            // result = (age == 18)
            // result = (age === 18)
            // result = (age != 18)
            // result = (age !== 18)
            // result = (age > 18)
            // result = (age >= 18)
            // result = (age < 18)
            // result = (age <= 18)

            // console.log(result);

    // Logical Operators
        // (&&, ||, !)

        // &&

            // (true)  && (true)  --> true
            // (true)  && (false) --> false
            // (false) && (true)  --> false
            // (false) && (false) --> false

        // ||

            // (true)  || (true)  --> true
            // (true)  || (false) --> true
            // (false) || (true)  --> true
            // (false) || (false) --> false

            // let age = 16
            // let result

            // // result = (age >= 18) && (age <= 30)
            // result = !(age >= 18 || age <= 30)

            // console.log(result);
    
    // Ternary Operator --> () ? "" : ""

        // let age = 21
        // let result

        // result = (age >= 18) ? "Eligible for voting" : "Not Eligible"

        // console.log(result);


// Control Statements

    // 1. Conditional statements
            // if

                // let age = 21
                // let result

                // if(age >= 18){
                //     console.log("Eligible for voting");
                // }        

            // if else

                // let age = 16;
                // let result;

                // if (age >= 18) {
                //   console.log("Eligible for voting");
                // }else{
                //     console.log("not Eligible");
                // }

            // if else if
             let age = 18;
             let result;

             if (age > 18) {
               console.log("Eligible for voting");
             }else if(age == 18){
                console.log("Partially eligible");
             } else {
               console.log("not Eligible");
             }

            // switch case

    // 2. Looping statements
            // for
            // while
            // do...while
    
    // 3. Jumping statements
            // break
            // continue