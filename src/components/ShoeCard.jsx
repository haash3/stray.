
const ShoeCard = ({imgDisplay, changeHeroImg, currentHeroImg}) => {
  
  const handleClick = ()=>{
    if(currentHeroImg !== imgDisplay.heroShoe){
        changeHeroImg(imgDisplay.heroShoe)
    }
  }
  
    return (
  <div 
  className={`border-2 rounded-xl
  ${currentHeroImg === imgDisplay.heroShoe
    ? 'border-coral-red'
    : 'border-transparent'
    } cursor-pointer max-sm:flex-1
  `} onClick={handleClick}
  >

    <div className="flex justify-center items-center  bg-center bg-cover  bg-red-200 sm:w-30 sm:h-30 rounded-xl max-sm:p-2">
        <img
            src={imgDisplay.thumbnail}
            alt="shoe collection"
            width={100}
            height={100}
            className="object-contain"
            />
    </div>

  </div>
  )
}

export default ShoeCard