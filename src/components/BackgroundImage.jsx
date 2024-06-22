

export const BackgroundImage = ({imgMobile, imgTablet, imgDesktop}) => {
  return (
    <picture className="absolute -z-10">
        <source media="(max-with:374px" srcSet={imgMobile}/>
        <source media="(min-width:375px) and (max-width: 767px)" srcSet={imgTablet}/>
        <source media="(min-width:768px)" srcSet={imgDesktop}/>
        <img src={imgMobile} alt="default-image" />
    </picture>
  )
}
