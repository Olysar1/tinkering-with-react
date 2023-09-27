const RadioComponent = () => {
  return (
    <div className="form-item form-list-wrapper">
      <label>Best Stooge</label>
      <div className="form-list">
        <div className="form-list-item">
          <input name="best_stooge" type="radio" />
          <label>Larry</label>
        </div>
        <div className="form-list-item">
          <input name="best_stooge" type="radio" />
          <label>Moe</label>
        </div>
        <div className="form-list-item">
          <input name="best_stooge" type="radio" />
          <label>Curly</label>
        </div>
      </div>
    </div>
  );
};

export default RadioComponent;
