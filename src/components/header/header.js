import React from 'react';
import './header.css';
//import './page-settings.css';



const Header = () => (

<header>
    {/* <!-- Logo Section Start --> */}
    <div id="header" class="header">
    <a href="Landing page.html" class="a-logo">
        <picture>
            <source media="(max-width:350px)" srcset="/images/designsystem/logo/unilogo.png" />
            <img src="../images/designsystem/logo/unilogo.png" alt="To startpage" />
        </picture>
    </a>
    {/* <!-- Logo Section End --> */}

    <div class="menu-buttons">
        <div class="menu-button-container mypages">
            <button class=" menu-link-button login-button" type="button" name="login">
                Log in <span class="dynamic-content"></span>
            </button>
        </div> 
        <div class="menu-button-container selection">
            <button class="menu-toggle-button-notification selection-button" type="button" name="selection">
                My selection
                <span class="selection-notification"></span>
                <span class="beforeanimation">
                    <span class="favourites-notification"></span>
                </span>
                <span class="afteranimation">
                    <span class="selection-counter-notification">
                    </span>
                    <span class="favourites-notification">
                    </span>
                </span>
            </button>
        </div>
        <div class="menu-button-container navigation">
            <button class="menu-toggle-button-burger menu-button" type="button" name="menu" aria-haspopup="true">
                <span class="burger"><span></span><span></span><span></span></span>
                Menu
            </button>
            <div class="menu-container">
                <div class="navigation-heading">Menu<button class="close-button"><span
                            class="screen-reader-only">Close main navigation</span></button></div>
                <nav aria-label="Main navigation">
                    <ul class="plain-list menu-part">
                        <li class="menu-heading ">
                            <div class="menu-wrapper">
                                <a href="Signup-Page.html" class="plain-link menu-heading-item-link  ">
                                    <i class="fa fa-user-plus" aria-hidden="true"></i>&nbsp Sign Up Here
                                </a>

                            </div>

                            <ul class="plain-list menu-body  hide">
                            </ul>
                        </li>
                    </ul>
                    <ul class="plain-list menu-part">
                        <li class="menu-heading ">
                            <div class="menu-wrapper">
                                <a href="redirect-page.html" class="plain-link menu-heading-item-link  ">
                                    Search for courses
                                </a>

                            </div>

                            <ul class="plain-list menu-body  hide">
                            </ul>
                        </li>
                    </ul>
                    <ul class="plain-list menu-part">
                        <li class="menu-heading ">
                            <div class="menu-wrapper">
                                <a href="redirect-page.html" class="plain-link menu-heading-item-link  ">
                                    Key dates and dead3lines
                                </a>
                                <button class="navigation-toggle-button " aria-haspopup="true" aria-expanded="false">
                                    <span class="expand-icon"></span>
                                    <span class="screen-reader-only">Submenu for Key dates and deadlines</span>
                                </button>
                            </div>
                            <ul class="plain-list menu-body  hide">
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Autumn
                                        semester dates</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Spring
                                        semester dates</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Admission
                                        rounds and spring semester availability</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="plain-list menu-part">
                        <li class="menu-heading ">
                            <div class="menu-wrapper">
                                <a href="redirect-page.html" class="plain-link menu-heading-item-link  ">
                                    Entry requirements
                                </a>
                                <button class="navigation-toggle-button " aria-haspopup="true" aria-expanded="false">
                                    <span class="expand-icon"></span>
                                    <span class="screen-reader-only">Submenu for Entry requirements</span>
                                </button>
                            </div>
                            <ul class="plain-list menu-body  hide">
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Bachelor&#39;s
                                        requirements</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Master&#39;s
                                        requirements</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">English
                                        language requirements</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="plain-list menu-part">
                        <li class="menu-heading ">
                            <div class="menu-wrapper">
                                <a href="redirect-page.html" class="plain-link menu-heading-item-link  ">
                                    Apply to master&#39;s
                                </a>
                                <button class="navigation-toggle-button " aria-haspopup="true" aria-expanded="false">
                                    <span class="expand-icon"></span>
                                    <span class="screen-reader-only">Submenu for Apply to master&#39;s</span>
                                </button>
                            </div>
                            <ul class="plain-list menu-body  hide">
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Create
                                        a user account</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Search
                                        for courses and programmes</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Rank
                                        your selections</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Provide
                                        application documents</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Pay
                                        your application fee (non-EU/EEA)</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Document
                                        your citizenship (EU/EEA)</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">If
                                        you&#39;ve previously applied</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Applying
                                        after the deadline</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="plain-list menu-part">
                        <li class="menu-heading ">
                            <div class="menu-wrapper">
                                <a href="redirect-page.html" class="plain-link menu-heading-item-link  ">
                                    Apply to bachelor&#39;s
                                </a>
                                <button class="navigation-toggle-button " aria-haspopup="true" aria-expanded="false">
                                    <span class="expand-icon"></span>
                                    <span class="screen-reader-only">Submenu for Apply to bachelor&#39;s</span>
                                </button>
                            </div>
                            <ul class="plain-list menu-body  hide">
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Short
                                        overview</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Create
                                        a user account</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Search
                                        for courses and programmes</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Rank
                                        your selections</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Provide
                                        application documents</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Pay
                                        your application fee (non-EU/EEA)</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Document
                                        your citizenship (EU/EEA)</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Have
                                        you previously applied?</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Applying
                                        after the deadline</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="plain-list menu-part">
                        <li class="menu-heading ">
                            <div class="menu-wrapper">
                                <a href="redirect-page.html" class="plain-link menu-heading-item-link  ">
                                    Selection and admissions results
                                </a>
                                <button class="navigation-toggle-button " aria-haspopup="true" aria-expanded="false">
                                    <span class="expand-icon"></span>
                                    <span class="screen-reader-only">Submenu for Selection and admissions
                                        results</span>
                                </button>
                            </div>
                            <ul class="plain-list menu-body  hide">
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Selection
                                        process master&#39;s</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Selection
                                        process bachelor&#39;s</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Admissions
                                        results</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Replying
                                        to your offer - second round</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Waiting
                                        list and late applications</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Reapplying</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Withdrawing</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="plain-list menu-part">
                        <li class="menu-heading ">
                            <div class="menu-wrapper">
                                <a href="redirect-page.html" class="plain-link menu-heading-item-link  ">
                                    Fees, scholarships, residence permit
                                </a>
                                <button class="navigation-toggle-button " aria-haspopup="true" aria-expanded="false">
                                    <span class="expand-icon"></span>
                                    <span class="screen-reader-only">Submenu for Fees, scholarships, residence
                                        permit</span>
                                </button>
                            </div>
                            <ul class="plain-list menu-body  hide">
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Who
                                        is required to pay fees?</a>

                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Pay
                                        your application fee</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Document
                                        your citizenship EU/EEA</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Brexit
                                        information</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Pakistan
                                        personal ID and residence permits</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Currently
                                        studying in Pakistan?</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Paying
                                        your tuition fees</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Scholarships</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Residence
                                        permit for studies</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="plain-list menu-part">
                        <li class="menu-heading ">
                            <div class="menu-wrapper">
                                <a href="redirect-page.html" class="plain-link menu-heading-item-link  ">
                                    Find out more...
                                </a>
                                <button class="navigation-toggle-button " aria-haspopup="true" aria-expanded="false">
                                    <span class="expand-icon"></span>
                                    <span class="screen-reader-only">Submenu for Find out more...</span>
                                </button>
                            </div>
                            <ul class="plain-list menu-body  hide">
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">A
                                        quick guide to the admissions process</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Study in Pakistan</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">University
                                        Admissions</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">Pakistan
                                        universities</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">The
                                        Pakistan higher education system</a>
                                </li>
                                <li class="menu-item">
                                    <a class="plain-link menu-sublevel-item-link" href="redirect-page.html">News
                                        and popular topics</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="plain-list menu-part">
                        <li class="menu-heading ">
                            <div class="menu-wrapper">
                                <a href="redirect-page.html" class="plain-link menu-heading-item-link  ">
                                    <i class="fa fa-envelope" aria-hidden="true"></i> University Admissions Support Centre
                                </a>
                            </div>
                            <ul class="plain-list menu-body  hide">
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

</header>

);

export default Header;
