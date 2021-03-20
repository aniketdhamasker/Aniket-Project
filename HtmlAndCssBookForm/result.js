
 
 
 window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const bookName =params.get('bookName');
    const authorEmail =params.get('authorEmail');
    const website =params.get('website');
    const filename =params.get('filename');
    const categories =params.get('categories');
    const datepicker =params.get('datepicker');
    const isbn =params.get('isbn');
    const price =params.get('price');
    const type =params.get('type');
    const format =params.get('format');
    const inStock =params.get('inStock');
    const rating =params.get('rating');
    const comment =params.get('comment');


    document.getElementById('result-Book-Name').innerHTML = bookName;
    document.getElementById('result-Author-Email').innerHTML = authorEmail;
    document.getElementById('result-Website').innerHTML = website;
    document.getElementById('result-Cover-Picture').innerHTML = filename;
    document.getElementById('result-Categories').innerHTML = categories;
    document.getElementById('result-Date-Of-Publication').innerHTML = datepicker;
    document.getElementById('result-ISBN').innerHTML = isbn;
    document.getElementById('result-Price').innerHTML = price;
    document.getElementById('result-Type').innerHTML = type;
    document.getElementById('result-Format').innerHTML = format;
    document.getElementById('result-InStock').innerHTML = inStock;
    document.getElementById('result-Rating').innerHTML = rating;
    document.getElementById('result-Review').innerHTML = comment;



   
       



  })
