console.log("Actions successfuly loaded!")

const handleOver = () => {
    let element = $('.is-current')
    element.on('classChange', function() {
        element.animate({fontSize: '80px'});
    });
};

