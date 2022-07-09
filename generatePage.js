
function generatePage(divArr) {

    const generateDivString = (divArr) => {
        let string = '';
        for(let i = 0; i < divArr.length; i++){
            string += divArr[i];
            console.log(divArr[i]);
        }
        console.log(string)
        return string;
    }
    
    const divString = generateDivString(divArr);

    const page = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    ${divString}
</body>

</html>`;
return page;
};

module.exports = generatePage