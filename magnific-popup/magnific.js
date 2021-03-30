$(document).ready(function() {
    $('#gallery-center').magnificPopup({
        delegate: 'a',
        type:'image',
        gallery: {
            // options for gallery
            enabled: true
        }
    });
});