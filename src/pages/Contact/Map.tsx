const Map = () => {
  const placeholderStyles = {
    display: "grid",
    placeContent: "center",
    width: "100%",
    height: "480px",
    maxWidth: "1200px",
    marginInline: "auto",
    backgroundColor: "var(--clr-neutral-500)",
    color: "var(--clr-neutral-100)",
  };

  return (
    <section
      style={{ paddingBlock: "120px", paddingInline: "10px" }}
      className="map"
    >
      <div style={placeholderStyles}>Map Placeholder</div>
    </section>
  );
};

export default Map;
