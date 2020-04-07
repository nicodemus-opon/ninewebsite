<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="#licenseinfo">
    <h1 class="display-4">Contact</h1>
    <p class="lead"></p>
</div>

<div class="container">
    <div class="row">
        <div class="col-lg-6"
             style="background-image: url('../assets/img/contact.webp');background-position: center;background-size:contain;background-repeat: no-repeat  ">

        </div>
        <div class="col-lg-6">
            <form id="contact-form" method="post" action="https://getform.io/f/e7d21e9a-b4b0-4c9e-839e-afb612ad517a" role="form">

                <div class="messages"></div>

                <div class="controls">

                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="form_name">Name *</label>
                                <input id="form_name" type="text" name="name" class="form-control"
                                       placeholder="Please enter your name *" required="required"
                                       data-error="Firstname is required.">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="form_email">Email *</label>
                                <input id="form_email" type="email" name="email" class="form-control"
                                       placeholder="Please enter your email *" required="required"
                                       data-error="Valid email is required.">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="form_need">Please specify your need *</label>
                                <select id="form_need" name="need" class="form-control" required="required"
                                        data-error="Please specify your need.">
                                    <option value="Unspecified">Unspecified</option>
                                    <option value="Exclusive Beats">Exclusive Beats</option>
                                    <option value="Custom Beats">Custom Beats</option>
                                    <option value="Recording Services">Recording Services</option>
                                    <option value="Mixing & Mastering">Mixing & Mastering</option>

                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="form_message">Message *</label>
                                <textarea id="form_message" name="message" class="form-control"
                                          placeholder="Message for me *"
                                          rows="4" required="required"
                                          data-error="Please, leave us a message."></textarea>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <input type="submit" class="btn btn-light text-dark btn-block btn-send"
                                   value="Send message">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p class="text-muted">
                                <strong>*</strong> I usually get back within an hour
                                .</p>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    </div>


</div>