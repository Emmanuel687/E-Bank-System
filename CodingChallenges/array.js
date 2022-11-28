function position(letter){
    //Write your own Code!
      let lettersArr = letter.split(" ");
      let indexs = lettersArr.forEach((index => `Position of alphabet: ${index+1}`));
      console.log(indexs)
     }

     position(`HelloWorld`)