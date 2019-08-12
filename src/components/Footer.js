import React from 'react';
import {VisibilityFilters} from "../actions/actions";
import FilterLink from "../containers/FilterLink";

const Footer = () => (
    <div classname="footer-group-button">
        {/*<span>Show: </span>*/}

        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_DONE}>
            Done
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_IN_PROGRESS}>
            In progress
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_TODO}>
            Todo
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_DELETED}>
            Deleted
        </FilterLink>
    </div>
);

export default Footer;
