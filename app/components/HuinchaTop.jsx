const HuinchaTop = () => {
  return (
    <div className='huincha-top px-4 md:px-10 py-1 text-center md:text-start text-base md:text-sm bg-gray-200 font-light flex flex-col md:flex-row md:justify-between'>
        <div className='hidden md:block'>
            <a href="tel:+569-22468611">+56922468611</a>
            <span className='px-3'>|</span>
            <a href="mailto:alejandra@romerovaldes.cl">alejandra@romerovaldes.cl</a>
        </div>
        <div itemProp="openingHours" itemScope itemType="http://schema.org/OpeningHoursSpecification">
            <p itemProp="openingHours" dateTime="Lu-Vi 08:00-20:00">Horarios de atención: Lun - Vie: 8am - 9pm</p>
        </div>
    </div>
  )
}

export default HuinchaTop