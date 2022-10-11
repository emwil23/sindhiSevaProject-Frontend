export const convertToCSV = (objArray: any[], headers: any[]) => {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    // adding header
    var headerLine = '';
    for (let header of headers) {
        if (headerLine !== '') headerLine += ','
        headerLine += header.label;
    }
    str += headerLine + '\r\n';
    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (let header of headers) {
            if (line !== '') line += ','
            line += array[i][header.value] ? `"${array[i][header.value]}"` : '"-"';
        }
        str += line + '\r\n';
    }

    return str;
}

export const exportCSVFile = (headers: any[], items: any[], fileTitle: string) => {

    var csv = convertToCSV(items, headers);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    var link = document.createElement("a");
    if (link.download !== undefined) { // feature detection
        // Browsers that support HTML5 download attribute
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", exportedFilenmae);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}