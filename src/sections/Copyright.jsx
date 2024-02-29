

const Copyright = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  return (
    <section className="flex flex-col gap-5 justify-center items-center text-slate-200/50 text-sm">
        <div className="flex gap-5">
            <p className="v-line ">Privacy Policy</p>

            <p className="v-line">Terms and Conditions </p>
            <p>Cookies</p>
        </div>
        <p>&copy; {currentYear}. All rights reserved </p>
    </section>
  )
}

export default Copyright