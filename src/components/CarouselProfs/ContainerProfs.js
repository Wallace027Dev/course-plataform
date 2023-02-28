

export default function ContainerProfs(props) {
  return (
    <>
      <div className="item" /* key={coursesID} */>
        <div className="image">
          <img src={props.profPhoto} alt="foto professor" />
        </div>
        <div className="info center">
          <span className="title">{props.profName}</span>
          <img src={props.logo} alt="logo da empresa do professor" />
        </div>
      </div>
    </>
  );
}
