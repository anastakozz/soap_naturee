import { SelectCategory } from './selectCategory/selectCategory';
import SortingView from './sorting/sortingView';
import FilterModule from './filter/filterView';
import SearchView from './search/searchView';
import Breadcrumb from '../../../components/BasicBreadcrumbs';
import React from 'react';
import { NavigationViewProps } from '../../../lib/types';

export function NavigationView({ nav }: NavigationViewProps) {
  return (
    <div className='bg-accentColor dark:bg-accentDarkColor text-primaryColor'>
      <div className='flex flex-wrap justify-between items-center max-w-[1440px] py-4 px-4 mx-auto lg:px-big'>
        <SelectCategory nav={nav} />
        <Breadcrumb nav={nav} />
        <SortingView />
        <FilterModule />
        <SearchView />
      </div>
    </div>
  );
}
