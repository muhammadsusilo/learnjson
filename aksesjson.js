const ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
        let mie = JSON.parse(this.responseText);
        console.info(mie);
    }
}

ajax.open('GET', 'latihanjson.json', true);
ajax.send();