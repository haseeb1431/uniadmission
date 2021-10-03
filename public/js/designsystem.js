const e = new Map([
    ["search_suggestions_words", ["Sökförslag", "Suggestions"]],
    ["search_suggestions_titles", ["Kurser och program", "Courses and Programmes"]],
    ["multiselect_many_selected", [" valda universitet", " selected universites"]],
    ["application_loading", ["Innehållet laddas", "Content is loading"]],
    ["occupiedemail", ["E-postadressen är upptagen", "The email address is already registered."]],
    ["accessible_passwordvisible", ["Ditt lösenord är nu synligt", "The password input is now visible"]],
    ["accessible_passwordinvisible", ["Ditt lösenord är nu dolt", "The password input is now invisible"]],
    ["error_login_attempts", ["Du har försökt att logga in för många gånger. Klicka i rutan för att bevisa att du inte är en robot.", "You have attempted to log in too many times. Check the box to prove you are not a machine."]],
    ["error_unknown", ["Ett oväntat tekniskt fel uppstod. Försök igen lite senare.", "An unexpected error has occurred. Please contact University Admissions."]]
]);
class t {
    constructor() { this.awebSpinnerTimeout = "" }
    static getMessage(t) { return "se" === this.getLang() ? e.get(t)[0] : e.get(t)[1] }
    static handleErrorFocus() {
        const e = $(".errormessageblock:visible"),
            i = $(".validationError:visible").first();
        if (0 !== e.length) {
            const i = $(e).closest("form"),
                s = $("input[autofocus]").length > 0 ? $("input[autofocus]", i).first() : $('input:not([type="hidden"])', i).first();
            t.setFocusElement(s, i)
        }
        0 !== i.length && setTimeout((function() { t.firstOccurenceOfFieldError().focus() }), 300)
    }
    static firstOccurenceOfFieldError() { return $(".validationError").first().closest(".textfield, .radiobutton-push, .dropdown, fieldset").find("input, select").first() }
    static showFormErrorOnAjaxComplete(e, i, s) {
        "" !== s && void 0 !== s || (s = this.getMessage("error_unknown"));
        const n = ".errormessageblock";
        $(n).hide(), $(n).text(""), $(n, e).html(s + "<br>").show(), $(n, e).show(), setTimeout((function() { t.scrollIntoView($(n)) }), 100), this.setFocusElement(i, e)
    }
    static setFocusElement(e, t) {
        if ("" !== e && void 0 !== e) {
            const i = t.attr("id") + "-form-error";
            e.attr("aria-describedby", i), setTimeout((function() { e.focus() }), 300)
        }
    }
    static setupCsrfPrevention() {
        const e = "X-Csrf-Token",
            t = "CSRFTOKEN";
        $(document).ajaxSend((function(i, s, n) { n.crossDomain || s.setRequestHeader(e, Cookies.get(t)) })), $(document).on("submit", "form", (function() { const i = this.getAttribute("method"); if (i && "get" === i.toLowerCase()) return !0; if (this.hasAttribute("data-csrf-disabled")) return !0; const s = $("<input type='hidden' >").attr("name", e).attr("value", Cookies.get(t)); return $(this).append(s), !0 }))
    }
    static replaceCurrentPageWithErrorPage(e) { document.open(), document.write(e), document.close() }
    static isNyaError(e) { return null != e.getResponseHeader("NyaReplace") || null != e.getResponseHeader("NyaRedirect") }
    static handleAjaxDivert(e, i, s) { let n; "object" == typeof e && e.getResponseHeader ? n = e : "object" == typeof s && s.getResponseHeader && (n = s), n && (n.getResponseHeader("NyaReplace") ? t.replaceCurrentPageWithErrorPage(n.responseText) : n.getResponseHeader("NyaRedirect") && window.location.replace(n.getResponseHeader("NyaRedirect"))) }
    static httpGetWithNyaHeaderHandling(e, i) { return $.get(e, t.handleHttpRequest.bind(this, i)).always(t.handleAjaxDivert) }
    static httpPostWithNyaHeaderHandling(e, t, i) { return $.post(e, t, this.handleHttpRequest.bind(this, i)).always(this.handleAjaxDivert) }
    static handleHttpRequest(e, i, s, n) { t.isNyaError(n) || e && e(i) }
    static getTrack() { const e = window.location.pathname; return e.substring(0, e.indexOf("/", 1)) }
    static getLang() { const e = this.getTrack(); return e.substring(1, e.length) }
    static awebShowSpinner() {
        const e = this;
        this.awebSpinnerTimeout = setTimeout((function() {
            const t = e.getMessage("application_loading");
            $("body").prepend($('<div id="aweb-spinner"><div id="aweb-spinner-cover"></div><div id="aweb-spinner-fill"></div><img id="aweb-spinner-image" src="/images/logo/alogga.svg" aria-busy="true" tabindex="0" alt="' + t + '"  /></div>')), $("#aweb-spinner-image").focus(), $(document).on("keypress keydown", "#aweb-spinner-image", (function(e) { e.preventDefault() }))
        }), 200)
    }
    static awebHideSpinner() { this.awebSpinnerTimeout && clearTimeout(this.awebSpinnerTimeout), $("#aweb-spinner").remove() }
    static scrollIntoView(e) {
        if (null !== e) try {
            const t = e.offset().top,
                i = $(window).scrollTop() + $(window).height(),
                s = t + e.outerHeight();
            if (s > i) {
                const e = s - $(window).height() + 20;
                setTimeout((function() { $(window).scrollTop(e) }), 100)
            }
            t < $(window).scrollTop() + 82 && setTimeout((function() { $(window).scrollTop(t - 82) }), 100)
        } catch (e) {}
    }
    static showRecaptcha(e) { $("#recaptcha_placeholder:empty").length ? grecaptcha.render(e, { sitekey: "6LcBC_kSAAAAAPx2F5xSufzdKo-nUWqYSp7K0DrU" }) : grecaptcha.reset() }
    static clearPasswordField() { $("#password").val("") }
    static toUpperCasePnr(e) {
        const t = $(e).val();
        null !== t.match(/^[^@]+$/) && $(e).val(t.toUpperCase())
    }
    static isEsckey(e) { return 27 === e.keyCode }
    static isEnterkey(e) { return 13 === e.keyCode }
    static isSpacekey(e) { return 32 === e.keyCode }
    static isArrowdown(e) { return 40 === e.keyCode }
    static isArrowup(e) { return 38 === e.keyCode }
    static isArrowright(e) { return 39 === e.keyCode }
    static isArrowleft(e) { return 37 === e.keyCode }
    static isTabkey(e) { return 9 === e.keyCode }
    static isHomeKey(e) { return 36 === e.keyCode }
    static isEndKey(e) { return 35 === e.keyCode }
    static getRelatedTargetId(e) { return $(e.relatedTarget).attr("id") }
    static isShiftTabkey(e) { return e.shiftKey && 9 === e.keyCode }
    static isEndkey(e) { return 35 === e.keyCode }
    static isHomekey(e) { return 36 === e.keyCode }
    static toggleBooleanAttribute(e, t) { "false" === $(e).attr(t) ? $(e).attr(t, "true") : $(e).attr(t, "false") }
    static getAriadescribedby() { return "aria-describedby" }
    static getAriaInvalid() { return "aria-invalid" }
    static getAriaPressed() { return "aria-pressed" }
    static getAriaExpanded() { return "aria-expanded" }
    static getAriaSelected() { return "aria-selected" }
    static getInvalidMessage() { return ".invalid-message" }
    static onSuperordinateElementChanged(e, t) { $(e).is(":checked") ? $(t).prop("disabled", !1) : ($(t).prop("disabled", !0), $(t).prop("checked", !1)) }
    static setupNonExpandableInformationBlock() {
        const e = ".accordioncontent";
        $(".informationmessageblock:visible").each((function() {
            const t = $(this),
                i = $(this).find(e).height();
            !t.hasClass("accordioncontentopen") && i <= 130 && (t.addClass("content-open"), t.find(e).removeClass("hide"), t.addClass("nonexpandable"), t.find(".expand-button").find(".informationmessageheading").unwrap().wrap('<div class="disabled-button subtitle" />'))
        }))
    }
    static trapTabKey(e, t, i) {
        if (9 === e.which) {
            const s = $(":focus");
            e.shiftKey ? s.get(0) === t.get(0) && (i.focus(), e.preventDefault()) : s.get(0) === i.get(0) && (t.focus(), e.preventDefault())
        }
    }
    static showLogoutWindow() { IdleChecker.showLogoutWindow(), $("#abouttobeloggedout").hide(), $("#sessiontimedout").show(), $("#sessiontimedout .continue").focus() }
    static openLightbox(e, i, s) {
        const n = "lightboxwrapper";
        let a;
        t.closeLightbox(), $("body").addClass("hasmodal"), a = "string" == typeof i ? $("<div>" + i + "</div>").insertAfter("footer") : i, a.wrap('<div class="modal_background" tabindex="-1"></div>').wrap('<div class="lightboxwrapper" aria-modal="true"></div>'), s.wrapperclass && $(n).addClass(s.wrapperclass), s.destroy && $(n).addClass("destroy"), s.persistentwindow || ($(document).on("click.closelightbox", (function() { t.closeLightbox(e) })), $(document).on("keydown.closelightbox", (function(i) { 27 === i.keyCode && $(".modal_background").length > 0 && t.closeLightbox(e) })))
    }
    static closeLightbox(e) {
        const t = $(".lightboxwrapper");
        $(document).off("click.closelightbox").off("keydown.closelightbox"), t.length > 0 && (t.hasClass("destroy") ? t.parent().remove() : t.children().unwrap().unwrap(), null != e && $(e).focus()), $("body").removeClass("hasmodal")
    }
    static scrollTo(e, t) { e.is(":visible") && $("html").animate({ scrollTop: e.offset().top - 82 }, t) }
}
class i {
    constructor(e) { this.element = e, this.initEvents() }
    initEvents() {
        t.setupNonExpandableInformationBlock(), $(this.element).on({
            click: function() {
                const e = $(this).closest(".accordion");
                e.toggleClass("expanded"), t.toggleBooleanAttribute($(this), "aria-expanded"), e.find(".accordioncontent").toggleClass("hide")
            }
        })
    }
}
class s {
    constructor(e) { this.element = e, this.closeevent = "click.popupclose", this.popup_keyboardevent = "keydown.popup", this.favouriteactive = "favourite-active", this.setup() }
    setup() {
        const e = this;
        $(this.element).on("click", ".info-toggle", (function() {
            const t = $(this),
                i = t.prev(".info-popup"),
                s = t.hasClass("favourite-toggle"),
                n = !t.hasClass("inactive");
            s && n ? (t.toggleClass(e.favouriteactive), e.togglefavouriteScreenreader(t)) : i.is(":visible") ? e.closePopup(t, i) : i && i.length && e.openPopup(t, i, { closeAll: !0 })
        })), $(this.element).on("click", ".close", (function() {
            const t = $(this).closest(".popup-component").find(".info-toggle"),
                i = t.prev(".info-popup");
            e.closePopup(t, i)
        }))
    }
    openPopup(e, i, s) {
        const n = this;
        s && s.closeAll && this.closeAllPopups(), i.show(), n.positionPopup(e, i), i.addClass("active"), i.is(":visible") && t.scrollIntoView(i), setTimeout((function() { i.find(".close").focus() }), 100), $("body").on(this.closeevent, (function(e) {
            if (n.isInsidePopup(e)) return !0;
            n.closeAllPopups()
        })), $(document).on(this.popup_keyboardevent, (function(s) { 27 === s.keyCode && n.isPopupOpen(i) && n.closePopup(e, i), 9 === s.keyCode && n.isTooltip(i) && n.isPopupOpen(i) && n.closePopup(e, i), n.isDialog(i) && t.trapTabKey(s, i.find(".close"), n.lastElementInPopup(i)) })), e.on("blur", (function(t) { n.isInsidePopup(t) || n.closePopup(e, i), e.off("blur") }))
    }
    closePopup(e, t) { $("body").off(this.closeevent), $(document).off(this.popup_keyboardevent), t.hide(), t.removeClass("active"), e.focus() }
    closeAllPopups() { $("body").off(this.closeevent), $(document).off(this.popup_keyboardevent), $(".info-popup").each((function(e, t) { $(t).hide(), $(t).removeClass("active") })) }
    togglefavouriteScreenreader(e) {
        const t = e.attr("id");
        e.hasClass(this.favouriteactive) ? e.attr("aria-labelledby", "remove-favourite-text-" + t) : e.attr("aria-labelledby", "save-favourite-text-" + t)
    }
    positionPopup(e, t) {
        const i = t.offset(),
            s = i.top,
            n = i.left,
            a = n + t.outerWidth(),
            o = { top: s, left: n },
            r = $(window).scrollLeft(),
            l = r + $(window).width();
        n < r && (o.left = r + 16), a > l && (o.left = l - t.outerWidth()), t.offset(o)
    }
    isInsidePopup(e) { return $(e.target).closest(".popup-component").find(".info-popup").length > 0 }
    isDialog(e) { return e.closest(".popup-component").hasClass("dialog") }
    isTooltip(e) { return e.closest(".popup-component").hasClass("tooltip") }
    isPopupOpen(e) { return e.length > 0 }
    lastElementInPopup(e) { return e.find("button:visible, a:visible, input:visible").last() }
}
class n {
    constructor(e) { this.element = e, this.$element = $(this.element), this.optionList = ".accordioncontent", this.expand_button = ".expand-button", this.options = ".option input", this.optionsChecked = ".option input:checked", this.accordion = ".accordion", this.triggerName = ".expand-button .selected-name", this.optionLast = ".option:last-child input", this.optionFirst = ".option:first-child input", this.optionsAllButFirst = ".option:not(:first-child) input", this.initEvents() }
    initEvents() {
        const e = this;
        $(this.element).ready((function() { e.updateSelectedOption(e.countryselectOptionFirst), e.updateTriggerName() })), $(this.element).on({ click: function() { n.focusSelectedOption() } }, this.expand_button), $(this.element).on({ keydown: function(i) { if (void 0 !== i) return !t.isEnterkey(i) && (t.isArrowdown(i) ? (e.nextListItem(this), !1) : t.isArrowup(i) ? (e.previousListItem(this), !1) : t.isEndkey(i) ? (e.$element.find(e.optionLast).focus(), !1) : t.isHomekey(i) ? (e.$element.find(e.optionFirst).focus(), !1) : t.isEsckey(i) || t.isTabkey(i) && e.isOptionListVisible() ? (e.closeOptionList(), e.focusTriggerElement(), !1) : void 0) }, click: function() { e.updateSelectedOption(this) } }, this.options), $(this.element).on({ keydown: function(i) { if (t.isArrowdown(i) || t.isEnterkey(i)) return e.openOptionList(), n.focusSelectedOption(), !1 } }, this.expand_button), $(document).on("click", (function(t) { if (e.isOptionListVisible() && e.isClickOutsideOptionList(t)) return e.closeOptionList(), e.focusTriggerElement(), !1 }))
    }
    updateSelectedOption(e) { this.isDefaultOption(e) && this.$element.find(this.optionsAllButFirst).prop("checked", !1), this.isOtherThanDefaultOptionSelected(e) ? this.$element.find(this.optionFirst).prop("checked", !1) : this.isSelectionEmpty() && this.$element.find(this.optionFirst).prop("checked", !0), this.updateTriggerName(e) }
    isDefaultOption(e) { return $(e).attr("id") === this.$element.find(this.optionFirst).attr("id") }
    isOtherThanDefaultOptionSelected(e) { return this.$element.find(this.optionsChecked).length > 1 && !this.isDefaultOption(e) }
    isSelectionEmpty() { return 0 === this.$element.find(this.optionsChecked).length }
    updateTriggerName() {
        const e = this.$element.find(this.optionsChecked).length,
            i = this.$element.find(this.optionsChecked).next("label").text();
        1 === e ? this.$element.find(this.triggerName).html(i) : this.$element.find(this.triggerName).html(i).html(e + "&nbsp;" + t.getMessage("multiselect_many_selected"))
    }
    static focusSelectedOption() { $(".multi-select .option input:checked").first().focus() }
    focusTriggerElement() { this.$element.find(this.expand_button).focus() }
    isOptionListVisible() { return this.$element.find(this.optionList).is(":visible") }
    isClickOutsideOptionList(e) { return !$(e.target).closest(this.$element.find(this.accordion)).length }
    closeOptionList() { this.$element.find(this.optionList).addClass("hide"), this.$element.find(this.expand_button).attr("aria-expanded", !1), this.$element.find(this.accordion).removeClass("expanded") }
    openOptionList() { this.$element.find(this.optionList).removeClass("hide"), this.$element.find(this.expand_button).attr("aria-expanded", !0), this.$element.find(this.accordion).addClass("expanded") }
    previousListItem(e) { $(e).closest("li").prev().find("input").focus() }
    nextListItem(e) { $(e).closest("li").next().find("input").focus() }
}
class a {
    constructor(e) { this.element = e, this.initEvents() }
    initEvents() {
        const e = this;
        $(this.element).on("change", (function() {
            if (e.checkIfDateIsValid())
                if (e.isNotStandardDatepicker()) {
                    const t = e.calculateSimpleDatepickerValue();
                    e.simpleDatepickerElements().value.val(t), $("#" + e.getIdBase() + "-standard").val(t)
                } else {
                    const t = $("#" + e.getIdBase() + "-standard").val();
                    $("#" + e.getIdBase()).val(t);
                    const i = new Date(t);
                    e.simpleDatepickerElements().year.val(i.getFullYear()), e.simpleDatepickerElements().month.val(e.getMonth(i)), e.simpleDatepickerElements().day.val(e.getDay(i))
                }
        }))
    }
    isNotStandardDatepicker() { return $(this.element).attr("id") !== this.getIdBase() + "-standard" }
    simpleDatepickerElements() { return { year: $("#" + this.getIdBase() + "-year"), month: $("#" + this.getIdBase() + "-month"), day: $("#" + this.getIdBase() + "-day"), value: $("#" + this.getIdBase()) } }
    calculateSimpleDatepickerValue() { const e = this.simpleDatepickerElements(); return e.year.val() && e.month.val() && e.day.val() ? e.year.val() + "-" + e.month.val() + "-" + e.day.val() : null }
    getMonth(e) { return ("0" + (e.getMonth() + 1)).slice(-2) }
    getIdBase() { return $(this.element).attr("id").split("-")[0] }
    getDay(e) { return ("0" + e.getDate()).slice(-2) }
    renderThisMessageValid(e) { $(t.getInvalidMessage(), this.getThisContext(e)).hide(), $(e).removeAttr(t.getAriadescribedby()), this.renderThisFieldValid(e) }
    renderThisMessageInvalid(e) {
        const i = $(e).attr("id");
        $(e).attr(t.getAriadescribedby(), "error-" + i), $(".helpertext", e).hide(), $(t.getInvalidMessage(), this.getThisContext(e)).show(), this.renderThisFieldInvalid(e)
    }
    renderThisFieldValid(e) { $(e).addClass("valid"), $(e).removeClass("invalid"), $(e).attr(t.getAriaInvalid(), "false") }
    renderThisFieldInvalid(e) { $(e).addClass("invalid"), $(e).removeClass("valid"), $(e).attr(t.getAriaInvalid(), "true") }
    getThisContext(e) { return $(e).parent() }
    checkIfDateIsValid() {
        const e = this.simpleDatepickerElements();
        if (e.year.val() && e.month.val() && e.day.val()) {
            if (!this.isDateValid(e.year.val(), e.month.val(), e.day.val())) return this.renderThisMessageInvalid("#" + this.getIdBase() + "-day"), $("#" + this.getIdBase()).val(this.calculateSimpleDatepickerValue()), !1;
            this.renderThisMessageValid("#" + this.getIdBase() + "-year"), this.renderThisMessageValid("#" + this.getIdBase() + "-month"), this.renderThisMessageValid("#" + this.getIdBase() + "-day")
        } else $("#" + this.getIdBase()).val("");
        return !0
    }
    isDateValid(e, t, i) { return t >= 1 && t < 13 && i > 0 && i <= this.daysInMonth(e, Number(t)) }
    daysInMonth(e, t) {
        switch (t) {
            case 2:
                return e % 4 == 0 && e % 100 || e % 400 == 0 ? 29 : 28;
            case 9:
            case 4:
            case 6:
            case 11:
                return 30;
            default:
                return 31
        }
    }
}
class o {
    constructor(e) { this.element = e, this.initEvents() }
    initEvents() { if ($(this.element).on({ change: function() { $(this).addClass("changed-show-error") } }), "countryid" === $(this.element).attr("id").toLowerCase()) { $(this.element).on({ change: function() { const e = $("#zipCode"); "SE" === $(this).children("option:selected").val() ? (e.prop("required", !0), e.siblings("label").find(".optionaltext").addClass("hide")) : (e.prop("required", !1), e.siblings("label").find(".optionaltext").removeClass("hide")) } }); const e = $("#zipCode"); "SE" === $(this.element).children("option:selected").val() && (e.prop("required", !0), e.siblings("label").find(".optionaltext").addClass("hide")) } }
}
class r {
    constructor(e) { this.element = e, this.disableDependentIfNeeded(), this.initEvents() }
    initEvents() {
        const e = this;
        $(this.element).on({ click: function() { e.disableDependentIfNeeded() } })
    }
    disableDependentIfNeeded() {
        const e = $(this.element).data("dependsonid");
        $(e).attr("disabled", $(this.element).is(":checked"))
    }
}
class l {
    constructor(e) { this.element = e }
    validateField(e) { return this._validate(this.getValue(), e) }
    validateFieldTrim(e) { return this._validate(this.getValueTrim(), e) }
    _validate(e, t) { return this.isInitiated() && (l.matchPattern(e, t) ? this.renderMessageValid() : this.renderMessageInvalid()), !1 }
    validateFieldMatch(e, t) { const i = t.val(); "" !== e && "" !== i && this.isValidated() && (e === i ? this.renderThisMessageValid(t) : this.renderThisMessageInvalid(t)) }
    renderMessageValid() {
        if ($(t.getInvalidMessage(), this.getContext()).hide(), $(this.element).removeAttr(t.getAriadescribedby()), 0 !== $(this.element).closest(".textfield").find(".validicon").length) {
            const e = $(this.element).attr("id");
            $(this.element).attr(t.getAriadescribedby(), "valid-" + e)
        }
        this.renderFieldValid()
    }
    renderMessageInvalid() {
        const e = $(this.element).attr("id");
        $(this.element).attr(t.getAriadescribedby(), "error-" + e), $(".helpertext", this.element).hide(), $(t.getInvalidMessage(), this.getContext()).show(), $(this.getEmailOccupiedSelector(), this.element).text(""), this.renderFieldInvalid()
    }
    renderThisMessageValid(e) { $(t.getInvalidMessage(), this.getThisContext(e)).hide(), $(e).removeAttr(t.getAriadescribedby()), this.renderThisFieldValid(e) }
    renderThisMessageInvalid(e) {
        const i = $(e).attr("id");
        $(e).attr(t.getAriadescribedby(), "error-" + i), $(".helpertext", e).hide(), $(t.getInvalidMessage(), this.getThisContext(e)).show(), $(this.getEmailOccupiedSelector(), e).text(""), this.renderThisFieldInvalid(e)
    }
    renderThisFieldValid(e) { $(e).addClass("valid"), $(e).removeClass("invalid"), $(e).attr(t.getAriaInvalid(), "false") }
    renderThisFieldInvalid(e) { $(e).addClass("invalid"), $(e).removeClass("valid"), $(e).attr(t.getAriaInvalid(), "true") }
    renderFieldValid() { $(this.element).addClass("valid"), $(this.element).removeClass("invalid"), $(this.element).attr(t.getAriaInvalid(), "false") }
    renderFieldInvalid() { $(this.element).addClass("invalid"), $(this.element).removeClass("valid"), $(this.element).attr(t.getAriaInvalid(), "true") }
    static matchPattern(e, t) { return t.test(e) }
    getThisContext(e) { return $(e).parent() }
    getContext() { return $(this.element).parent() }
    getEmailOccupiedSelector() { return ".occupiedemail-message" }
    getValue() { return $(this.element).val().toString() }
    getValueTrim() { return $(this.element).val().toString().trim() }
    setInitiated() { return $(this.element).addClass("initiated") }
    setValidated() { return $(this.element).addClass("validated") }
    isInitiated() { return $(this.element).hasClass("initiated") }
    isValidated() { return $(this.element).hasClass("validated") }
}
class c extends l {
    constructor(e) { super(e), this.newpassword = "[name=password]", this.confirmpassword = "[name=passwordVer]", this.validatePasswordCorrect(this.getValue()), this.initEvents() }
    initEvents() {
        const e = this,
            t = $(this.element).siblings("button");
        $(this.element).attr("autocomplete") && "new-password" === $(this.element).attr("autocomplete").toLowerCase() && $(this.element).on({ input: function() { e.setInitiated(), e.validatePasswordCorrect(e.getValue()), e.isValidated() && (e.validateField(e.getPasswordPattern()), e.validateFieldMatch($(e.newpassword).val(), $(e.confirmpassword))) }, blur: function() { e.setValidated(), e.validateField(e.getPasswordPattern()), e.validateFieldMatch($(e.newpassword).val(), $(e.confirmpassword)) } }), $(t).on({
            click: function() {
                const t = $(this).siblings("input"),
                    i = t.attr("type"),
                    s = t.attr("id");
                return "password" === i ? e.setPasswordVisible(this, t, s) : e.setPasswordInvisible(this, t, s), !1
            }
        })
    }
    validatePasswordCorrect(e) { "password" === $(this.element).attr("name") && (c.matchPattern(e, this.getPasswordPattern()) && this.renderMessageValid(), this.validatePasswordPattern(e, ".lowercase", this.passwordPatternLowerCase()), this.validatePasswordPattern(e, ".uppercase", this.getPasswordPatternUpperCase()), this.validatePasswordPattern(e, ".number", this.getPasswordPatternnumber()), this.validatePasswordPattern(e, ".specialchar", this.getPasswordPatternSpecialChar()), this.validatePasswordPattern(e, ".totalchars", this.getPasswordPatternTotalChar())) }
    validatePasswordPattern(e, t, i) {
        const s = $(this.element).siblings(".evaluatepassword-message");
        c.matchPattern(e, i) ? s.find(t).prop("checked", !0) : s.find(t).prop("checked", !1)
    }
    setPasswordVisible(e, i, s) { i.attr("type", "text"), $(e).attr("aria-labelledby", "make-invisible-text-" + s), $(e).removeClass("make-visible"), $(e).addClass("make-invisible"), $(e).attr(t.getAriadescribedby(), s + "-" + c.getPasswordvisibletextId()), $("#" + s + "-" + c.getPasswordvisibletextId()).html(t.getMessage("accessible_passwordvisible")) }
    setPasswordInvisible(e, i, s) { i.attr("type", "password"), $(e).attr("aria-labelledby", "make-visible-text-" + s), $(e).removeClass("make-invisible"), $(e).addClass("make-visible"), $(e).attr(t.getAriadescribedby(), s + "-" + c.getPasswordvisibletextId()), $("#" + s + "-" + c.getPasswordvisibletextId()).html(t.getMessage("accessible_passwordinvisible")) }
    getPasswordPattern() { return new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[-_,.;:!?+\\\\/@%(){}\\[\\]\"*`~^=|\\s'])[A-Za-z0-9-_,.;:!?+\\\\/@%(){}\\[\\]\"*`~^=|\\s']{8,50}$") }
    passwordPatternLowerCase() { return new RegExp("[a-z]") }
    getPasswordPatternUpperCase() { return new RegExp("[A-Z]") }
    getPasswordPatternnumber() { return new RegExp("[0-9]") }
    getPasswordPatternTotalChar() { return new RegExp("^.{8,50}$") }
    getPasswordPatternSpecialChar() { return new RegExp("[-_,.;:!?+\\\\/@%(){}\\[\\]\"*`~^=|\\s']") }
    static getPasswordvisibletextId() { return "togglevisible-sr" }
}
class d extends l {
    constructor(e) { super(e) }
    static getPersonnummer() { return $("#pnr").val() }
    static isPersonnummer() { const e = $("#pnr").val(); return void 0 !== e && e.length > 0 }
}
class u extends l {
    constructor(e) { super(e), this.newemail = "[name=email]", this.confirmemail = "[name=emailVer]", this.initEvents() }
    initEvents() {
        const e = this;
        $(this.element).on({ input: function() { e.setInitiated(), e.isValidated() && (e.validateEmail(), e.validateFieldMatch($(e.newemail).val(), $(e.confirmemail))) }, blur: function() { e.setValidated(), e.isInitiated() && e.validateEmail(), e.validateFieldMatch($(e.newemail).val(), $(e.confirmemail)) } }), $(this.element).attr("id") && "email" === $(this.element).attr("id").toLowerCase() && $(this.element).on({ blur: function(i) { if ($(this).hasClass("valid")) { t.awebShowSpinner(); const s = d.getPersonnummer(); return d.isPersonnummer() ? e.checkPnrEmailAvailability(this, s, i) : e.checkEmailAvailability(this, i), !1 } } })
    }
    checkEmailAvailability(e, i) {
        const s = this;
        $.ajax({ url: t.getTrack() + "/validateemail", cache: !1, type: "GET", data: { epost: e.value }, success: function() { s.renderEmailNotOccupiedMessage() }, error: function() { s.renderEmailOccupiedMessage() }, complete: function() { t.awebHideSpinner(), s.setFocusOnRelatedTarget(i) } })
    }
    checkPnrEmailAvailability(e, i, s) {
        const n = this;
        $.ajax({ url: t.getTrack() + "/validatepnremail", cache: !1, type: "GET", data: { epost: e.value, personnummer: i }, success: function() { n.renderEmailNotOccupiedMessage() }, error: function() { n.renderEmailOccupiedMessage() }, complete: function() { t.awebHideSpinner(), n.setFocusOnRelatedTarget(s) } })
    }
    validateEmail() { this.validateEmailPatterns(this.getValueTrim()) ? this.renderMessageValid() : this.renderMessageInvalid() }
    validateEmailPatterns(e) { return !u.matchPattern(e, this.getEmailInvalidPattern()) && u.matchPattern(e, this.getEmailValidPattern()) }
    renderEmailOccupiedMessage() {
        const e = $(this.element).attr("id");
        $(this.element).attr(t.getAriadescribedby(), "occupiedemail-" + e), $(this.getEmailOccupiedSelector(), this.getContext()).text(""), $(this.getEmailOccupiedSelector(), this.getContext()).show(), $(this.getEmailOccupiedSelector(), this.getContext()).text(t.getMessage("occupiedemail")), this.renderFieldInvalid(this.element)
    }
    setFocusOnRelatedTarget(e) {
        const i = t.getRelatedTargetId(e);
        void 0 !== i && $("#" + i).focus()
    }
    renderEmailNotOccupiedMessage() { $(this.getEmailOccupiedSelector(), this.getContext()).text(""), $(this.element).removeAttr(t.getAriadescribedby()) }
    getEmailInvalidPattern() { return new RegExp("(\\.\\.)|(@\\.)|(\\.@)|(^\\.)") }
    getEmailValidPattern() { return new RegExp("^([+\\-\\w.]+)@((\\[?[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}]?)|((([\\-\\w]{1,63}\\.)+)([a-zA-Z]{2,63})))$") }
}
class h extends l {
    constructor(e) { super(e), this.name_field = 'input[name$="Name"]:not([readonly])', this.initEvents() }
    initEvents() {
        const e = this;
        $(this.element).on({ input: function() { e.setInitiated(), l.matchPattern(e.getValue(), e.getNamePattern()) && e.renderMessageValid(), e.isValidated() && e.validateField(e.getNamePattern()) }, blur: function() { e.setValidated(), e.validateField(e.getNamePattern()) } })
    }
    getNamePattern() { return new RegExp("^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ   ᠎ -  ​ F 　\ufeff'´-]+$") }
}
class p extends l {
    constructor(e) { super(e), this.initEvents() }
    initEvents() {
        const e = this;
        $(this.element).on({ input: function() { e.setInitiated(), l.matchPattern(e.getValueTrim(), e.getPhonePattern()) && e.renderMessageValid(), e.isValidated() && e.validateFieldTrim(e.getPhonePattern()) }, blur: function() { e.setValidated(), e.validateFieldTrim(e.getPhonePattern()) } })
    }
    getPhonePattern() { return new RegExp("^(\\+|[0-9])(?:[0-9()-]){4,14}[0-9]$") }
}
class m {
    constructor(e) { this.element = e, this.initEvents() }
    initEvents() { $(this.element).on({ click: function() { return window.location = "/" + t.getLang() + "/login", !1 } }) }
}
class g {
    constructor(e) { this.element = e, this.initEvents() }
    initEvents() { $(this.element).on({ click: function() { return window.location = "/" + t.getLang() + "/selections", !1 } }) }
}
class f {
    constructor(e) { this.element = e, this.initEvents() }
    initEvents() { $(this.element).on({ click: function() { return window.location = "/" + t.getLang() + "/logout", !1 } }) }
}
class b {
    constructor(e) { this.element = e, this.initEvents() }
    initEvents() {
        const e = this,
            i = "expanded";
        $(this.element).on({ click: function() { return $(e.element).toggleClass(i), $(e.element).siblings(".mypages-container").toggleClass(i), $(e.element).attr("aria-expanded", $(e.element).hasClass(i)), !1 } }), $(document).mouseup((function(t) { if (!$(t.target).closest(".menu-button-container.mypages").length) return $(e.element).removeClass(i), $(e.element).siblings(".mypages-container").removeClass(i), !1 })), $(document).on("keyup", (function(s) { if (t.isEsckey(s)) return $(e.element).removeClass(i), $(e.element).siblings(".mypages-container").removeClass(i), !1 }))
    }
}
class v {
    constructor(e) { this.element = e, this.initEvents() }
    initEvents() {
        const e = this,
            i = "expanded";
        $(this.element).on({ click: function() { return $(e.element).toggleClass(i), $(e.element).siblings(".menu-container").toggleClass(i), $(e.element).attr("aria-expanded", $(e.element).hasClass(i)), $("body").toggleClass("hasoverlay"), !1 } }), $(".menu-container .close-button").on({ click: function() { return $(e.element).removeClass(i), $(e.element).siblings(".menu-container").removeClass(i), $(e.element).attr("aria-expanded", !1), $("body").removeClass("hasoverlay"), !1 } }), $(document).mouseup((function(t) { $(".menu-button-container.navigation .menu-container").is(":visible") && !$(t.target).closest(".menu-button-container.navigation").length && ($(e.element).removeClass(i), $(e.element).siblings(".menu-container").removeClass(i), $("body").removeClass("hasoverlay")) })), $(document).on("keyup", (function(s) { t.isEsckey(s) && ($(e.element).removeClass(i), $(e.element).siblings(".menu-container").removeClass(i), $("body").removeClass("hasoverlay")) }))
    }
}
class w {
    constructor(e) { this.element = e, this.initEvents() }
    initEvents() {
        const e = this,
            t = "expanded";
        $(this.element).on({
            click: function() {
                $(e.element).toggleClass(t), $(e.element).closest(".menu-heading").toggleClass(t), $(e.element).attr("aria-expanded", $(e.element).hasClass(t));
                var i = $(e.element).closest(".menu-part").find(".menu-body");
                i.hasClass(t) ? i.slideUp("fast", (function() { i.toggleClass(t) })) : (i.toggleClass(t), i.slideDown("fast", (function() {})))
            }
        })
    }
}
class y {
    constructor() { this.password_field = "input[type=password]:not([data-initiated])", this.email_field = "input[type=email]:not([data-initiated])", this.name_field = 'input[name$="Name"]:not([readonly]):not([data-initiated])', this.phone_field = "input[type=tel]:not([data-initiated])", this.select = ".dropdown select:not([data-initiated])", this.checkbox = ".checkbox.dependent input[type=checkbox]:not([data-initiated])", this.accordion = ".accordion .expand-button:not([data-initiated])", this.datepicker = ".datepicker input[type=date]:not([data-initiated]),.datepicker select:not([data-initiated])", this.pnr = "#pnr", this.multi_select = ".multi-select", this.logiIn_button = ".login-button:not([data-initiated])", this.selEection_button = ".selection-button:not([data-initiated])", this.logout_button = ".mypages-logout-link .outlined-button:not([data-initiated])", this.mypages_button = ".menu-toggle-button-notification.mypages-button:not([data-initiated])", this.navigation_button = ".menu-toggle-button-burger.menu-button:not([data-initiated])", this.navigation_toggle_button = ".navigation-toggle-button:not([data-initiated])", this.popup = ".popup-component:not([data-initiated])", this.initEvents(), this.generateObjects() }
    generateObjects() {
        const e = "data-initiated";
        $(this.datepicker).each((function(t, i) { new a(i), $(i).attr(e, "") })), $(this.multi_select).each((function(t, i) { new n(i), $(i).attr(e, "") })), $(this.accordion).each((function(t, s) { new i(s), $(s).attr(e, "") })), $(this.select).each((function(t, i) { new o(i), $(i).attr(e, "") })), $(this.checkbox).each((function(t, i) { new r(i), $(i).attr(e, "") })), $(this.password_field).each((function(t, i) { new c(i), $(i).attr(e, "") })), $(this.email_field).each((function(t, i) { new u(i), $(i).attr(e, "") })), $(this.name_field).each((function(t, i) { new h(i), $(i).attr(e, "") })), $(this.phone_field).each((function(t, i) { new p(i), $(i).attr(e, "") })), $(this.pnr).each((function(t, i) { new d(i), $(i).attr(e, "") })), $(this.login_button).each((function(t, i) { new m(i), $(i).attr(e, "") })), $(this.selection_button).each((function(t, i) { new g(i), $(i).attr(e, "") })), $(this.logout_button).each((function(t, i) { new f(i), $(i).attr(e, "") })), $(this.mypages_button).each((function(t, i) { new b(i), $(i).attr(e, "") })), $(this.navigation_button).each((function(t, i) { new v(i), $(i).attr(e, "") })), $(this.navigation_toggle_button).each((function(t, i) { new w(i), $(i).attr(e, "") })), $(this.popup).each((function(t, i) { new s(i), $(i).attr(e, "") }))
    }
    initEvents() {
        const e = this;
        $(document).on("ajaxComplete", (function() { e.generateObjects() }))
    }
}
class x {
    constructor() { this.element = ".subject-container", this.close_button = ".subject-container .close-button", this.toggle_expand = ".subject-container .toggle-expand", this.selectable_item = ".subject-container .selectable-item", $(this.element).attr("data-initiated", ""), this.initEvents() }
    initEvents() {
        const e = this;
        $(e.close_button).on("click", (function() { e.closeSubjectList() })), $(e.selectable_item).on("click", (function() { x.clearSelection(), e.updateTriggerName($(this).find(".subjectname")), e.updateSelectedItem($(this)), e.closeSubjectList(), $(e.element).trigger("change") })), $(e.toggle_expand).on("click", (function() { e.toggleExpand($(this)) })), $(e.element).on("keydown", (function(i) { t.trapTabKey(i, $(this).find(".close-button"), $(this).find("button:visible:last")); const s = $(i.target); return t.isEsckey(i) ? (e.closeSubjectList(), !1) : t.isArrowdown(i) ? (e.moveToNextElement(s), !1) : t.isArrowup(i) ? (e.moveToPreviousElement(s), !1) : t.isHomeKey(i) ? (e.getFirstElement().focus(), !1) : t.isEndKey(i) ? (e.getLastElement().focus(), !1) : t.isArrowright(i) ? (e.handleArrowRight(s), !1) : t.isArrowleft(i) ? (e.handleArrowLeft(s), !1) : t.isSpacekey(i) || t.isEnterkey(i) ? (s.trigger("click"), !1) : void 0 })), $(document).on("click", (function(t) { if (e.isSubjectListVisible() && e.isClickOutsideSubjectList(t)) return e.closeSubjectList(), !1 }))
    }
    handleArrowRight(e) { e.hasClass("toggle-expand") && (this.isExpanded(e) ? this.moveToNextElement(e) : x.expandItem(e)) }
    handleArrowLeft(e) { this.isExpanded(e) ? e.hasClass("expanded") && x.collapseItem(e) : 0 !== e.closest("li").length && this.moveToParent(e) }
    getFirstElement() { return $(this.element).find("li:visible").first().children("button") }
    getLastElement() { return $(this.element).find("li:visible").last().children("button") }
    moveToParent(e) { e.parents(".list").siblings(x.getToggleExpand()).focus() }
    moveToNextElement(e) {
        const t = $(".subject-container button:not(.close-button):visible"),
            i = t.index(e) + 1;
        t.eq(i).focus()
    }
    moveToPreviousElement(e) {
        const t = $(".subject-container button:not(.close-button):visible"),
            i = t.index(e) - 1;
        i >= 0 && t.eq(i).focus()
    }
    isExpanded(e) { return e.hasClass("expanded") }
    isLastChild(e) { return $(e.target).closest("li").is(":last-child") }
    isFirstChild(e) { return $(e.target).closest("li").is(":first-child") }
    updateTriggerName(e) {
        const t = e.text().trim().replace(/^\w/, (e => e.toUpperCase()));
        $("#subjectstrigger .selected-name").html(t)
    }
    updateSelectedItem(e) { e.attr(t.getAriaPressed(), "true"), e.closest("li").addClass("selected").attr(t.getAriaSelected(), "true") }
    isSubjectListVisible() { return $(this.element).is(":visible") }
    isClickOutsideSubjectList(e) { return !$(e.target).closest(this.element).length }
    closeSubjectList() { t.closeLightbox(), setTimeout((function() { $("#subjectstrigger").focus() }), 300) }
    toggleExpand(e) { e.hasClass("expanded") ? x.collapseItem(e) : x.expandItem(e) }
    static clearSelection() { $(".list-item.selected").removeClass("selected").removeAttr(t.getAriaSelected()).find(this.getSelectableItem()).attr(t.getAriaPressed(), "false") }
    static expandItem(e) {
        const i = e.closest(".list-item").find(".list-body").first();
        e.addClass("expanded"), e.attr(t.getAriaExpanded(), !0), $(i).slideDown("fast")
    }
    static collapseItem(e) {
        const i = e.closest(".list-item").find(".list-body").first();
        e.removeClass("expanded"), e.attr(t.getAriaExpanded(), !1), $(i).slideUp("fast")
    }
    static makeSelectionVisible() {
        const e = $("#subjecttree .selected").parents(".list").siblings(this.getToggleExpand());
        $(e).each((function(e, t) { x.expandItem($(t)) })), this.getSelectedItem().focus()
    }
    static getSelectedItem() { return $(".list-item.selected").find(this.getSelectableItem()) }
    static onClearFilter() { $("#subjecttree").find(".selected").attr(t.getAriaPressed(), "false").closest("li").removeClass("selected").removeAttr("aria-selected"), $("#clearsubject").attr(t.getAriaPressed(), "true").closest("li").addClass("selected").attr("aria-selected", "true"), $("#subjectstrigger .selected-name").html($(".default-value").text()), this.collapseAllTreeItems() }
    static collapseAllTreeItems() { $(".toggle-expand").each((function(e, t) { x.collapseItem($(t)) })) }
    static getSelectableItem() { return ".selectable-item" }
    static getToggleExpand() { return ".toggle-expand" }
}
class k {
    constructor() { this.html = "html", this.freetext = "#freetext", this.searchresult = ".searchresult", this.filterlist = ".filterlist", this.expanded = "#expanded", this.showallfilters = "#showallfilters", this.expandtext = ".expand-text", this.contracttext = ".contract-text", this.searchform = "#searchform", this.showfilters = "#showfilters", this.searchresultcard = ".searchresultcard", this.aria_labelledby = "aria-labelledby", this.aria_expanded = "aria-expanded", this.setup(), this.setupAutocomplete() }
    setup() {
        const e = this;
        $(document).ready((function() {
            if ($(e.searchform).length > 0) {
                e.updateDynamicFilterValues();
                const t = e.readQueryParamsFromForm();
                e.updateInitialSearchForm(t)
            }
        })), $(document).on("change", "#searchform, #sortselect, #subjecttree", (function(i, s) {
            const n = e.readQueryParamsFromForm();
            e.executeSearch(n, (function(i) { $(e.searchresult).html(i), e.updateDynamicFilterValues(), window.history.pushState(null, null, t.getTrack() + "/search" + n), t.scrollTo($("#filterchangetarget"), 100) }), (function() { return null != s ? s : i.target })), e.updateInitialSearchForm(n)
        })), $(document).on("submit", "#searchform", (function(e) { return e.preventDefault(), !1 })), $(document).on("click", this.showfilters, (function() { $(e.filterlist).show(), $(e.searchresult).hide(), $("footer").hide(), $(e.html).animate({ scrollTop: 0 }, 0) })), $(document).on("click", "#showresults", (function() { $(e.filterlist).hide(), $(e.searchresult).show(), $("footer").show(), t.scrollTo($("#showfilterscontainer"), 0) })), $(document).on("click", e.showallfilters, (function() { $(e.expanded).css("display", "block"), $(e.showallfilters).hide(), $("body").addClass("using-keyboard"), $("#period-help").focus() })), $(document).on("click", "#subjectstrigger", (function() { t.openLightbox(this, $("#subjecttree"), { wrapperclass: "subject_lightbox", persistentwindow: !0, destroy: !1 }); return 0 !== $(".subject-container:not([data-initiated])").length && new x, x.makeSelectionVisible(), !1 })), $(document).on("click", "#hidefilters", (function() { $(e.expanded).css("display", ""), setTimeout((function() { $(e.showallfilters).show(), $("body").addClass("using-keyboard"), $(e.showallfilters).focus() }), 300) })), $(document).on("click", ".filtertop .close", (function() { $(e.filterlist).hide(), $(e.searchresult).show(), $("footer").show(), setTimeout((function() { $(e.showfilters).focus() }), 300) })), $(document).on("click", ".expand-button.showmoreinfo", (function() {
            const i = this.closest(e.searchresultcard),
                s = ".resultcard_expanded",
                n = $(i).find(".showmoreinfo"),
                a = n.attr("id");
            n.toggleClass("expanded"), n.find(e.expandtext).toggle(), n.find(e.contracttext).toggle(), n.hasClass("expanded") ? (n.attr(e.aria_labelledby, "contract-text-" + a), n.attr(e.aria_expanded, !0), $(i).find(s).show(), t.setupNonExpandableInformationBlock()) : (n.attr(e.aria_labelledby, "expand-text-" + a), n.attr(e.aria_expanded, !1), $(i).find(s).hide())
        })), $(document).on("click", "#searchmorehits", (function() {
            const i = $("#searchmorehits").data("url"),
                s = i.replace("page", "numberOfFetchedPages");
            return e.executeSearch(i, (function(e) { $("#showmorehits").replaceWith(e), window.history.pushState(null, null, t.getTrack() + "/search" + s) }), (function() { return $(".resultsection").last().find("button").first() })), !1
        })), $(document).on("click", ".searchresultcard button[name='toggleselection']", (function() {
            const i = this,
                s = $(i).data("id"),
                n = $(i).data("semester");
            $(i).hasClass("remove") ? t.httpPostWithNyaHeaderHandling(t.getTrack() + "/selections/remove?id=" + s, "", (function() { $(i).removeClass("outlined-button"), $(i).removeClass("remove"), $(i).addClass("containeed-button"), $(i).find(e.expandtext).show(), $(i).find(e.contracttext).hide(), $(i).attr(e.aria_labelledby, "expand-text-info-" + s), e.updateSelectionNotifications(!1) })) : t.httpPostWithNyaHeaderHandling(t.getTrack() + "/selections/add?id=" + s + "&period=" + n, "", (function() { $(i).addClass("outlined-button"), $(i).addClass("remove"), $(i).removeClass("containeed-button"), $(i).find(e.expandtext).hide(), $(i).find(e.contracttext).show(), $(i).attr(e.aria_labelledby, "contract-text-info-" + s), e.updateSelectionNotifications(!0) }))
        })), $("body").on("click", ".expandable-heading, .minimize-button", (function() {
            const t = $(this).closest(".expandable-block"),
                i = t.find(".expandable-body"),
                s = t.find(".expandable-heading"),
                n = t.find(".minimize-button");
            if (t.hasClass("expanded")) {
                const a = $(window).scrollTop(),
                    o = s.offset().top,
                    r = n.offset().top;
                if ($(this).hasClass("minimize-button")) {
                    const e = a - (r - o);
                    $("html, body").animate({ scrollTop: e }, 250)
                }
                $(i).slideUp(250, (function() { t.toggleClass("expanded"), s.attr(e.aria_expanded, (function(e, t) { return "true" === t ? "false" : "true" })), s.focus() }))
            } else $(i).slideDown(250, (function() { s.attr(e.aria_expanded, (function(e, t) { return "true" === t ? "false" : "true" })) })), t.toggleClass("expanded")
        })), $(document).on("click", ".searchresultcard button[name='favouritestoggle']", (function() {
            const i = this.id.split("-");
            $(this).hasClass("favourite-active") ? (t.httpPostWithNyaHeaderHandling(t.getTrack() + "/search/favorite/add", { year: i[0], semester: i[1], period: i[2], applCode: i[3] + "-" + i[4] }), e.updateFavouriteNotifications(!0)) : (t.httpPostWithNyaHeaderHandling(t.getTrack() + "/search/favorite/remove", { year: i[0], semester: i[1], period: i[2], applCode: i[3] + "-" + i[4] }), e.updateFavouriteNotifications(!1))
        })), $(document).on("change", "#sortfavourites", (function() { $("#sortfavourites").submit() })), $(document).on("click", "#clearfilter", (function() { $(e.searchform).find(":input").not(":button, :submit, :reset, :hidden, :checkbox, :radio").val(""), $(e.searchform).find("select").val(""), $(e.searchform).find(":checkbox, :radio").prop("checked", !1), $(e.searchform).find(".radiobutton.push input:first-child").prop("checked", !0), $("#sortselect").prop("selectedIndex", 0), $("#distanceWithoutMeetings").prop("disabled", !0), $("#advancedLevel").prop("disabled", !1), $("#noPrerequisite").prop("disabled", !1), x.onClearFilter(), $(e.searchform).trigger("change", $(this)) })), $(document).on("click", ".gotoprogress", (function() { $("#selection-stepper").show(), $(".selections").hide(), $("footer").hide(), $(this).hide() })), $(document).on("click", "#selection-stepper .close", (function() { $("#selection-stepper").hide(), $(".selections").show(), $("footer").show(), setTimeout((function() { $(".gotoprogress").show(), $(".gotoprogress a").focus() }), 300) })), $(document).on("click", "#toapplicationlink", (function(e) { $(".to_application").focus(), e.preventDefault() }))
    }
    updateDynamicFilterValues() { this.updateDynamicButtonCounter("#showresults", "#totalhits"), this.updateDynamicButtonCounter("#clearfilter", "#numberofactivefilters"), this.updateDynamicFilterCounter(this.showfilters, "#numberofactivefilters") }
    updateDynamicButtonCounter(e, t) {
        const i = void 0 !== $(t).val() ? $(t).val() : 0;
        $(e).find(".dynamic-content").html("(" + i + ")")
    }
    updateDynamicFilterCounter(e, t) {
        const i = void 0 !== $(t).val() ? $(t).val() : 0,
            s = 0 === parseInt(i.toString()) ? "" : i;
        $(e).find(".dynamic-content").html(s), s > 0 ? $(".notification-filter-counter").show().css("display", "flex") : $(".notification-filter-counter").hide()
    }
    updateFavouriteNotifications(e) {
        const t = $("#numberoffavourites"),
            i = void 0 !== $(t).val() ? $(t).val() : 0,
            s = e ? parseInt(i.toString()) + 1 : parseInt(i.toString()) - 1;
        this.updateFavouriteNotificationsOnElements(s, e)
    }
    updateFavouriteNotificationsOnElements(e, t) {
        if ($(".favouritestab .dynamic-content").html("(" + e + ")"), $("#numberoffavourites").val(e), e > 0 && t) {
            const e = $(".selection-button .beforeanimation .favourites-notification"),
                t = $(".selection-button .afteranimation .favourites-notification"),
                i = $(".selection-button .afteranimation .selection-counter-notification"),
                s = $(".selection-button .selection-notification"),
                n = 250,
                a = 600,
                o = 750,
                r = 1200;
            t.hide(), s.hide(), i.hide(), e.show(), $(e).delay(o).fadeOut(a), $(s).delay(r).fadeIn(n), $(i).delay(r).fadeIn(n), $(t).delay(r).fadeIn(n)
        } else e < 1 && $(".selection-button .favourites-notification").hide()
    }
    updateSelectionNotifications(e) {
        const t = $("#numberofselections"),
            i = void 0 !== $(t).val() ? $(t).val() : 0,
            s = e ? parseInt(i.toString()) + 1 : parseInt(i.toString()) - 1;
        this.updateSelectionNotificationsOnElements(s, e)
    }
    updateSelectionNotificationsOnElements(e, t) { $(".selectionstab .dynamic-content").html("(" + e + ")"), e > 0 ? ($(".selection-counter-notification").html(e), $(".selection-button").addClass("has_selection")) : ($(".selection-counter-notification").html(""), $(".selection-button").removeClass("has_selection")), $(".selection_progress_counter .dynamic-content").html(e), $("#numberofselections").val(e), t && $(".selectionnotification").show().delay(2e3).fadeOut() }
    executeSearch(e, i, s) {
        const n = this;
        $(".resultcard_expanded").hide(), $(n.searchresultcard).addClass("skeleton_animation"), t.httpGetWithNyaHeaderHandling(t.getTrack() + "/searchajax" + e, (function(e) { setTimeout((function() { i(e) }), 250) })).always((function() { setTimeout((function() { s().focus(), n.addScreenReaderAlert(".searchresult_summary"), $(n.searchresultcard).removeClass("skeleton_animation"), new y }), 250) }))
    }
    addScreenReaderAlert(e) { $(document).ready((function() { $(e).length > 0 && $(e).attr("role", "alert") })) }
    readQueryParamsFromForm() {
        let e = "?";
        const t = $("#searchform :input:not([type='checkbox'])").serializeArray();
        $.each(t, (function(t, i) {
            if ("" !== i.value) {
                const t = i.name + "=" + i.value;
                e += t + "&"
            }
        }));
        const i = $("#searchform input[type='checkbox']").map((function() { if (this.checked) { if ("" !== this.value) return this.name + "=" + this.value + "&"; if (!$(this).closest(".multi-select").length) return this.name + "=" + this.checked + "&" } return "" })).get().join("");
        e += i;
        const s = $("#subjecttree .selected button"),
            n = 0 !== s.length,
            a = !s.hasClass("default-value");
        if (n && a) {
            const t = "subject=" + s.data("subject") + "&";
            e += t
        }
        const o = $("#sortselect"),
            r = o.attr("name"),
            l = o.children("option:selected").val();
        return e += r + "=" + l, e
    }
    updateInitialSearchForm(e) {
        e = e.replace("?", ""), $("#search_initial").find("input[type='hidden']").remove();
        const t = e.split("&");
        $.each(t, (function(e, t) {
            const i = t.split("=");
            if ("freeText" === i[0] || "period" === i[0]) return !0;
            $("<input>").attr("type", "hidden").attr("name", i[0]).val(i[1]).appendTo("#search_initial")
        }))
    }
    setupAutocomplete() {
        const e = this,
            i = $(this.freetext).autocomplete({ minLength: 2, appendTo: "#freeTextSuggestions", source: function(t, i) { $.ajax({ contentType: "application/json; charset=utf-8", url: "autocomplete", dataType: "json", data: { term: $(e.freetext).val(), semester: $('select[name="period"]').val() }, success: function(e) { i($.map(e, (function(e) { return { label: e.label, highlight: e.highlight, type: e.type } }))) } }) }, focus: function(e, t) { t.item.hasOwnProperty("type") || $(this).autocomplete("widget").menu("next"), e.preventDefault() }, open: function() { $(this).autocomplete("widget").removeAttr("tabindex") }, select: function(t, i) { $(e.freetext).val(i.item.value), $("#searchbutton").click() } });
        $(this.freetext).length > 0 && (i.data("ui-autocomplete")._renderMenu = function(e, i) {
            const s = this,
                n = function(t, i, n) {
                    if (0 === i.length) return;
                    let a = "";
                    n && (a = " divider-titles"), $("<li class='ui-menu-divider" + a + "'><div class='searchdivider'>" + t + "</div></li>").data("ui-autocomplete-item", {}).appendTo(e), $.each(i, (function(t, i) { s._renderItem(e, i) }))
                },
                a = $.grep(i, (function(e) { return "word" === e.type })),
                o = $.grep(i, (function(e) { return "title" === e.type }));
            n(t.getMessage("search_suggestions_words"), a, !1), n(t.getMessage("search_suggestions_titles"), o, !0)
        }, i.data("ui-autocomplete")._renderItem = function(e, t) { return $("<li></li>").data("ui-autocomplete-item", t).append("<div><span>" + t.highlight + "</span></div>").appendTo(e) })
    }
}
class C {
    constructor() { this.setup() }
    setup() {
        const e = this;
        0 !== $(".createaccountpage").length && ($("#pnrquestionyes").on("click", (function() { e.handlePnrquestionAjaxcall("/createaccountpnr", !0) })), $("#pnrquestionno").on("click", (function() { e.handlePnrquestionAjaxcall("/createaccountemail", !1) })), $(document).on("submit", "#createaccountpnrimport", (function() {
            const i = $(this),
                s = $("#pnr", i);
            return t.awebShowSpinner(), e.importFromFolkbokforing(i, s), !1
        })), $(document).on("click", "#tryagain", (function(t) { e.handlePnrquestionAjaxcall("/createaccountpnr", !0), t.preventDefault() })))
    }
    handlePnrquestionAjaxcall(e, i) { $.ajax({ url: t.getTrack() + e, cache: !1, type: "GET", data: { hasPersonalId: i }, success: function(e) { $(".formplaceholder").html(e), i || "true" !== $(e).find("#isEnabledCaptcha").val() || t.showRecaptcha("recaptcha_placeholder") } }) }
    importFromFolkbokforing(e, i) { $.ajax({ url: e.attr("action"), data: e.serializeArray(), cache: !1, type: "GET", success: function(e, i, s) { if ($(".formplaceholder").html(e), s.getResponseHeader("error")) return !1; "true" === $(e).find("#isEnabledCaptcha").val() && t.showRecaptcha("recaptcha_placeholder"), $("#pnr").focus() }, error: function() { t.showFormErrorOnAjaxComplete(e, i) }, complete: function() { t.handleErrorFocus(), t.awebHideSpinner() } }) }
}
class E {
    constructor() { this.setup() }
    setup() { 0 !== $("#login").length && this.setupLoginform() }
    setupLoginform() {
        const e = this;
        $(document).on("submit", "#login", (function() {
            const e = $(this),
                i = $("#username", e);
            return t.awebShowSpinner(), $(e).find(".errormessageblock").hide(), $(e).find(".loginErrorMaxLoginAttemptsCaptcha").hide(), t.httpPostWithNyaHeaderHandling(t.getTrack() + "/loginajax", $(e).serializeArray(), (function(s) { t.awebHideSpinner(), "/se/" === s.substring(0, 4) || "/intl/" === s.substring(0, 6) ? window.location = s : "person.loginfailedtoomanytimes" === s ? ($(e).find(".loginErrorMaxLoginAttemptsCaptcha").show(), t.showRecaptcha("recaptcha_placeholder"), t.showFormErrorOnAjaxComplete(e, i, t.getMessage("error_login_attempts")), t.clearPasswordField()) : (t.showFormErrorOnAjaxComplete(e, i, s), t.clearPasswordField()) })).fail((function() { t.showFormErrorOnAjaxComplete(e, i), t.awebHideSpinner() })), !1
        })), $(document).on("submit", "#login_eduid", (function() {
            const i = $(this),
                s = $("button", i);
            return t.awebShowSpinner(), e.otherloginAjaxCall(i, s), !1
        })), $(document).on("submit", "#login_uh", (function() {
            const i = $(this),
                s = $("#universities", i);
            return t.awebShowSpinner(), e.otherloginAjaxCall(i, s), !1
        })), $(document).on("focusout", "#username", (function() { return t.toUpperCasePnr(this), !1 })), $(document).on("keypress", "#userId", (function(e) { if (13 === e.which || 13 === e.keyCode) return t.toUpperCasePnr(this), !0 }))
    }
    otherloginAjaxCall(e, i) { $.ajax({ url: e.attr("action"), data: e.serializeArray(), cache: !1, success: function(s) { "error" === s ? t.showFormErrorOnAjaxComplete(e, i) : window.location = s }, error: function() { t.showFormErrorOnAjaxComplete(e, i) }, complete: function() { t.awebHideSpinner() }, type: "POST" }) }
}
class P {
    constructor() { this.setup() }
    setup() { 0 !== $(".styleguide").length && $(document).on("click", "#menubutton", (function() { $(".sidebar").toggleClass("visible") })) }
}
class T {
    constructor() { this.setup() }
    setup() { $(document).on("click keydown", "body", (function() { if ($("#abouttobeloggedout:visible").length > 0) return $("#logoutwindowlayer").hide(), IdleChecker.closeLightbox(), $.get(t.getTrack() + "/keepAlive"), IdleChecker.startNewSession(), !1 })), $(document).on("keydown", "#sessiontimedout", (function(e) { t.trapTabKey(e, $(this).find(".continue"), $(this).find(".continue")) })), $(".mypages-button").is(":visible") && $.IdleChecker({ Cookie: "IdleCheckerTimeOut", CookieExpires: 1, CookiePath: "/", CookieSecure: !0, TimeOutAfter: 26e5, CountDownFor: 6e4, CheckInterval: 2e4, keepAliveUrl: t.getTrack() + "/keepAlive" }) }
}
$((function() {
    $(".searchpage, .startpage, .selectionspage, .loginpage, .mypages").length <= 0 && $(".styleguide").length <= 0 || (new y, new k, new C, new E, new P, new T, t.setupCsrfPrevention(), $(document).on("keydown keypressed", (function(e) {
        (t.isTabkey(e) || t.isEnterkey(e)) && $("body").addClass("using-keyboard")
    })), $(document).on("mousedown", (function() { $("body").removeClass("using-keyboard") })), $(document).on("focusout", "#userId", (function() { return t.toUpperCasePnr(this), !1 })), $(document).ready((function() { t.handleErrorFocus() })), $(document).on("change", ".checkbox .superordinate", (function() { t.onSuperordinateElementChanged($(this), $(this).closest("fieldset").find(".subordinate")) })))
}));