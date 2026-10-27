import { Mail } from 'lucide-react'
import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

export const whatsappUrl = 'https://wa.me/243980307974'

export const socials = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gracia-van-siem-575865347/',
  },
  {
    icon: FaFacebook,
    label: 'Facebook',
    href: 'https://web.facebook.com/gracia.saint.van.s',
  },
  { icon: FaWhatsapp, label: 'WhatsApp', href: whatsappUrl },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/graciasainvans190',
  },
  { icon: Mail, label: 'Email', href: 'mailto:vansiemgracia03@gmail.com' },
]
