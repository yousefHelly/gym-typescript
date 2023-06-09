import logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Footer = () => {
  return (
    <div className="bg-primary-100 py-8">
        <div className="container mx-auto grid md:grid-cols-3 gap-5 px-4 md:px-0">
            {/* info section */}
            <div className="col-span-1 flex flex-col gap-3">
                <img src={logo} alt="logo" className="w-24"/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, sequi laudantium est minus error fugit nisi hic mollitia maiores dolorem, laboriosam voluptas rerum nam autem, blanditiis asperiores aperiam dolorum qui.</p>
                <p className="capitalize">&copy; Evogym all rights reserved</p>
            </div>
                {/* links section */}
            <div className="col-span-1 flex flex-col gap-3">
                <h4 className="font-bold font-montserrat">Links</h4>
                <AnchorLink href={`#${SelectedPage.Benefits}`}>Benefits</AnchorLink>
                <AnchorLink href={`#${SelectedPage.OurClasses}`}>Our classes</AnchorLink>
                <AnchorLink href={`#${SelectedPage.ContactUs}`}>Contact Us</AnchorLink>
            </div>
                {/* contact section */}
            <div className="col-span-1 flex flex-col gap-3">
                <h4 className="font-bold font-montserrat">Contact Us</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, aliquid.</p>
                <p className="capitalize">+20 155 250 5996</p>
            </div>
        </div>
    </div>
  )
}

export default Footer