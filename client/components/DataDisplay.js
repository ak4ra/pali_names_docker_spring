function DataDisplay({ data }) {
  return (
    <div className="display">
      <ul>
        {data.length > 0 &&
          data.map(name => (
            <li key={name.id}>
              <a href={name.link} target="_blank">
                {name.paliName}
              </a>
            </li>
          ))}
      </ul>
      <style jsx>{`
        .display {
          margin-top: 3rem;
          font-size: 2rem;
        }

        li {
          list-style-type: none;
          display: flex;
        }

        a:link,
        a:visited {
          color: #c299fc;
          text-decoration: none;
          width: 100%;
          padding: 0.5rem 1rem;
        }

        a:hover {
          color: white;
          background-color: #cb1acb;
        }
      `}</style>
    </div>
  );
}

export default DataDisplay;
