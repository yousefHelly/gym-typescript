export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    OurClasses = 'our-classes',
    ContactUs = 'contact-us'
}

export type benefitType = {
    icon: React.ReactNode,
    heading: string,
    description: string
}

export type Class =  {
    img: string,
    classType: string,
    description: string
  }