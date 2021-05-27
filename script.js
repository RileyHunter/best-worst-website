let renderImage = (container, imageUrl) => {
    let image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = imageUrl;
    image.onload = () => {
        let canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
        console.log("Rendering at " + canvas.width + "x" + canvas.height);
        let getRgbStringFromCanvas = (canvas, x, y) => {
            let colour = canvas.getContext('2d').getImageData(x, y, 1, 1);
            return `rgba(${colour.data.join(',')})`
        }
        let table = document.createElement('table');
        table.style.borderCollapse = 'collapse';
        table.style.borderSpacing = '0';
        let tableBody = document.createElement('tbody');
        for (let y = 0; y < canvas.height; y++) {
            let tableRow = document.createElement('tr');
            for (let x = 0; x < canvas.width; x++) {
                let tableData = document.createElement('td');
                tableData.style.backgroundColor = getRgbStringFromCanvas(canvas, x, y);
                tableData.style.height = '1px';
                tableData.style.width = '1px';
                tableData.style.padding = '0';
                tableRow.appendChild(tableData);
            }
            tableBody.appendChild(tableRow);
        }
        table.appendChild(tableBody);
        container.appendChild(table);
    }
}

let renderText = (container, text) => {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    context.font = '48px Times New Roman';
    let measurements = context.measureText(text);
    console.log(measurements);
    let width = measurements.width;
    let height = measurements.fontBoundingBoxAscent + measurements.fontBoundingBoxDescent;
    canvas.width = width;
    canvas.height = height;
    context.font = '48px Times New Roman';
    context.fillText(text, 0, height - 16);
    renderImage(container, canvas.toDataURL());
}

// Hello world
renderText(document.body, 'Hello, World!');
// Cheeky
renderText(document.body, 'There is no text on this page.');
renderText(document.body, 'There are also no images on this page.');
// Jack Nicholson
renderImage(document.body, 'https://i.imgur.com/p5KwCr0.png');