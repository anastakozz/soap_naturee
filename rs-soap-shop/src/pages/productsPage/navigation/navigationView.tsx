import { SelectCategory } from './selectCategory/selectCategory';
import SortingView, { sortingQueryString } from './sorting/sortingView';
import FilterView from './filter/filterView';
import SearchView from './search/searchView';
import Breadcrumb from '../../../components/BasicBreadcrumbs';
import React from 'react';
import { NavigationViewProps } from '../../../lib/interfaces';

export function NavigationView({ nav, changeQuery }: NavigationViewProps) {
  return (
    <div className='bg-accentColor dark:bg-accentDarkColor text-primaryColor'>
      <div className='flex flex-wrap justify-between items-center max-w-[1440px] py-4 px-4 mx-auto lg:px-big'>
        <div className='flex flex-wrap gap-[10px] md:min-w-[550px]'>
          <SelectCategory nav={nav} />
          <Breadcrumb nav={nav} />
        </div>

        <SortingView />
        <FilterView changeQuery={changeQuery} />
        <SearchView />
      </div>
    </div>
  );
}
