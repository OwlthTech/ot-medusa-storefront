const MedusaCTA = () => {
  return (
    <div className=" bg-secondary/60">
      <div className="flex items-center justify-center flex-1 content-container">
        <span className="text-xs text-gray-600">Powered by -</span>
        <a href="https://Owlth.Tech" target="_blank" rel="noreferrer" className="items-center m-0">
          <PoweredBy />
        </a>
      </div>
    </div>
  )
}

const PoweredBy = () => {
  return (
    <span className="text-xs text-gray-600"> Owlth.Tech</span>
  )
}

export default MedusaCTA
