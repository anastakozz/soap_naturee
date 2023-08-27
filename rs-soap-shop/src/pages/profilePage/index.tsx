import React, { useEffect, useState } from 'react'
import { getAccountData } from '../../services/account.service'
import { AddressCardI } from '../../lib/interfaces'
import EmptyButton from '../../components/buttons/emptyButton'
import BannerPageName from '../../components/bannerPageName'
import AddressCard from '../../components/addressCard'
import EditIcon from '../../icons/editIcon'

const countries = [
  {
    code: 'IT',
    country: 'Italy'
  },
  {
    code: 'ES',
    country: 'Spain'
  },
  {
    code: 'DE',
    country: 'Germany'
  }
]

export function dataAdapterToFullName(code: string): string {
  return countries.find(el => el.code == code).country
}

function ProfilePage() {
  const [account, setAccount] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getAccountData()
      .then(resp => {
        setLoading(false)
        setAccount(resp.data)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])
  console.log(account)
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='bg-secondaryColor dark:bg-grayMColor'>
          <BannerPageName>My Profile</BannerPageName>
          <div className='py-sm px-sm max-w-[1440px] mx-auto lg:px-big'>
            <div>
              <div className='border-b-2 border-accentColor dark:border-basicColor p-2 flex justify-between items-center mb-4'>
                <h3 className='text-h3 text-accentColor dark:text-basicColor font-bold'>My personal information</h3>
                <EditIcon />
              </div>
              <h4 className='text-h4 text-accentColor dark:text-basicColor'>First Name:</h4>
              <p className='italic'>{account?.firstName}</p>
              <h4 className='text-h4 text-accentColor dark:text-basicColor'>Last Name:</h4>
              <p className='italic'>{account?.lastName}</p>
              <h4 className='text-h4 text-accentColor dark:text-basicColor'>Date of birth:</h4>
              <p className='italic'>{account?.dateOfBirth}</p>
              <h4 className='text-h4 text-accentColor dark:text-basicColor'>E-mail:</h4>
              <p className='italic'>{account?.email}</p>
            </div>
            <div>
              <div className='border-b-2 border-accentColor dark:border-basicColor p-2 flex justify-between items-center mb-4'>
                <h3 className='text-h3 text-accentColor dark:text-basicColor font-bold'>My list of addresses</h3>
                <EditIcon />
              </div>
              <div className='flex flex-col justify-between items-center md:flex-row flex-wrap'>
                {account?.addresses.map((address: AddressCardI) => (
                  <AddressCard key={address.id} address={address} account={account} />
                ))}
              </div>
            </div>
            <EmptyButton>Change password</EmptyButton>
          </div>
        </div>
      )}
    </>
  )
}

export default ProfilePage
