import {spawn} from "child_process"

const runPy = async (filePath, args) => {

    const pythonProcess = spawn('D:\\Anaconda\\envs\\myenv\\python',[filePath, ...args])

    const result = await new Promise((resolve, reject) => {
        
        let output;
        pythonProcess.stdout.on('data', (data) => {

            output = data.toString().substring(0, data.length - 2)
            // console.log(`Data recieved : ${output}`)

        })
    
        pythonProcess.stderr.on('data', (data) => {
            console.log(`[python] Error occured: ${data}`)
            reject(`Error occured in ${filePath}`)
        })

        pythonProcess.on('exit', (code) => {
            console.log(`Child process exited with code ${code}`)
            resolve(output)
        })
    })
    return result

}


const displayProductPage = (req, res) => {
    console.log("inside display")
    res.render('D:\\softwareProject\\Code\\MedicSage\\views\\newProduct.ejs')
    // res.sendFile("D:\\softwareProject\\Code\\MedicSage\\main-page\\index.html")
}

const displayHomePage = (req, res) => {
    // res.sendFile('D:\\softwareProject\\Code\\MedicSage\\public\\html\\homepage.html')
    res.sendFile("D:\\softwareProject\\Code\\MedicSage\\public\\html\\index.html")
}

const sympSuggestions = async (req, res) => {
    const userSymptoms = req.body.userSymps;

    try{

        const result = await runPy('E:\\SRM\\MedicSage\\back-end\\python\\suggestSym.py', [userSymptoms])
        const suggestedSymptoms = result.substring(1, result.length - 1).split(', ').map( sym => sym.substring(1, sym.length - 1) )
        res.json({ suggestedSymptoms })

    }catch(err){
        console.log(`Error: ${err}`)
    }
}


const predDisease = async (req, res) => {
    const userSymptoms = req.body.userSymps;
    console.log(userSymptoms)

    try{

        const result = await runPy('E:\\SRM\\MedicSage\\back-end\\python\\predDisease.py', [userSymptoms])
        console.log(result)
        res.json({ symptoms: userSymptoms, predDisease: result, redirectURL: `/medicsage/product/results?diagnosis=${result}` })
        
    }catch(err){
        console.log(`Error: ${err}`)
    }
}
export {displayHomePage, displayProductPage, sympSuggestions, predDisease}

