import React from 'react'
import { useState } from 'react'
import FilterButton from '../Portfolio/FilterButton/FilterButton'
import './Blog.css'

const Blog = () => {
    const [filterCombos, setFilterCombos] = useState([
        "Temp"
    ])
    const [filteredIn, setFilteredIn] = useState([
        "Temp"
    ])
    const [filteredOut, setFilteredOut] = useState([])
    const [selected, setSelected] = useState([])
    
    const handleSelect = currentFilter => {
        let previousSelectedFilters = selected;
        let ind = previousSelectedFilters.indexOf(currentFilter);
        // filtering logic
        let fc = filterCombos;
        let fo = filteredOut;
        // console.log(previousSelectedFilters, ind, fc, fo, currentFilter);

        // if current selected filter does not exist in previously selected filters
        if (ind === -1) {
            previousSelectedFilters =
                previousSelectedFilters.concat(currentFilter); // the problem was here; concat method returns an array
            fc.forEach((element) => {
                console.log(element);
                if (!element.includes(currentFilter)) {
                    if (
                        !fo.includes(element) &&
                        !previousSelectedFilters.includes(element)
                    ) {
                        fo = fo.concat(element);
                    }
                }
            });
            // if current selected filter DOES exist in previously selected filters
        } else {
            previousSelectedFilters.splice(ind, 1); // removes current selected filter

            // clear "filtered out" if none selected
            if (previousSelectedFilters.length < 1) {
                fo = [];
            }
        }

        let fi = [];
        fc.forEach((elFC) => {
            if (fo.every((elFO) => elFO !== elFC)) {
                fi = fi.concat(elFC);
            }
        });

        setSelected(previousSelectedFilters)
        setFilterCombos(fc)
        setFilteredIn(fi)
        setFilteredOut(fo)
        
        return {
            selected: previousSelectedFilters,
            filterCombos: fc,
            filteredOut: fo,
            filteredIn: fi,
        };
    }

    return (
        <div className="blog_page">
            <FilterButton
                filteredIn={filteredIn}
                filteredOut={filteredOut}
                text="Temp"
                onClick={(urmom) => handleSelect(urmom)}
                selected={selected}
            />
        </div>
    )
}

export default Blog