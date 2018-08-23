function addProduct() {
    let product = $('#add-product input:first');
    let price = $('#add-product input:last');

    if(product.val() !== '' && price.val() !== ''){
        $('#product-list')
            .append($('<tr>')
                .append($('<td>').text(`${product.val()}`))
                .append($('<td>').text(`${price.val()}`)))

        let itemPrice = $('#bill tfoot tr td:last');
        let currentPrice = Number(itemPrice.text());
        let newPrice = currentPrice + +price.val();
        itemPrice.text(newPrice)

        product.val('')
        price.val('')
    }

}