import React from 'react';
//import "../../page-settings.css";

const HeroSection = () => (

    <form id="search_initial" class="education-search hero-image startpage international" role="search" method="get" action="redirect-page.html">
    <div class="content">
        <h1><span class="multiline-highlight">Apply to courses and programmes in all of <span
                    class="Pakistan">Pakistan</span></span>
        </h1>

        <div class="searcharea">
            <div class="dropdown">
                <select id="semesters-transparent" name="period">
                    <option value="11"> Summer 2021</option>
                    <option value="12"> Autumn 2021</option>
                    <option value="13" selected> Spring 2022</option>
                    <option value="15"> Autumn 2022</option>
                </select>
                <label for="semesters-transparent">Semester <span class="optionaltext">
                        (Optional)
                    </span>
                </label>
            </div>

            <div class="freetext_search">
                <div class="textfield">
                    <input type="search" id="freetext" name="freeText" value="" autocomplete="off" 
                    placeholder="Keywords e.g. subject/course name/location" maxlength="999"/>
                    <label for="freetext">Courses and programmes</label>
                </div>
                <div id="freeTextSuggestions"></div>
            </div>
            <button class=" contained-button" type="submit" id="searchbucdtton">
                Find courses <span class="dynamic-content"></span>
            </button>
        </div>
        <div class="linkarea">
            <div class="basebackground">
                <a href="redirect-page.html" class="block-link">
                    Find courses & programmes
                </a>
            </div>
        </div>
    </div>
</form>

// <!-- Hero Section Ends -->
);


export default HeroSection;