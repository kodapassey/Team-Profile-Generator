
function generatePage(divArr) {

    const generateDivString = (divArr) => {
        let string = '';
        for (let i = 0; i < divArr.length; i++) {
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
    <title>Team-Member-Page</title>
    <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="./src/styles.css">
</head>

<body>

    <header class="banner w-100">
        <h1 class="my-4">My Team</h1>
    </header>


    <section class="container">
        <section class="row d-flex justify-content-center">
            ${divString}
        </section>
    </section>
</body>

</html>`;
    return page;
};

module.exports = generatePage