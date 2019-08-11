import React from 'react';
import {VisibilityFilters} from "../actions/actions";
import FilterLink from "../containers/FilterLink";

const Footer = () => (
    <div>
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_IN_PROGRESS}>
            Active
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_DONE}>
            Completed
        </FilterLink>
    </div>
);

export default Footer;
