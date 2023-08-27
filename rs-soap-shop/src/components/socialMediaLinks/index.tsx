import VkIcon from '../../icons/vkIcon';
import VkIconDark from '../../icons/vkIconDark';
import InstagramIcon from '../../icons/instagramIcon';
import InstagramIconDark from '../../icons/instagramIconDark';
import FacebookIcon from '../../icons/facebookIcon';
import FacebookIconDark from '../../icons/facebookIconDark';

function SocialMediaLinks() {
  return (
    <div className='flex items-center mb-4'>
      <a className='mr-sm' href='#'>
        <VkIcon />
        <VkIconDark />
      </a>
      <a className='mr-sm' href='#'>
        <InstagramIcon />
        <InstagramIconDark />
      </a>
      <a className='' href='#'>
        <FacebookIcon />
        <FacebookIconDark />
      </a>
    </div>
  );
}

export default SocialMediaLinks;
