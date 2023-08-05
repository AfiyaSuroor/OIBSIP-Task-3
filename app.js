let celciusInput = document.querySelector('#celcius > input')
       let FarenheitInput = document.querySelector('#Farenheit > input')
       let KelvinInput = document.querySelector('#Kelvin > input')

       let btn = document.querySelector('.button button')

       function roundNumber(number) {
        return Math.round(number*100)/100
        
       }
       celciusInput.addEventListener('input', function(){
        let cTemp = parseFloat(celciusInput.value)
        let FTemp = (cTemp*(9/5)) + 32
        let KTemp = cTemp + 273.15

        FarenheitInput.value = roundNumber(FTemp)
        KelvinInput.value = roundNumber(KTemp)
       })
       FarenheitInput.addEventListener('input', function(){
        let FTemp = parseFloat(FarenheitInput.value)
        let cTemp = (FTemp-32) * (5/9)
        let KTemp = (FTemp -32)*(5/9) + 273.15

        celciusInput.value = roundNumber(cTemp)
        KelvinInput.value = roundNumber(KTemp)
       })
       
       KelvinInput.addEventListener('input', function(){
        let kTemp = parseFloat(KelvinInput.value)
        let cTemp = (kTemp - 273.15)
        let FTemp = (kTemp- 273.15)*(9/5) + 32

        celciusInput.value = roundNumber(cTemp)
        FarenheitInput.value = roundNumber(FTemp)
       })

       btn.addEventListener('click', ()=>{
        celciusInput.value = ""
        FarenheitInput.value = ""
        KelvinInput.value = ""
       })