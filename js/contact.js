var Contact = function () {

    var init = function () {

        // body clicks
        $(document).mouseup(function (e) {
            if (!$('.contact').is(e.target) && $('.contact').has(e.target).length === 0) {
                $('#content').removeClass('contact-open');
                $('.main-nav').removeClass('main-nav-open');
            }
        });

    };

    // toggle contact
    var showContact = function () {
        $('#content').toggleClass('contact-open');
        $('.main-nav').toggleClass('main-nav-open');
    };

    // check required fields
    var checkForm = function (id) {

        var valid = true;

        $(id).find('.req').each(function (index) {

            if ($(this).val() == $(this).prop('defaultValue') || $(this).val() == '') {

                $(this).addClass('errortxt');
                valid = false;

                $('#contact-form-error').html('* Missing required fields');

            } else {

                $(this).removeClass('errortxt');

            }

        });

        if (valid) sendForm(id);

        return false;

    };

    var sendForm = function (id) {

        var formData = $('#form-contact').serialize();

        $.ajax({
            type: 'POST',
            url: 'http://mail.elixeur.com/send.php',
            data: formData
        }).success(function () {

            $('#contact-content').html('<b>Thank you for contacting us! We will get back to you as soon as possible!</b><br/><br/><p><a href="javascript:Contact.showContact();" class="formsbtn">Close</a></p>');

        });

        $('#contact-content').html('<b>Thank you for contacting us! We will get back to you as soon as possible!</b><br/><br/><p><a href="javascript:Contact.showContact();" class="formsbtn">Close</a></p>');

    };

    return {
        init: init,
        showContact: showContact,
        checkForm: checkForm
    };
    init();
};
